import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISidebar } from 'src/app/models/ISidebar';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  
  page:ISidebar;
   succesMsg:boolean=false;

  
    sidebarForm= new FormGroup({
      id: new FormControl(''),
      content:new FormControl('')
    });
  
  successMsg:boolean=false;


  constructor(private router:Router,
    private sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.getsidebar().subscribe((res) =>{console.log(res)
      this.sidebarForm= new FormGroup({
        id: new FormControl(res["id"]),
        content:new FormControl(res["content"])   
    });
  });
  }

  editSidebar(){
    if(this.sidebarForm.valid){
    this.sidebarService.putSidebar(this.sidebarForm.value).subscribe((data) =>{
      this.succesMsg=true;
      setTimeout(() =>{
        this.succesMsg=false;
     }, 2000);
    
    });
  }
  }
}
