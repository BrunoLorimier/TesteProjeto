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
    nome: 'Jaguariúna Rodeo Festival 2021',
    desc: 'Jaguariúna Rodeo Festival 2021 in Jaguariúna. The concert will take place at Red Eventos in Jaguariúna. The festival starts the 26-11-2021 and it lasts untill the 04-12-2021'
  },
  {
    id: '3',
    nome: 'Formas de resolução de conflitos',
    desc: "O conteúdo em questão faz parte da série para o ensino básico produzida pelo corpo docente do Programa Direito na escola A seguir estão 1 e-book e um vídeo animado completos sobre o tema Formas de resolução de conflitos. O objetivo da serie é desburocratizar a linguagem da ciência do Direito e democratizar a informação a todos os públicos."
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