import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
