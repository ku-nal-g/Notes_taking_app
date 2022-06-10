import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setToken(){
    localStorage.setItem('authToken','qwertyuiop');
  }

  isLoggedIn(){
    let token = localStorage.getItem('authToken');
    if(!!token){
      return true;
    }
    else{
      return false;
    }
  }

  login(email:any,password:any){
    if(email == 'kunal@gmail.com' && password == 'Kunal@12'){
      this.setToken();
      return true;
    }
    else{
      return false;
    }
  }
}
