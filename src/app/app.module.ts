import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { EventoService } from './evento/evento.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu-usuario/menu.component';
import { AdmMenuComponent } from './menu/menu-adm/menu-adm.component';
import { ModeradorMenuComponent } from './menu/menu-moderador/menu-moderador.component';
import { PresencaComponent } from './presenca/presenca.component';
import { TermosComponent } from './termos/termos.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { CadastroParceiroComponent } from './cadastro-parceiro/cadastro-parceiro.component';
import { CadastroAcoesComponent } from './cadastro-acoes/cadastro-acoes.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashComponent,
    AdmMenuComponent,
    ModeradorMenuComponent,
    PresencaComponent,
    TermosComponent,
    CadastroEventoComponent,
    CadastroParceiroComponent,
    CadastroAcoesComponent,
    NovoUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
