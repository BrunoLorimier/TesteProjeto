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

  private busca: string = "busca"
  private idEvento: string;
  public evento: Evento;


  constructor(public eventoService: EventoService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
  //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
  //     if (paramMap.has("idEvento")){
  //       this.busca = "buscar"
  //       this.idEvento = paramMap.get("idEvento")
  //       this.eventoService.getEvento(this.idEvento).subscribe(dadosEvento => {
  //         this.evento = {
  //           id: dadosEvento.id,
  //           nome: dadosEvento.nome,
  //           dt_inicio: dadosEvento.dt_inicio,
  //           dt_final: dadosEvento.dt_final,
  //           desc: dadosEvento.desc,
  //           zona: dadosEvento.zona,
  //           tipo: dadosEvento.tipo,
  //           tipoEntidade: dadosEvento.tipoEntidade
  //         }
  //       })
  //    }
  //   })
    
  }

  // removerIns(id: string){
  //   this.eventoService.removerIns(id)
  // }

}
