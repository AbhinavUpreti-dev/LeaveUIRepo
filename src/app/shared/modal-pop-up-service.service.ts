import { Injectable } from '@angular/core';
import { LeaveTypeInterface } from '../feature/Interfaces/LeaveTypeInterface';
import {BehaviorSubject, Observable,map,of, tap} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModalPopUpServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
    })
  };
  constructor(private http: HttpClient) { }
  leaveTypes : LeaveTypeInterface[] = [];

  leaveTypeObservable$ =  new BehaviorSubject(this.leaveTypes);

  updateCurrentLeaves(leaveType : LeaveTypeInterface)
  {
    if(leaveType.employeeId)
    {
      const existingLeaveType = this.leaveTypes.find(x => x.employeeId===leaveType.employeeId) ;
      existingLeaveType.startDate =leaveType.startDate;
      existingLeaveType.endDate = leaveType.endDate;
      existingLeaveType.leaveType = leaveType.leaveType;
      existingLeaveType.status = leaveType.status;
      this.leaveTypeObservable$.next(this.leaveTypes);
    }
    else{
      debugger;
      leaveType.employeeId = 103;
      leaveType.status = "Pending Approval";
      const url =  "https://localhost:7276/api/v1/LeaveDetails"
      this.http.post(url,leaveType,this.httpOptions).subscribe({
          next: data => {
           
          },
          error: error => {             
              console.error('There was an error!', error);
          }
      });
    }
   
  }
 getLeaveDetails() : Observable<LeaveTypeInterface[]>
 {
  let url = "https://localhost:7276/api/v1/LeaveDetails";
  return this.http.get<LeaveTypeInterface[]>(url,this.httpOptions);
 }

 removeExisitingElement(leaveType:LeaveTypeInterface) : void 
{
  const index = this.leaveTypes.indexOf(leaveType, 0);
if (index > -1) {
  this.leaveTypes.splice(index, 1);
}

for (let index = 0; index < this.leaveTypes.length; index++) {
  this.leaveTypes[index].employeeId = index+1;
  
}
this.leaveTypeObservable$.next(this.leaveTypes);
}
}
