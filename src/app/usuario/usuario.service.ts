import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    constructor(
        private httpClient: HttpClient
    ){}

    criarUsuario (cpf: string, nome: string, email: string, senha: string, endereco: string, telefone: string, data: string){
        const usuario: Usuario = {
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            endereco: endereco,
            telefone: telefone,
            data: data
        }
        this.httpClient.post('http://localhost:3000/', usuario).subscribe(resposta => {
            console.log(resposta)
        })
    }

    login(email: string, senha: string){
        const usuario: Usuario = {
            email: email,
            senha: senha
        }
        this.httpClient.post('http://localhost:3000/', usuario).subscribe(resposta => {
            console.log(resposta)
        })
    }

}