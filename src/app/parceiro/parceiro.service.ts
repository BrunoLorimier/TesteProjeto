import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Parceiro } from "./parceiro.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ParceiroService{

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ){}

    enviarParceiro (nome: string, email: string, senha: string, endereco: string, telefone: string, zona: string, tipo: string){
        const parceiro: Parceiro = {
            nome: nome,
            email: email,
            senha: senha,
            endereco: endereco,
            telefone: telefone,
            zona: zona,
            tipo: tipo
        }
        this.httpClient.post('http://localhost:3000/parceiro', parceiro).subscribe(resposta => {
            console.log(resposta)
            this.router.navigate(['/menu'])
        })
    }

}