import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoService } from '../evento/evento.service';

@Component({
  selector: 'app-cadastro-acoes',
  templateUrl: './cadastro-acoes.component.html',
  styleUrls: ['./cadastro-acoes.component.css']
})
export class CadastroAcoesComponent implements OnInit {

  cadastrar (form: NgForm){
    if (form.invalid) return
    this.eventoService.cadastrarEvento(form.value.nome, form.value.email, form.value.telefone, form.value.endereco, form.value.cep, form.value.data, form.value.numero, form.value.class)
    form.resetForm()
  }

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
  }

}
