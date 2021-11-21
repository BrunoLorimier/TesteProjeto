import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  onSignup (form: NgForm){
    if (form.invalid) return
    this.usuarioService.criarUsuario(form.value.cpf, form.value.nome, form.value.email, form.value.senha, form.value.end, form.value.tel, form.value.data)
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
