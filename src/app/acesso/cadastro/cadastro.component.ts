import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Usuario } from '../usuario.model';
import { Autenticacao } from 'src/app/autenticacao.service';
//import * as bcrypt from 'bcrypt';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //atributo contralador dos inputs no HTML
  formulario: FormGroup = new FormGroup({

    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'telefone': new FormControl(null),
    'cpf': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)

  })


  // instanciando o serviço de autenticação
  constructor(private autenticacao: Autenticacao) {

  }

  ngOnInit(): void {

  }

  // serve para disparar eventos para o component pai
  @Output() public exibirpainel: EventEmitter<string> = new EventEmitter<string>()

  public exibirlogin(): void {
    this.exibirpainel.emit('login')
  }

  // função acionada no click e que serve para enviar os dados ao serviço, seguindo a lógica do model
  CadastrarUsuario(): void {
    // alert('Funcionando')

    //const senhaCriptografada = bcrypt.hashSync(this.formulario.value.senha, 10);

    let usuario: Usuario = new Usuario
      (this.formulario.value.email,
        this.formulario.value.nome_completo,
        this.formulario.value.telefone,
        this.formulario.value.cpf,
        this.formulario.value.nome_usuario,
        btoa(this.formulario.value.senha)
      )

    if (this.formulario.value.email == null || this.formulario.value.nome_completo == null ||
      this.formulario.value.senha == null || this.formulario.value.telefone == null ||
      this.formulario.value.cpf == null || this.formulario.value.nome_usuario == null) {

        alert ('Preencha todos os campos')

    }
    else{
       
      // função do serviço de usuarios inicializada através do atributo instanciado no construtor
      this.autenticacao.CadastrarUser(usuario)
      .then(() => {
        this.exibirlogin()
      })
      .catch(err => console.log(err));
      
    }
    


  }



}
