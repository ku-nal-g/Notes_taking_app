import { LoginService } from 'src/app/services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.login.isLoggedIn()){
        console.log("hello")
        this.router.navigate(['/notes']);
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
