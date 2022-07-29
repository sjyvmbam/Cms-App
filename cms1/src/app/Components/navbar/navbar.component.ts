import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pages:any;
  user:any;

  get userLoggedIn(){
    if(localStorage.getItem("name")){
      this.user=localStorage.getItem("name")?.replace(/\"/g, "");
      return true
    }
    return false
  }
  constructor(private pageService:PageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
      this.pageService.getPages().subscribe(data =>{
        this.pageService.pageBS.next(data);
        this.pages=this.pageService.pageBS;
      });

    
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }


}
/*this.pageService.getPages()
    .subscribe((data) =>{ this.pages=data
      console.log(this.pages)*/