import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, CheckIcon } from 'lucide-angular';
@Component({
  selector: 'app-splash',
  imports: [LucideAngularModule],
  templateUrl: './Splash.html',
  styleUrl: './Splash.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent {
    readonly FileIcon = CheckIcon;
    router=inject(Router)
    navigateToCoaches() {
     this.router.navigate(['coaches'])
  }
 }
