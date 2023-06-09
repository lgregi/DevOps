import * as firebase from "firebase";

export class Favoritos {
public key:any
    public Favoritar(email: string, dados: any): void {
        dados.email = email
        console.log(dados)
        firebase.database().ref(`favoritos/${btoa(email)}`)
            .push(dados)
            .then((snapshot:any) => {
                this.key = snapshot.key;
                firebase.database().ref(`favoritos/${btoa(email)}/${this.key}`)
                .update({key: dados.key})
                console.log(this.key);
                console.log('Favoritado', dados)

            })
    }

    public consultarFavoritados(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`favoritos/${btoa(email)}`)
                .orderByChild('email')
                .equalTo(email)
                .once('value')
                .then((snapshot) => {
                    let produtos: Array<any> = []
                    snapshot.forEach((childSnapshot: any) => {
                        let publicacao = childSnapshot.val()
                        publicacao.key = childSnapshot.key
                        produtos.push(publicacao)
                        resolve(produtos)
                    })
                    return produtos.reverse()
                })

                .catch((err: Error) => {
                    reject(err);
                    console.error(err)
                })
        })
    }

    public async Desfavoritar(email: string, key:string) {
        
        firebase.database().ref(`favoritos/${btoa(email)}/${key}`)
            .remove()
            .then(() => {
                console.log('Desfavoritado com sucesso');
            })
            .catch((error) => {
                console.log(`Erro ao desfavoritar: ${error}`);
            });
    }


    public async DeletarUsuarioBD(email: string, key: string): Promise<any> {

        return new Promise((resolve, reject) => {
            let teste = firebase.database().ref(`favoritos/${btoa(email)}`)
                .orderByChild('email')
                .equalTo(email)
                .once('value')
                .then((snapshot) => {
                    let test = snapshot.val()
                    test.remove()
                    let ok = true
                    resolve(ok)
                })

        })

            .catch((err: Error) => {
                //reject(err);
                console.error(err)
            })

    }

    public Salvar(dados: any): void {
        firebase.database().ref(`teste`)
            .push(dados)
            .then(() => {
                console.log('salvo')
                firebase.storage().ref().child('teste/greg')
                    .put(dados.imagem)
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL()
                            .then((url: any) => {
                                firebase.database().ref(`teste`)
                                    .update({ 'url': url })
                                    .then(() => {
                                        console.log('done');
                                    })
                            })

                    })
            })
    }
    public recuperarG(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                .orderByKey()
                .once('value')
                .then((snapshot: any) => {
                    let consulta: Array<any> = []
                    snapshot.forEach((child: any) => {
                        let teste = child.val()
                        consulta.push(teste)
                        resolve(consulta)
                    })
                })
        })

    }
}
