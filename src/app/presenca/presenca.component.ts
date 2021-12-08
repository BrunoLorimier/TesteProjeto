import { Component, Input, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Evento } from '../evento/evento.model';
import { EventoService } from '../evento/evento.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  private idEvento: string;
  public evento: Evento[] = [];
  private eventoSubscription: Subscription
  // public minNumero = 0;
  // public Numero = 10;
  // public nome: string;
  // public desc: string;


  constructor(public eventoService: EventoService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.idEvento = paramMap.get("idEvento")
        this.eventoService.getEvento(this.idEvento)
        this.eventoSubscription = this.eventoService.getEventosAtualizadosObservable().subscribe((eventos: Evento[]) => {
          this.evento = eventos
        })
    })
    
  }

  confirmar(minNumero: number, numero: number){
    minNumero += 1
    if(minNumero > numero){
      minNumero = numero
    }
    this.eventoService.atualizarNumero(this.idEvento, minNumero)
    // this.evento.minNumero = minNumero
    // if(this.evento.minNumero > this.evento.numero){
    //   this.evento.minNumero = this.evento.numero
    // }
    // this.eventoService.atualizarNumero(
    //   this.idEvento,
    //   this.evento.nome,
    //   this.evento.minNumero
    // )
  }

  remover(minNumero: number, numero: number){
    minNumero -= 1
    if(minNumero <= 0){
      minNumero = 0
    }
    this.eventoService.atualizarNumero(this.idEvento, minNumero)
    // this.evento.minNumero = minNumero
    // if(this.evento.minNumero <= 0){
    //   this.evento.minNumero = 0
    // }
    // this.eventoService.atualizarNumero(
    //   this.idEvento,
    //   this.evento.nome,
    //   this.evento.minNumero
    // )
  }

}
