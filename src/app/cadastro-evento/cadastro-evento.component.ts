import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoService } from '../evento/evento.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  onCadastro (form: NgForm){
    if (form.invalid) return
    this.eventoService.criarEvento(form.value.nome, form.value.datai, form.value.dataf, form.value.desc)
  }

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
  }

}
