import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import {User} from "../../models/user.model";
import {Activity} from "../../models/activity";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

/*
  Generated class for the EstadisticaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstadisticaServiceProvider {

  userToanalize = new BehaviorSubject(null)


  constructor(public http: HttpClient) {
    console.log('Hello EstadisticaServiceProvider Provider');
  }

  getAllUsers() {
    return this.http.get<User[]>('http://localhost:3000/users').map(res => res);
  }

  getActivitatPerUsuari(dato){
    console.log(dato)
    return this.http.get<Activity[]>('http://localhost:3000/activities/?idUser=1').map(res => res);
  }
}
