import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EventEmitter } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  pages:any;
  user:any;

  @Output() toggleSidebarForMe:EventEmitter<any>=new EventEmitter();

  get userLoggedIn(){
    if(localStorage.getItem("name")){
      this.user=localStorage.getItem("name")?.replace(/\"/g, "");
      return true
    }
    return false
  }

  constructor(private pageService:PageService,
    private router:Router) { }

  ngOnInit(): void {

    this.pageService.getPages().subscribe(data =>{
      this.pageService.pageBS.next(data);
      this.pages=this.pageService.pageBS;
    });
  }

  toggleSidebar(){
this.toggleSidebarForMe.emit();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
