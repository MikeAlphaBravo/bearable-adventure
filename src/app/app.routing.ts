import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondPageComponent } from './second-page/second-page.component'
// import { AnswerDetailComponent } from './answer-detail/answer-detail.component';



const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
    },
  // {
  // path: 'answer/:id',
  // component: AnswerDetailComponent
  //   }
  {
    path: 'second-page',
    component: SecondPageComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
