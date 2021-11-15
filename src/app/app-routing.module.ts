import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu-usuario/menu.component';
import { PresencaComponent } from './presenca/presenca.component';
import { DashComponent } from './dash/dash.component';
import { TermosComponent } from './termos/termos.component';
import { ModeradorMenuComponent } from './menu/menu-moderador/menu-moderador.component';
import { AdmMenuComponent } from './menu/menu-adm/menu-adm.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'', component: DashComponent},
  {path: '', component: LoginComponent},
  {path: 'signup', component: NovoUsuarioComponent},
  {path:'evento', component: PresencaComponent},
  {path: 'termos', component: TermosComponent},
  {path: 'menu', component: MenuComponent, children: [
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
