import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { BehaviorSubject,from,Observable,of} from 'rxjs';
import { IPages } from '../models/IPages';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  public pageBS=new BehaviorSubject<any | null>(null);
  public page=new BehaviorSubject<any[] | null>(null);


  gettestpage(){
    const url='https://localhost:44341/api/Pages';
    return this.http.get(url);
  }


  getPages():Observable<any[]>{
    const url='https://localhost:44341/api/Pages';
    return this.http.get<any[]>(url);
  }

  getPage(slug:any):Observable<any>{
    const url='https://localhost:44341/api/Pages/'+ slug;
    return this.http.get<any>(url);
  }

  postAddPage(value:any){
      return this.http.post<any>('https://localhost:44341/api/Pages/create', value);
  }


  getEditPage(id:any){
    return this.http.get<any>('https://localhost:44341/api/Pages/edit/'+ id);
}

updatePage(data:any){
  return this.http.put<any>('https://localhost:44341/api/Pages/edit', data);
}
removePage(id:any){
  return this.http.delete<any>('https://localhost:44341/api/Pages/delete/'+ id);
}
}
