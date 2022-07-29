import { Component, OnInit,Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private param:any;
  @Input() pageBody:any;
  @Input() sectionData:any;
  public sidebar:string;
  public hasSidebar:boolean;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private title: Title,
    private pageService:PageService,
    private sidebarService:SidebarService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.param = params['page'];
      if(this.param==undefined){
        //this.param='home';
        this.title.setTitle('CMS');
      }else{
        this.title.setTitle(this.param.replace(/-/g, '  '));
      }

      this.pageService.getPage(this.param).subscribe(page =>{ console.log(page)
        if(page == "PageNotFound"){
             this.router.navigateByUrl('');
        }
        this.pageBody=page["content"];
        if(page["hasSidebar"]===true){
          this.hasSidebar=true;
          this.sidebarService.getsidebar().subscribe(sidebar =>{this.sidebar=sidebar["content"]
        
        }); 
        console.log(this.pageBody)

        }else{
          this.hasSidebar=false;
        }
      });
    });
  }

}
