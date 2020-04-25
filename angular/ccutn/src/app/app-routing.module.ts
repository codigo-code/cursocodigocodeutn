import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { DescripcionComponent } from './descripcion/descripcion.component';


const routes: Routes = [
  { path: 'persona', component: PersonaComponent },
  { path: 'desc', component: DescripcionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
