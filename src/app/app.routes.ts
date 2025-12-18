import { Routes } from '@angular/router';
import { SplashComponent } from './Splash/splash.component';
import { CoachesComponent } from './coaches.component/coaches.component';
import { DraftComponent } from './draft.component/draft.component';
import { ClassificationComponent } from './classification.component/classification.component';

export const routes: Routes = [
    {
        path:'',
        component:SplashComponent
    },
    {
        path:'coaches',
        component:CoachesComponent
    },
    {
        path:'draft',
        component:DraftComponent
    },
    {
        path:'classification',
        component:ClassificationComponent
    }
];
