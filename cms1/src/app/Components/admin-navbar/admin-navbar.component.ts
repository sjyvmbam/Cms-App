import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
   user:any;
   @Input() nav=localStorage.getItem("isadmin");

   get userLoggedIn(){
    if(localStorage.getItem("name")){
      this.user=localStorage.getItem("name")?.replace(/\"/g, "");
      return true
    }
    return false
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
 

}
