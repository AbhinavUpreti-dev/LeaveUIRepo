import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LeaveTypes } from '../Interfaces/LeaveType';
import {LeaveTypeInterface} from '../Interfaces/LeaveTypeInterface'
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ModalPopUpServiceService} from '../../shared/modal-pop-up-service.service';
@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit{
  startDate : Date;
  endDate : Date;
  leaveType : string;
  remaingDays : number;
  status : string;
  Id : number;
  newLeave : LeaveTypeInterface;
  leaveTypes : LeaveTypes[] = [
    {Name: "Sick Leave",IsAvailable:true},
    {Name: "Casual Leave",IsAvailable:true},
    {Name: "Earn Leave",IsAvailable:true}
  ];
  
  constructor(private modalPopUpServiceService : ModalPopUpServiceService, 
    private matdialog : MatDialog,private changeDetectorRefs: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: LeaveTypeInterface) {}


    ngOnInit()
    {
      debugger;
      if(this.data)
      { 
        this.Id =  this.data["element"].employeeId;
        this.startDate= this.data['element'].startDate;
        this.endDate =this.data['element'].endDate;
        this.leaveType =this.data['element'].leaveType;
        this.status = this.data['element'].status;
      }
    }


  onSubmit():void{
    debugger;
   this.matdialog.closeAll();
   this.newLeave = {} as LeaveTypeInterface;
   this.newLeave.leaveType = this.leaveType;
   this.newLeave.startDate = this.startDate;
   this.newLeave.endDate = this.endDate;
   this.newLeave.employeeId = this.Id;
   this.modalPopUpServiceService.updateCurrentLeaves(this.newLeave);
  }

  openDialog() {
    this.matdialog.open(LeaveEditComponent).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    
  }

  changeClient(value) {
    this.leaveType = value;
}
}
