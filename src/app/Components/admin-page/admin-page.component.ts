import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  pages:any;
  successMsg: boolean=false;
  role= localStorage.getItem("role");

  
  

  constructor(private router: Router,
    private pageService:PageService) { }

  ngOnInit(): void {
    console.log(this.role);
    this.pageService.getPages()
    .subscribe((data) =>{ this.pages=data
      console.log(this.pages);

    });  

}
deletePage(id:any){
  if(confirm('confirm deletion')){
          this.pageService.removePage(id).subscribe((res) =>{
          this.pages=res
          this.successMsg=true;
          setTimeout(() =>{
          this.successMsg=false;
        }, 2000);

          this.pageService.getPages().subscribe(data =>{
          this.pages=data
          
        });
});
}

}
front(){

  if(this.role === "\"Admin\""){
    return true;
  }
return false;
}

}
