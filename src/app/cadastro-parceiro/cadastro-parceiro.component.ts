import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParceiroService } from '../parceiro/parceiro.service';

@Component({
  selector: 'app-cadastro-parceiro',
  templateUrl: './cadastro-parceiro.component.html',
  styleUrls: ['./cadastro-parceiro.component.css']
})
export class CadastroParceiroComponent implements OnInit {

  onEnviar (form: NgForm){
    if (form.invalid) return
    this.parceiroService.enviarParceiro(form.value.nome, form.value.email, form.value.senha, form.value.end,
      form.value.telefone, form.value.zona, form.value.tipo)
  }

  constructor(private parceiroService: ParceiroService) { }

  ngOnInit(): void {
  }

}
