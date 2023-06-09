import { Router } from "@angular/router"
import { Injectable } from "@angular/core"
import * as firebase from "firebase"
@Injectable()
export class Ofertas {

    public oferta: any
    public key: any
   
    constructor(private router: Router) {

    }


    public recuperarOferta(key: string) {
       this.key = key
    }
    public async RetornarKey() {
        console.log('teste', this.key)
        return await this.key
       
     }

    public RetornaOferta(key:string): Promise<any> {

       return firebase.database().ref(`produtos/${this.key}`).once('value')
        .then((ofeta) => {
            console.log(ofeta.val())
            this.oferta = ofeta.val()
            console.log(this.oferta)
            this.router.navigate(['/oferta'])
        })
        .catch((err:any)=>{
            console.log(err)
        })
        
    }


}

