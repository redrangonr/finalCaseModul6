import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './bolatoan/register/register.component';

const routes: Routes = [


  {
    path : 'signup',
    component : RegisterComponent,
    pathMatch : 'full'
  },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
