import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/autenticacao.service';
import { Produto } from '../produto.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  public resposta: any
  public pesquisa: any
  public produtos: any
  public email: any
  public teste: boolean = false
  constructor(private autenticacao: Autenticacao, private produto: Produto) { }
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email
    })
    //this.pesquisar()
    // this.pes.testando()
  }
  public formulario: FormGroup = new FormGroup({
    'pesquisar': new FormControl(null)
  })

  //recebe a pesquisa
  async atualizaresposta(resposta: Event): Promise<any> {
    try {
      this.resposta = ((<HTMLInputElement>resposta.target).value);
      const produtos = await this.produto.Pesquisar(this.resposta).toPromise();
      // Fazer algo com os produtos recebidos
      this.pesquisa = produtos;
      console.log(produtos);
      console.log(this.resposta);
      return produtos;
    } catch (error) {
      // Lidar com erros, se houver
      console.error(error);
      throw error;
    }
  }

  //realiza a consulta
  public pesquisar(): any {
    /* this.produto.acessarDadosUsuario(this.email)
       .then((dados:any) => {console.log(dados.email)})*/
    this.teste = true
    this.produto.Pesquisar(this.resposta)
      .subscribe((produtos: any[]) => {
        //recebe os produtos pesquisados e com ela eu crio o *ngfor no template
        this.produtos = produtos

        console.log(produtos);
      }, (error: any) => {
        // Lidar com erros, se houver
        console.error(error);
      });

    return this.pesquisa

  }

}
