import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule,CheckIcon } from 'lucide-angular';

@Component({
  selector: 'app-draft.component',
  imports: [LucideAngularModule],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftComponent {
  readonly CheckIcon = CheckIcon;
  coaches= [{name:'Rodrigo', team:'', division:''}];
  router= inject(Router)
  goToClassification(){
    this.router.navigate(['classification'])
  }
}
