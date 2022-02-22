import { headerData } from './header-data.model';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerdata = new BehaviorSubject<headerData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })


  constructor() { }

  get headerData(): headerData{
    return this._headerdata.value
  }

  set headerData(headerData: headerData){
    this._headerdata.next(headerData)
  }
}
