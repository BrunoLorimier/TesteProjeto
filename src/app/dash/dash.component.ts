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
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Doação de sangue', cols: 1, rows: 1 },
          { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
          { title: 'Sem evento', cols: 1, rows: 1 },
          { title: 'Sem evento', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Doação de sangue', cols: 2, rows: 1 },
        { title: 'Arrecadação de alimentos', cols: 1, rows: 1 },
        { title: 'Sem evento', cols: 1, rows: 2 },
        { title: 'Sem evento', cols: 1, rows: 1 }
      ];
    })
  );

  eventos: Evento[] = []
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
