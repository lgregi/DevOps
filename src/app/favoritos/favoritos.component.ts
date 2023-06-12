import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Favoritos } from '../favoritos.service';
import { Ofertas } from '../ofertas.service';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public email: any
  public produto: any
  constructor(private ofertas: Ofertas, private favoritos: Favoritos, private Aut:Autenticacao) {

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
                
      })
  }
  public Desfavoritar(Favoritado:any){
    this.favoritos.Desfavoritar(this.email,Favoritado.key )
    .then(() =>{})
  }

  //traz somente a oferta clicada
  public async recuperaroferta (produtos: any){
    this.ofertas.RetornaOfertaFavoritada(this.email,produtos)
    .then((dados:any)=>{
     this.produto = dados
     console.log(dados)
    })
   }

}
