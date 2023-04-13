import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Autenticacao {



    public token_id: string = ""

    constructor(private rotas: Router) { }

    public CadastrarUser(usuario: Usuario): Promise<any> {
        //this.contador ++       
        //console.log("Teste de recuperação dos dados de cadastro:",this.contador , usuario);
        //para colocar o usuário no sistema de utenticaçoa do firebase
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                // para relacionar o e-mail ao restante dos atributos do usuario
                //o campo "usuario_detalhe" está sendo criado aqui e faz referencia ao trecho -
                // databaseURL: "https://firebox-754d7-default-rtdb.firebaseio.com", existente no app.component.ts
                firebase.database().ref(`usuario_detalhe/${btoa(resposta.email)}`)
                    .push(usuario)
                alert('Usuário cadastrado com sucesso')

            })
            .catch((err: Error) => console.log(err))
            .then((resposta: any) => { console.log(resposta) })
    }



    // autenticação utilizando a função nativa do firebase "signInWithEmailAndPassword"
    public autenticar(email: string, senha: string) {
        console.log('autenticação realizada com sucesso através do sistema de autenticação do FireBase:')
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {

                alert('Autenticação realizada com sucesso')
                firebase.auth().currentUser?.getIdToken()
                    .then((id: string) => {
                        this.token_id = id
                        console.log(this.token_id)
                        this.rotas.navigate(['/home']);

                    })



            })
            .catch((err: Error) => {
                alert('algo deu errado')
                console.log(err)
            })

    }

    // deleta usuário do banco de dados
    public DeletarUsuarioBD(email: string): Promise<any> {

        const ref = firebase.database().ref(`usuario_detalhe/${btoa(email)}`);


        return ref.remove()
            .then(() => {

                console.log('Dados deletados com sucesso');
            })
            .catch((err: Error) => {

                console.log(err);
            });
    }


    //esta função só funcionará se o usuário estiver autenticado e deleta apenas do sistema de autenticação

    public desativarConta(): void {
        firebase.auth().currentUser?.delete()
            .then(() => {

                alert('Conta desativada com sucesso');
                this.rotas.navigate(['/cadastro']); 
            })
            .catch((err: Error) => console.log(err));
    }




}