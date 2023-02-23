
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServeService {

  constructor() { }
state:any;
  getData(){
    // console.log(this.state)
    return this.state
  }

  setData(value:any){
    this.state=value;
    // console.log(this.state)
  }
}
