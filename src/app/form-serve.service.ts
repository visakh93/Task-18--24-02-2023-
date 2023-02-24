
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServeService {

  constructor() { }
state={
  f_name:'Visakh',
  l_name:'v',
  age:'25',
  phone:9963234322,
  address:'Anidil house,payyannur,kanur',
  education:'Bcom',
  email:'visakhpayyannur@gmail.com',
  password:'vis123',
  message:'Busy',
  country:'India',
  state:'kerala'
};
  getData(){
    // console.log(this.state)
    return this.state
  }

  setData(value:any){
    this.state=value;
    // console.log(this.state)
  }
}
