import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/autenticacao.service';
import { Produto } from '../produto.service';

//import { PesquisarComponent } from '../home/pesquisar/pesquisar.component';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  public resposta: any
  public pesquisa:any
  constructor(private autenticacao: Autenticacao, private produto: Produto) { }
  ngOnInit(): void {

    //this.pesquisar()
   // this.pes.testando()
  }

  public formulario: FormGroup = new FormGroup({
    'pesquisar': new FormControl(null)


  })

  async deletar() {
    try {
      await this.autenticacao.DeletarUsuarioBD(this.formulario.value.email);
      console.log('deletado');
      await this.autenticacao.desativarConta();
    } catch (error) {
      console.error(error);
    }
  }
  sair() {

    this.autenticacao.sair()
  }
  public pesquisar() :any{
    this.produto.Pesquisar(this.resposta)
    .subscribe((produtos: any[]) => {
        // Fazer algo com os produtos recebidos
        this.pesquisa=produtos
        
        console.log(produtos);
    }, (error: any) => {
        // Lidar com erros, se houver
        console.error(error);
    });

    return this.pesquisa
   






  }
  async atualizaresposta(resposta: Event): Promise<any> {
    try {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
    const produtos = await this.produto.Pesquisar(this.resposta).toPromise();
    // Fazer algo com os produtos recebidos
    this.pesquisa = produtos;
    console.log(produtos);
    console.log(this.pesquisa);
    return produtos;
    } catch (error) {
    // Lidar com erros, se houver
    console.error(error);
    throw error;
    }
    }

}
