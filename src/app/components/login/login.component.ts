import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
    let reqObj = JSON.parse(localStorage.getItem('formData') || '{}');
    if(!!reqObj){
      console.log(reqObj);
      this.contactForm.patchValue({email: reqObj.email,password: reqObj.password});
    }
  }

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    check: new FormControl(''),
    gender: new FormControl(''),
  });

  get email(){
    return this.contactForm.get('email');
  }
  get password(){
    return this.contactForm.get('password');
  }
  showFormInputs(){
    console.log(this.contactForm.value);
    if(this.contactForm.value.check){
      localStorage.setItem('formData',JSON.stringify(this.contactForm.value));
    }
    if(this.contactForm.value.email == 'kunal@gmail.com'){
      this.router.navigate(['/notes']);
    }else{
      this.router.navigate(['/login']);
    }
    this.login.login(this.contactForm.value.email,this.contactForm.value.password);
  }
  handleChange(event:any){
    var target = event.target;
    if(target.checked){
      console.log(event);
    }
  }
  handleChangeEvent(event:any){
    console.log(event);
  }
}
