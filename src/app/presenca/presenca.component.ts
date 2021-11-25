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
  public nome: string;
  public desc: string;


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
        if(this.idEvento == "1"){
          this.nome = 'Doação de Sangue'
          this.desc = "Venha ajudar doando sangue! A doação de sangue é um gesto solidário de doar uma pequena quantidade do próprio sangue para salvar a vida de pessoas que se submetem a tratamentos e intervenções médicas de grande porte e complexidade, como transfusões, transplantes, procedimentos oncológicos e cirurgias."
        }
        else if(this.idEvento == "2"){
          this.nome = 'Doação de alimentos'
          this.desc = 'Doar alimentos é se dedicar a uma causa que salva vidas, pois garante a sobrevivência de famílias necessitadas. Atualmente, em meio a uma pandemia, com muitos perdendo empregos e com dificuldades financeiras, a doação de alimentos é uma colaboração de fundamental importância.'
        }
        else if(this.idEvento == "3"){
          this.nome = 'Doação de brinquedos'
          this.desc = "O programa Helping kids, do Governo Federal, iniciou uma campanha para arrecadar brinquedos para crianças em situação de vulnerabilidade social atendidos por instituições de todo o País. A arrecadação será de carrinhos, bolas, bonecas, jogos educativos e pelúcia. O objetivo é presentear os pequenos no Natal."
        }
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
