import { Injectable } from '@angular/core';
import {CanActivate, Router} from  '@angular/router';
//Aqui regresa un true o un false
@Injectable()
export class CanActivateAuth  implements CanActivate{
    //Si hay sesiones o hay un token o permisos     
    constructor(private router:Router) {               
    }
    canActivate(){
        this.router.navigateByUrl('');
        return false;
    }
}
