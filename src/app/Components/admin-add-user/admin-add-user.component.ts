import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  userExists:boolean=false;
  successMsg:boolean=false;
  errorMsg:boolean=false;
  checked:boolean=true;
  username:FormControl;
  password:FormControl;
  IsAdmin:FormControl;
  adduserForm:FormGroup;


  role: string[] = ["Admin", "User", "Manager"];

  constructor(private userService:UserService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
   
    this.initSigninForm();
    this.createForm();

    if (localStorage.getItem("role")!=="Admin"){
      this.router.navigateByUrl("home/pages");
      alert("please you don't have acces to this page ");
    }else{
    }
  
  }

  initSigninForm(){
    this.adduserForm =new FormGroup({
      username: new FormControl(''),
      password:new FormControl(''),
      IsAdmin:new FormControl(''),
  
    });
  }


  createForm() {
    this.adduserForm = new FormGroup({
      username: this.username,
      password: this.password,
      IsAdmin: this.IsAdmin,
    });
  }

  onAddUser(){
    console.log(this.adduserForm.value);
    if(this.adduserForm.valid){
      this.userService.addUser(this.adduserForm.value).subscribe(res => {
        if(res== 'userExists'){
          this.errorMsg=true;
          setTimeout(() =>{
             this.errorMsg=false;
          }, 2000);
        }else{
          this.successMsg=true;
          setTimeout(() =>{
            this.successMsg=false;
         }, 2000);

         localStorage.setItem("userAdd","true");
         this.router.navigateByUrl('admin/pages')
        }
      });
    }else{
      console.log('form is not Valid')
    }


  }
}
