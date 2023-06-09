import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Favoritos } from '../favoritos.service';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent {
public imagem: any
public quadras: any
constructor(private favoritos:Favoritos){

}
  public formulario: FormGroup= new FormGroup({
    'nome': new FormControl(null),
    'senha': new FormControl(null)
  })
  Salvar(){
    let teste={
      'nome':this.formulario.value.nome,
      'senha':this.formulario.value.senha,
      'imagem':this.imagem[0]
    }
    this.favoritos.Salvar(teste)
    

    
  }
  public teste(){
    let email='teste@fecap.com'
    this.favoritos.recuperarG(email)
    .then((teste:any)=>{
      console.log(teste)
      this.quadras=teste
    })
  }
  public preparaImagemUpload(event: Event) {
    this.imagem = ((<HTMLInputElement>event.target).files) // retorna um array
  }


}
