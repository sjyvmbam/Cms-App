import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISidebar } from '../models/ISidebar';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http:HttpClient) { }

  getsidebar():Observable<ISidebar>{
    const url='https://localhost:44341/api/sidebar';
    return this.http.get<ISidebar>(url);
  }

  putSidebar(value:ISidebar){
     
    return this.http.put('https://localhost:44341/api/sidebar/edit', value);

}
}

