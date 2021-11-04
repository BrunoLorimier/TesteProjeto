import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu-usuario/menu.component';
import { PresencaComponent } from './presenca/presenca.component';
import { DashComponent } from './dash/dash.component';
import { TermosComponent } from './termos/termos.component';

const routes: Routes = [
  {path:'', component: DashComponent},
  {path:'evento', component: PresencaComponent},
  {path: 'termos', component: TermosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
