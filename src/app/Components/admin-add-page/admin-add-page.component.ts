import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

declare var CKEDITOR:any;
declare var $:any;
declare var  CKFinder:any;

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.scss']
})
export class AdminAddPageComponent implements OnInit {
  
  submitted = false;
  successMsg:boolean=false;
  errorMsg:boolean=false;
  val:any;
  value:string;
  signinForm:FormGroup;
  title:FormControl;
  content:FormControl;
  HasSidebar:FormControl;
  HasFooter:FormControl;
  HasHeader:FormControl;

  sidebar:boolean=false;
  header:boolean=false;
  footer:boolean=false;
  /*signinForm =new FormGroup({
    title: new FormControl(''),
    content:new FormControl(''),
    hasSidebar:new FormArray([]),

  });
*/


  

   eltPage:Array<any>=[
     {id:1, select:false, name:"hasSidebar",value:'true'},
     {id:2, select:false, name:"hasHeader",value:'true'},
     {id:3, select:false, name:"hasFooter",value:'true'},

   ]

   site: string[] = ["hasSidebar", "hasHeader", "hasFooter"];


  constructor(private fb: FormBuilder,
    private router:Router,
    private  pageService:PageService) {
   }

  ngOnInit(): void {  
   
    this.initSigninForm();
    this.createForm();

    if (localStorage.getItem("role")!=="\"Admin\""){
      this.router.navigateByUrl("/admin/pages");
      alert("please you don't have acces to this page ")
    }else{
    }
    

  }

  initSigninForm(){

    this.signinForm =new FormGroup({
      title: new FormControl(''),
      content:new FormControl(''),
      HasSidebar:new FormControl(false),
      HasHeader: new FormControl(false),
      HasFooter:new FormControl(false),
    
    });
 
  }

  /*      this.signinForm=this.fb.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]],
      hasSidebar: this.fb.array([])
    });*/

  createForm() {
    
    if(this.header==true || this.footer==true||this.sidebar==true)
    this.signinForm = new FormGroup({
      title: this.title,
      content: this.content,
      HasSidebar: this.HasSidebar,
      HasHeader:this.HasHeader,
      HasFooter:this.HasFooter,
    });
    
  }
  
  
  onAddPage(){
    console.log(this.signinForm);
    console.log(this.signinForm.value)

    if(this.signinForm.valid){
      this.pageService.postAddPage(this.signinForm.value).subscribe(res => {
        if(res== 'pageExists'){
          this.errorMsg=true;
          setTimeout(() =>{
             this.errorMsg=false;
          }, 2000);
        }else{
          this.successMsg=true;
          setTimeout(() =>{
             this.successMsg=false;
          }, 2000);


            this.pageService.gettestpage().subscribe(pages =>{
            this.pageService.pageBS.next(pages);
            this.val=this.pageService.pageBS;
            console.log(this.val)
          });
        }
      });
    }else{
      console.log('form is not Valid')
    }

    const title= this.signinForm.get('title')?.value;
    const content=this.signinForm.get('content')?.value;


  }
}










/*
onChange(e:any){

    //const check= <FormArray >this.signinForm.controls.checkArray;
    const check: FormArray = this.signinForm.get('checkArray') as FormArray;


    if (e.target.checked) {
      check.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      check.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          check.removeAt(i);
          return;
        }
        i++;
      });
      
        }
    

  }

*/