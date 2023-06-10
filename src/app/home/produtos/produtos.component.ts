import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from 'src/app/produto.service';
import { Favoritos } from 'src/app/favoritos.service';
import { Autenticacao } from 'src/app/autenticacao.service';
import { Usuario } from 'src/app/acesso/usuario.model';
import { Ofertas } from 'src/app/ofertas.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']

})
export class ProdutosComponent implements OnInit {
  public email: any
  public produto: any
  public produto2: any
  public nome: any
  public paginas:number=1
  public ok :boolean =false
  public Mostrar :boolean =false
  constructor(private produtos: Produto,private aut: Autenticacao, private favoritos: Favoritos, private ofertas:Ofertas) {

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
      this.atualizarProdutos()
      this.produtos.acessarDadosUsuarioDetalhe(this.email)
      
      
    })

  }
  //traz todo os produtos
  public atualizarProdutos(): void { 
    
      this.produtos.consultarProdutos(this.paginas)
      .then((produtos) => {
        this.produto = produtos       
        console.log(this.produto)        
        this.paginas ++      
      })  

    
         
  }

  public voltar(){    
    this.produtos.voltarPagina(this.email,this.paginas)
    .then((produtos) => {
      this.produto = produtos
      this.paginas--
      console.log(this.produto)      
    })  
  }

  recuperarproduto(produtos: any) {
    console.log(produtos)
    this.favoritos.Favoritar(this.email, produtos)

    //this.favoritos.DeletarUsuarioBD(this.email,produtos.key)
    
  }
  Desfavoritar(produtos: any) {
    console.log(produtos.key)
    this.favoritos.Desfavoritar(this.email,produtos.key)
    .then(()=>{
      
    })
  }

  public async recuperaroferta (produtos: any){
   this.ofertas.RetornaOferta(produtos)
   .then((dados:any)=>{
    this.produto = dados
    console.log(dados)
   })
  }
  public async alterar(){
    let tets = ''
   await this.aut.acessarDadosUsuario(this.email)
    .then((teste:Usuario) => {
      console.log('funciona', teste)      
      this.aut.AlterarUsuario(this.email,teste.nome_usuario)
    })    
    .catch((err) => {console.log(err)})
    console.log(tets)  
  }

}
