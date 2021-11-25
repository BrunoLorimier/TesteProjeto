import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EventoService } from '../evento/evento.service';
import { Evento } from '../evento/evento.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit, OnDestroy{

  eventos: Evento[] = [{
    id:'1',
    nome: 'Doação de Sangue',
    desc: 'Venha ajudar doando sangue! A doação de sangue é um gesto solidário de doar uma pequena quantidade do próprio sangue para salvar a vida de pessoas que se submetem a tratamentos e intervenções médicas de grande porte e complexidade, como transfusões, transplantes, procedimentos oncológicos e cirurgias.'
  },
  {
    id: '2',
    nome: 'Doação de alimentos',
    desc: 'Doar alimentos é se dedicar a uma causa que salva vidas, pois garante a sobrevivência de famílias necessitadas. Atualmente, em meio a uma pandemia, com muitos perdendo empregos e com dificuldades financeiras, a doação de alimentos é uma colaboração de fundamental importância.'
  },
  {
    id: '3',
    nome: 'Doação de brinquedos',
    desc: "O programa Helping kids, do Governo Federal, iniciou uma campanha para arrecadar brinquedos para crianças em situação de vulnerabilidade social atendidos por instituições de todo o País. A arrecadação será de carrinhos, bolas, bonecas, jogos educativos e pelúcia. O objetivo é presentear os pequenos no Natal."
  },
]
  private eventoSubscription: Subscription

  onDelete(id: string) {
    this.eventoService.removerEvento(id)
  }

  ngOnDestroy(): void {
    this.eventoSubscription.unsubscribe()
  }

  constructor(private breakpointObserver: BreakpointObserver, private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.getEventos()
    this.eventoSubscription = this.eventoService.getEventosAtualizadosObservable().subscribe((eventos: Evento[]) => {
      this.eventos = eventos
    })
  }
}

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Doação de sangue', cols: 1, rows: 1 },
  //         { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
  //         { title: 'Sem evento', cols: 1, rows: 1 },
  //         { title: 'Sem evento', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Doação de sangue', cols: 2, rows: 1 },
  //       { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
  //       { title: 'Sem evento', cols: 1, rows: 2 },
  //       { title: 'Sem evento', cols: 1, rows: 1 }
  //     ];
  //   })
  // );