import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
userName:string="";
password:string="";
apiRes:any;
errorMessage:string="";
  constructor(private router:Router,private http:HttpClient){}

  loginSubmitt(){
    console.log("button clicked");

    console.log(this.userName);
    console.log(this.password);

let res = this.http.get(
"http://localhost:1234/checkUser?userName="+
this.userName+"&password="+this.password);
    res.subscribe(
      data=>
      {
        this.apiRes=data;
        if(this.apiRes == true)
          this.router.navigate(["/home"]);
        else{
          this.errorMessage="Credentials Are Not Good";
          this.userName="";
          this.password="";
        }
      }
    );
    
    
  }

}