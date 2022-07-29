import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss']
})
export class AdminEditPageComponent implements OnInit {

  succesMsg:boolean=false;
  errorMsg:boolean=false;
  param:any;
  header:boolean=false;
  footer:boolean=false;
  sidebar:boolean=false;
  hasSidebar:FormControl;
  hasFooter:FormControl;
  hasHeader:FormControl;
  editForm= new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    content:new FormControl(''),
    hasSidebar:new FormControl(''),
    hasFooter:new FormControl(''),
    hasHeader:new FormControl(''),


  });
 pages:any;

 



  constructor(private router: Router,
    private route: ActivatedRoute,
    private pageService:PageService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.param= params['id']
      this.pageService.getEditPage(this.param).subscribe((page) =>{
        console.log(page)
        this.pages=page;
        this.editForm= new FormGroup({
          id: new FormControl(this.pages["id"]),
          title: new FormControl(this.pages["title"]),
          content:new FormControl(page["content"]),
          hasSidebar:new FormControl(page["hasSidebar"]),
          hasHeader:new FormControl(page["hasHeader"]),
          hasFooter:new FormControl(page["hasFooter"]),
          /*this.title=page['title'];
           this.content=page['content'];
           this.id=page["id"];
          */
        });
        if (page["hasSidebar"]===true){
          this.sidebar=true;
        }
        if (page["hasHeader"]===true){
          this.header=true;
    
        }
        if (page["hasFooter"]===true){
          this.footer=true;
      
        }
       

      });
    });
  }

  editPage(){

    this.route.params.subscribe(params =>{
      this.param= params['id']
      this.pageService.updatePage(this.editForm.value).subscribe((result) =>{
        console.log(result,"data was successful update")
     

      });
    });

  }

}
