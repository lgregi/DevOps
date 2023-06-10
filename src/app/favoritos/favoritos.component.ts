import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';
import { Favoritos } from '../favoritos.service';
import { Usuario } from 'src/app/acesso/usuario.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public email: any
  public produto: any
  constructor(private produtos: Produto, private favoritos: Favoritos) {

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      this.atualizarProdutos()
    })

  }
  //traz todo os produtos
  public atualizarProdutos(): void {    
    this.favoritos.consultarFavoritados(this.email)
      .then((produtos) => {
        this.produto = produtos
        console.log(this.produto)
        this.produto.forEach((dados:any)=>{  
        })           
      })
  }
  public Desfavoritar(Favoritado:any){
    this.favoritos.Desfavoritar(this.email,Favoritado.key )
    .then(() =>{})
  }

}
