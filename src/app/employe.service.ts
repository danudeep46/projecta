import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  public baseUrl:string="https://6572df5d192318b7db412dfe.mockapi.io/employees"

  constructor(private _httpclient:HttpClient) { }
  getall():Observable<any>{
    return this._httpclient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")

  }
  deleteall(id:string):Observable<any>{
    return this._httpclient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id)
  }
  pushall(data:any):Observable<any>{
    return this._httpclient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data)
  }
  getFilteredall(term:string):Observable<any>{
    return this._httpclient.get(this.baseUrl+"?filter="+term);
  }

  getSortedall(column:string,order:string):Observable<any>{
    return this._httpclient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPagedall(pageno:number):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=10&page="+pageno);
  }
}
