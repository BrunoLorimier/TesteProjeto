import { Component, Input, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Evento } from '../evento/evento.model';
import { EventoService } from '../evento/evento.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  private idEvento: string;
  public evento: Evento;
  public minNumero = 0;
  public Numero = 10;


  constructor(public eventoService: EventoService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("idEvento")){
        this.idEvento = paramMap.get("idEvento")
        this.eventoService.getEvento(this.idEvento).subscribe(dadosEvento => {
          this.evento = {
            id: dadosEvento.id,
            nome: dadosEvento.nome,
            dt_inicio: dadosEvento.dt_inicio,
            dt_final: dadosEvento.dt_final,
            desc: dadosEvento.desc,
            numero: dadosEvento.numero,
            minNumero: dadosEvento.minNumero
          }
        })
     }
    })
    
  }

  confirmar(minNumero: number){
    minNumero += 1
    this.minNumero = minNumero
    if(this.minNumero > this.Numero){
      this.minNumero = this.Numero
    }
    this.eventoService.atualizarNumero(
      this.idEvento,
      this.evento.nome,
      this.minNumero
    )
  }

  remover(minNumero: number){
    minNumero -= 1
    this.minNumero = minNumero
    if(this.minNumero <= 0){
      this.minNumero = 0
    }
    this.eventoService.atualizarNumero(
      this.idEvento,
      this.evento.nome,
      this.minNumero
    )
  }

}
