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

    criarEvento (nome: string, dt_inicio: string, dt_final: string, desc: string){
        const evento: Evento = {
            nome: nome,
            dt_inicio: dt_inicio,
            dt_final: dt_final,
            desc: desc
        }
        this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/', evento).subscribe(resposta => {
            evento.id = resposta.id
            console.log(resposta.mensagem)
            this.eventos.push(evento)
            this.eventosAtualizados.next([...this.eventos])
            this.router.navigate(['/menu'])
        })
    }

    cadastrarEvento (nome: string, email: string, telefone: string, endereco: string, cep: string, dt_inicio: string, numero: number, classi: string){
        const evento: Evento = {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cep: cep,
            dt_inicio: dt_inicio,
            numero: numero,
            classi: classi
        }
        this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/', evento).subscribe(resposta => {
            evento.id = resposta.id
            console.log(resposta.mensagem)
            this.eventos.push(evento)
            this.eventosAtualizados.next([...this.eventos])
            this.router.navigate(['/menu'])
        })

    }

    getEventosAtualizadosObservable(){
        return this.eventosAtualizados.asObservable()
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

    getEvento(idEvento: string){
        return this.httpClient.get<{id: string, nome: string, dt_inicio: string, dt_final: string, desc: string, numero: number, minNumero: number}>(`http://localhost:3000/`)
    }
    

    removerEvento(id: string): void {
        this.httpClient.delete(`http://localhost:3000/`).subscribe(() => {
            this.eventos = this.eventos.filter(cli => cli.id !== id)
            this.eventosAtualizados.next([...this.eventos])
        })
    }

    atualizarNumero(id: string, nome: string, minNumero: number){
        const evento: Evento = {id, nome, minNumero}
        this.httpClient.put(`http://localhost:3000`, evento).subscribe(res => {
            const copia = [...this.eventos]
            const indice = copia.findIndex(cli => {
                cli.id === evento.id
            })
            copia[indice] = evento
            this.eventos = copia
            this.eventosAtualizados.next([...this.eventos])
            this.router.navigate(['/menu'])
        })
    }


}


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