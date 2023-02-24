import { Component, OnInit } from '@angular/core';
import { FormServeService } from '../form-serve.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
constructor(private formService:FormServeService ){}
profile:any;
ngOnInit(){

 this.profile= this.formService.getData();
}
}
