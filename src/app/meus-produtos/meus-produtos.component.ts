import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';
import { Favoritos } from '../favoritos.service';

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
  constructor(private produtos: Produto, private favoritos:Favoritos) {

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
}

