import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../ofertas.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  public produto:any
  public key :any

  constructor(private ofertas:Ofertas){

  }
  ngOnInit(): void {

    
 this.GetOferta()
 
  
      
  }
  public GetOferta(){
    /* this.ofertas.RetornaOferta(this.key)
    .then((produto)=>{
      this.produto=produto

    })*/
  }


}
