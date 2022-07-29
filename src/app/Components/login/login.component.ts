import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFailled:boolean=false;
  loginSuccess:boolean=false;
  userExists:boolean=false;
  noUser:boolean=false;
  loginForm:NgForm;
  @Input() user:Users=new Users();
   name:any
  role:any
    

  constructor(private router:Router,
    private userService:UserService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(sessionStorage.setItem('token', ''));

  }

  sendLogin(){
    console.log("username",this.user.username);
    this.userService.login(this.user.username,this.user.password).subscribe(result =>{
      if(result){
      var data = JSON.parse(result);
      this.name=data.lastname;
      localStorage.setItem("role",data.role[0].name);
      setTimeout(() =>{
        this.loginSuccess=true;
        this.router.navigate(['/home/pages']);

      }, 2000);
      console.log(result);
      }
      else{
        this.loginFailled=true;
      }
    })
  }

}
