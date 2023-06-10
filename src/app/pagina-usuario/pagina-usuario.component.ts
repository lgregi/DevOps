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
  
  
 


}
