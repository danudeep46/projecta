import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public createForm:FormGroup=new FormGroup({
 name:new FormControl(), 
 company:new FormControl(), 
 role:new FormControl(), 
 package:new FormControl(), 
 email:new FormControl(), 
 dob:new FormControl(), 
address:new FormGroup({
 addressline:new FormControl(), 
 city:new FormControl(),   
 state:new FormControl(), 
 pincode:new FormControl(), 
}),
hikes:new FormArray([]),
type:new FormControl(),
collecttravelfee:new FormControl(),
collectwifiamount:new FormControl(),
  })
  get hikesFormArray(){
    return this.createForm.get('hikes') as FormArray;
  }
add(){
  this.hikesFormArray.push(
    new FormGroup({
      year:new FormControl(),
      percentage:new FormControl(),
    })
  )
}
constructor(private _employeService:EmployeService){}
deletes(i:number){
  this.hikesFormArray.removeAt(i);

}
submit(){
  console.log(this.createForm);
  this._employeService.pushall(this.createForm.value).subscribe(
    (data:any)=>{
      alert("data submitted")
    },
    (err:any)=>{
      alert("error")
    }
  )
}


}
