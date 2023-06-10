import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';
import { Usuario } from 'src/app/acesso/usuario.model';

@Component({
  selector: 'app-eletronicos',
  templateUrl: './eletronicos.component.html',
  styleUrls: ['./eletronicos.component.css']
})
export class EletronicosComponent implements OnInit {
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
    this.produtos.consultarProdutosPorCategoria(this.email, 'eletronicos')
      .then((produtos) => {
        this.produto = produtos
        console.log(this.produto)
      })

  }

}
