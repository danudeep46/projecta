import { Component } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  public all:any=[];
  public term:any='';
  public column:string='';
 public pageno:number=0;
  public order:string='';
  constructor(private _employeService:EmployeService){
    _employeService.getall().subscribe(
      (data:any)=>{
        this.all=data;
      },
      (err:any)=>{
        alert("error");
      }
    )
  }
  getFilteredall(){
    this._employeService.getFilteredall(this.term).subscribe(
      (data:any)=>{
        this.all=data;
      },
      (err:any)=>{
        alert("error");
      }
    )
  }
  
  sort(){
    this._employeService.getSortedall(this.column,this.order).subscribe(
      (data:any)=>{
        this.all=data;
      },
      (err:any)=>{
        alert("error");
      }
    )
  
  }
  page(){
    this._employeService.getPagedall(this.pageno).subscribe(
      (data:any)=>{
        this.all=data;
      },
      (err:any)=>{
        alert("error");
      }
    )
  }
  delete(id:string){
     this._employeService.deleteall(id).subscribe(
      (data:any)=>{
        alert("deleted Successfully")
      },
      (err:any)=>{
        alert("internal Server Error")
      }
     )
  }


}
