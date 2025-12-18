import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, Field, validate, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { CheckIcon, LucideAngularModule, XIcon } from 'lucide-angular';

@Component({
  selector: 'app-coaches.component',
  imports: [LucideAngularModule, Field],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoachesComponent {


  readonly CheckIcon = CheckIcon;
  readonly CancelIcon= XIcon;

  router= inject(Router)
  
  max_coaches=4;
  readonly coaches = Array.from({ length: this.max_coaches }, (_, i) => i);

  coachesModel = signal({
    coach0: '',
    coach1: '',
    coach2: '',
    coach3: '',
  });
   coachesForm = form(this.coachesModel, (v)=>{
      validate(v.coach0, ({value, valueOf}) => {
      const coach0 = value()
      const coach1 = valueOf(v.coach1);
      const coach2 = valueOf(v.coach2);
      const coach3 = valueOf(v.coach3);
      if(coach0=='' && coach1=='' && coach2=='' && coach3==''){
         return {
          kind: 'passwordMismatch',
          message: 'Digite o nome de um treinador'
        }
      }
     
      return null
    })
   });
   navigateToSplash(){

    this.router.navigate(['']);
   }

   onSubmit($event: SubmitEvent) {
    debugger;
     $event.preventDefault();
     submit(this.coachesForm, async () => {
         this.router.navigate(['draft']);
     });    
     
   }
 }
