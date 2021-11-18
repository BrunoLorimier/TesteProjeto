import { Evento } from "./evento.model";
import { Subject } from "rxjs"
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({providedIn: 'root'})
export class EventoService{
    private eventos: Evento[] = []
    private eventosAtualizados = new Subject <Evento[]>()
    
    constructor(
        private httpClient: HttpClient,
        private router: Router
    ){}

    getEventosAtualizadosObservable(){
        return this.eventosAtualizados.asObservable()
    }

    getEvento(idEvento: string){
        return this.httpClient.get<{id: string, nome: string, dt_inicio: string, dt_final: string, desc: string, zona: string, tipo: string, tipoEntidade: string}>(`http://localhost:3000/evento/${idEvento}`)
    }

    getEventos(): void {
        this.httpClient.get <{mensagem: string, eventos:
        Evento[]}>('http://localhost:3000/')
        .subscribe(
        (dados) => {
        this.eventos = dados.eventos;
        this.eventosAtualizados.next([...this.eventos]);
        }
    )
}

    // getEventos(): void{
    //     this.httpClient.get<{mensagem: string, eventos: any}>('http://localhost:3000/evento')
    //     .pipe(map((dados) => {
    //         return dados.eventos.map((evento: { id: any; nome: any; dt_inicio: any; dt_final: any; desc: any; zona: any; tipo: any; tipoEntidade: any; }) => {
    //             return{
    //                 id: evento.id,
    //                 nome: evento.nome,
    //                 dt_inicio: evento.dt_inicio,
    //                 dt_final: evento.dt_final,
    //                 desc: evento.desc,
    //                 zona: evento.zona,
    //                 tipo: evento.tipo,
    //                 tipoEntidade: evento.tipoEntidade
    //             }
    //         })
    //     }))
    //     .subscribe((eventos) => {
    //         this.eventos = eventos
    //         this.eventosAtualizados.next([...this.eventos])
    //     })
    // }

    adicionarEvento(nome: string, dt_inicio: string, dt_final: string, desc: string, zona: string, tipo: string, tipoEntidade: string){
        const evento: Evento = {
            nome,
            dt_inicio,
            dt_final,
            desc,
            zona,
            tipo,
            tipoEntidade
        }
        this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/', evento).subscribe((dados) => { 
        evento.id = dados.id
        console.log(dados.mensagem)
        this.eventos.push(evento)
        this.eventosAtualizados.next([...this.eventos])
        this.router.navigate(['/menu'])
        })     
    }

    removerEvento(id: string): void {
        this.httpClient.delete(`http://localhost:3000/`).subscribe(() => {
            this.eventos = this.eventos.filter(cli => cli.id !== id)
            this.eventosAtualizados.next([...this.eventos])
        })
    }


}