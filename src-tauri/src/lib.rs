use tauri_plugin_updater::UpdaterExt;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_updater::Builder::new().build())
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      
      // Check for updates on startup (only in production)
      #[cfg(not(debug_assertions))]
      {
        let handle = app.handle().clone();
        tauri::async_runtime::spawn(async move {
          if let Ok(update) = handle.updater() {
            match update.check().await {
              Ok(Some(update_info)) => {
                println!("Update available: {}", update_info.version);
                // The dialog is automatically shown when configured
              }
              Ok(None) => {
                println!("App is up to date");
              }
              Err(e) => {
                eprintln!("Failed to check for updates: {}", e);
              }
            }
          }
        });
      }
      
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
