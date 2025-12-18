import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-draft.component',
  imports: [],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftComponent {
  coaches= [{name:'Rodrigo', team:'', division:''}];
}
