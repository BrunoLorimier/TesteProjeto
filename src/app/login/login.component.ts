import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: string

  onLogin(form: NgForm){
    if (form.invalid) return
    this.usuarioService.login(form.value.email, form.value.senha)
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
