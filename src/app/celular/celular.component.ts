import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent implements OnInit {
  public email: any
  public produto: any
  public produto2: any
  public nome: any
  constructor(private produtos: Produto) {

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      this.atualizarProdutos()

    })

  }
  //traz todo os produtos
  public atualizarProdutos(): void {
    this.produtos.consultarProdutosPorCategoria(this.email, 'smartphones')
      .then((produtos) => {
        this.produto=produtos
        console.log(this.produto)
        

      })
      /*this.produtos.consultarProdutos2(this.email)
      .then((produtos) => {
        this.produto2=produtos
        console.log(this.produto)

      })
      .then(()=>{
        this.ok=true
      })*/
      this.produtos.acessarDadosUsuarioDetalhe(this.email)
      
      this.produtos.acessarDadosProduto(this.email)
      .then((nome)=>{
        this.nome = nome
        console.log(this.nome)

      })
      


  }
}
