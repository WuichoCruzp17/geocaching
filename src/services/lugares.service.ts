import { AngularFireDatabase } from 'angularfire2/database';
import { Inject } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Inject
export class LugaresServices {
    constructor(public afBD:AngularFireDatabase ){}

    public getLugares(){
        return this.afBD.list('/lugares/');
    }
    public getLugar(id){
        return this.afBD.object('/lugares/'+id);
    }
    public createLugar(lugar){
        return this.afBD.database.ref('/lugares/'+lugar.id).set(lugar);
    }
    public update(lugar){
        return this.afBD.database.ref('/lugares/'+lugar.id).set(lugar);
    }

    public deletLugar(lugar){
        //reto
    }
}