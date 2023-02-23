import { Component, OnInit } from '@angular/core';
import { FormServeService } from '../form-serve.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
constructor(private formService:FormServeService ){}
profile={
  f_name:'',
  l_name:'',
  age:'',
  phone:undefined,
  address:'',
  education:'',
  email:'',
  password:'',
  message:'',
  country:'',
  state:''

}
ngOnInit(){

 this.profile= this.formService.getData();
}
}
