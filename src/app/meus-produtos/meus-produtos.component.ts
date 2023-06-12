import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';
import { Favoritos } from '../favoritos.service';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.css']
})
export class MeusProdutosComponent implements OnInit {
  public email: any
  public produto: any
  public produto2: any
  public nome: any
  constructor(private produtos: Produto, private favoritos:Favoritos, private autenticacao:Autenticacao) {

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      this.atualizarProdutos()

    })

  }
  //traz todo os produtos
  public atualizarProdutos(): void {
    this.produtos.consultarProdutosPorusuario(this.email)
      .then((produtos) => {
        this.produto=produtos
        console.log(this.produto)       

      })
      
     
  }
  recuperarproduto(produtos:any){
    this.favoritos.Favoritar(this.email,produtos)
    console.log(produtos)
  }
  DeletarProduto(produto:any){
    console.log(produto)
    this.produtos.DeletarProduto(produto)
    .then(()=>{
      
    })
  }
  async ApagarConta() {
    try {
      await this.autenticacao.DeletarUsuarioBD(this.email);
      await this.ApagarTudo(this.email);
      await this.autenticacao.desativarConta();      
      await Promise.all([
        this.autenticacao.sair(),
      ]);
    } catch (error) {
      
    }
  }
  

    public ApagarTudo(email:any){
      this.autenticacao.DeletarProdutosCadastrados(email)
      .then(() => {
        
      })

    }
}

