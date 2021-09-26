import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
   {path: '', component: HomeComponent},
{path: 'app-home', component: HomeComponent},
{path: 'app-about', component: AboutComponent},
{path: 'app-training', component: TrainingComponent},
{path: 'app-contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
