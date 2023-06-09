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

    public RetornaOferta(key: any): Promise<any> {
        let get: Array<any> = []
        let set: any
        return new Promise((resolve, reject) => {
            firebase.database().ref(`produtos/${key.key}`).once('value')
                .then((ofeta) => {                    
                    set =ofeta.val()
                    get.push(set)
                    resolve(get)                    
                })
                .catch((err: any) => {
                    console.log(err)
                })
        })
    }
}

