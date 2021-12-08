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
