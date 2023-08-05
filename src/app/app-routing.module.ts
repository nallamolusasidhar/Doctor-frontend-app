import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"delete",component:DeleteComponent},
  {path:"display",component:DisplayComponent},
  {path:"home",component:HomeComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"upload",component:UploadComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
