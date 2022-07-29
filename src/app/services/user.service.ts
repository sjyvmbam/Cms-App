import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../models/Users';
import{map,take} from 'rxjs/operators'
import { resolveForwardRef } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  User:Users;
  public username:string;
  public password:string;
  constructor(private http:HttpClient,
    ) { }

    public userBS=new BehaviorSubject<Users| null>(null);


    addUser(user:any){
      return this.http.post('https://localhost:44341/api/users/adduser',user)

    }

    login(username:string, password:string){

      console.log(username, password);
      const headers= new HttpHeaders({Authorization: 'Basic Auth' + window.btoa(username + ":" + password)})
      sessionStorage.setItem('token',window.btoa(username + ":" + password))
      return this.http.get<any>(`http://localhost:8181/api/login?username=${username}&password=${password}`,{headers,responseType:'text' as 'json'})

    }

    getUsers(user:Users){


      console.log(user);
      const headers= new HttpHeaders({Authorization: 'Basic' + window.btoa(user.username + ":" + user.password)})
      sessionStorage.setItem('token',window.btoa(user.username + ":" + user.password))
      return this.http.get<Users>(`http://localhost:8080/api/listUser`,{headers,responseType:'text' as 'json'})

    }

   

 

    
   
  }



 
/*
    this.http.post<Observable<boolean>>(url, {
      userName: this.model.username,
      password: this.model.password
  }).subscribe(isValid => {
      if (isValid) {
          sessionStorage.setItem(
            'token', 
            btoa(this.model.username + ':' + this.model.password)
          );
    this.router.navigate(['']);
      } else {
          alert("Authentication failed.")
      }
  });



 login():Observable<IUsers>{
      return this.http.get<IUsers>('https://localhost:44341/api/users/login').pipe(map(res => {
        return res;
        }));

          login(username:string, password:string):Observable<Users>{

      console.log(username, password);
      return this.http.get<Users>(`http://localhost:8080/api/anmelden?username=${username}&password=${password}`,
    
      );

    }

    login(username:string, password:string){

      console.log(username, password);
      const headers= new HttpHeaders({Authorization: 'Basic' + window.btoa(username + ":" + password)})
      return this.http.get<Users>(`http://localhost:8080/api/login`,
      {headers:{authorization:this.createBasicAuthToken(username,password)} }).pipe(map((res)=>{
        this.User.username=username;
        this.User.password=password;
        this.registerSuccessfulLogin(username,password)


      }));

    }

    */ 