import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu-usuario/menu.component';
import { PresencaComponent } from './presenca/presenca.component';
import { DashComponent } from './dash/dash.component';
import { TermosComponent } from './termos/termos.component';
import { ModeradorMenuComponent } from './menu/menu-moderador/menu-moderador.component';
import { AdmMenuComponent } from './menu/menu-adm/menu-adm.component';

const routes: Routes = [
  // {path:'', component: DashComponent},
  {path:'evento', component: PresencaComponent},
  {path: 'termos', component: TermosComponent},
  {path: '', component: MenuComponent, children: [
    {path: '', component: DashComponent}, 
  ]},
  {path: 'adm', component: AdmMenuComponent, children: [
    {path: '', component: DashComponent}, 
  ]},
  {path: 'mod', component: ModeradorMenuComponent, children: [
    {path: '', component: DashComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
