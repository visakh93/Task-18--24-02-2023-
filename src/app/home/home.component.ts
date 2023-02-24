import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServeService } from '../form-serve.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  Reg_form !:FormGroup;
  countries=['Algeria','Angola','Kenya','India','Japan','Sri Lanka','Australia','Cuba']
  statesList =[
    ['Ain Defla','Adrar','Alger','Annaba','Batna','Bechar','Blida','Bordj Bou Arreridj','Chlef'],
    ['Luanda','Bengo','Benguela','Bie','Cabinda','Cuanza Sul','Cunene','Huambo','Huila','Malanje'],
    ['Nairobi','Central','Coast','Eastern','Nyanza','Western'],
    ['Karnataka','Kerala','Meghalaya','Assam','Andhra Pradesh','Arunachal Pradesh','Bihar','Chandigarh','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh'],
    ['Beijing','Anhui','Chongqing','Fujian','Gansu','Guangdong','Guangxi','Guizhou'],
    ['Tokyo','Akita','Aomori','Chiba','Ehime','Fukui','Fukuoka'],
    ['Colombo','Eastern','Sabaragamuwa','North Western','Uva'],
    ['Canberra','Queensland','Tasmania','Victoria',],
    ['Havana','Camaguey','Cienfuegos','Granma','Guantanamo','Holguin']
  ]
  states:any;
  constructor(private fb:FormBuilder,private formService:FormServeService, private router:Router){}
profileData={
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
   this.Reg_form =this.fb.group({
 f_name:['', Validators.compose([Validators.required,Validators.pattern('^([^0-9]*)$')])],
 l_name:['',Validators.compose([Validators.required,Validators.pattern('^([^0-9]*)$')])],
 age:['',Validators.required],
 education:['',Validators.required],
 email:['',Validators.compose([ Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
 password:['',Validators.compose([Validators.required,Validators.pattern("((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16})") ])],
 phone:['',Validators.compose( [Validators.required,Validators.pattern("[0-9]{10}")])],
 address:['',Validators.compose([ Validators.required,Validators.maxLength(50)])],
 message:['',Validators.compose([Validators.required,Validators.maxLength(15)])],
 c_password:['',Validators.required],
 country:['',Validators.required],
 state:['',Validators.required]
   },{

     validator:this.checkComfirmPassword('password','c_password')
   }) 
}
onSelected(value:number){
 this.states= this.statesList[value];
 
}
onSave(regForm:FormGroup){

  
    if(regForm.valid){
        this.profileData.f_name=regForm.value.f_name;
        this.profileData.l_name=regForm.value.l_name;
        this.profileData.age=regForm.value.age;
        this.profileData.phone=regForm.value.phone;
        this.profileData.address=regForm.value.address;
        this.profileData.education=regForm.value.education;
        this.profileData.email=regForm.value.email;
        this.profileData.message=regForm.value.message;
        this.profileData.country=this.countries[regForm.value.country];
        this.profileData.state= this.statesList[regForm.value.country][regForm.value.state];
        console.log(this.profileData);
        
       this.formService.setData(this.profileData)

       this.router.navigate(['/profile'])
    }
}
checkComfirmPassword(password:string,c_password:string){

  return (form:FormGroup)=>{

  
  const passwordControl = form.controls[password];  
  const confirmPasswordControl = form.controls[c_password]; 

  if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mismatch']) {  
    return false;  
  }  

  if (passwordControl.value !== confirmPasswordControl.value) {  
    confirmPasswordControl.setErrors({ mismatch: true });  
    return false;
  } else {  
    confirmPasswordControl.setErrors(null);  
    return true;
  }  }
}
}
