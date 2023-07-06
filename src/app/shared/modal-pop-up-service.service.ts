import { Injectable } from '@angular/core';
import { LeaveTypeInterface } from '../feature/Interfaces/LeaveTypeInterface';
import {BehaviorSubject, Observable,map,of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalPopUpServiceService {

  leaveTypes : LeaveTypeInterface[] = [
    {Id:1,leavetype: "Sick Leave", startdate: new Date("05-07-2023"),enddate: new Date("05-07-2023"),remainingDays:8,status:"Pending Approval"},
    {Id:2,leavetype: "Casual Leave", startdate: new Date("05-07-2023"),enddate:new Date("05-07-2023"),remainingDays:8,status:"Approved"},
  ];

  leaveTypeObservable$ =  new BehaviorSubject(this.leaveTypes);
  constructor() { }

  updateCurrentLeaves(leaveType : LeaveTypeInterface)
  {
    if(leaveType.Id)
    {
      const existingLeaveType = this.leaveTypes.find(x => x.Id===leaveType.Id) ;
      existingLeaveType.startdate =leaveType.startdate;
      existingLeaveType.enddate = leaveType.enddate;
      existingLeaveType.leavetype = leaveType.leavetype;
      existingLeaveType.remainingDays = leaveType.remainingDays;
      existingLeaveType.status = leaveType.status;
      this.leaveTypeObservable$.next(this.leaveTypes);
    }
    else{
      leaveType.Id = this.leaveTypes.length+1;
      leaveType.status = "Pending Approval";
      this.leaveTypes.push(leaveType);
      this.leaveTypeObservable$.next(this.leaveTypes);
    }
   
  }
 getLeaveDetails() : BehaviorSubject<LeaveTypeInterface[]>
 {
   return this.leaveTypeObservable$;
 }

 removeExisitingElement(leaveType:LeaveTypeInterface) : void 
{
  const index = this.leaveTypes.indexOf(leaveType, 0);
if (index > -1) {
  this.leaveTypes.splice(index, 1);
}

for (let index = 0; index < this.leaveTypes.length; index++) {
  this.leaveTypes[index].Id = index+1;
  
}
this.leaveTypeObservable$.next(this.leaveTypes);
}
}
