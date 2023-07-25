import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { LeaveTypeInterface } from '../Interfaces/LeaveTypeInterface';
import {ModalPopUpServiceService} from '../../shared/modal-pop-up-service.service';
import {BehaviorSubject, Observable, map} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LeaveEditComponent } from '../leave-edit/leave-edit.component';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-leavetypes',
  templateUrl: './leavetypes.component.html',
  styleUrls: ['./leavetypes.component.css'],
 changeDetection : ChangeDetectionStrategy.OnPush
})


export class LeavetypesComponent implements OnInit {
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['id','leaveType', 'startdate', 'enddate','editleaves','deleteleaves','status'];//... set columns here
  totalRecords = 0;
  pageSize = 10;
  pageIndex = 0;
  
 
  //dataSource : LeaveTypeInterface[] = [];
 leaveDataSource:LeaveTypeInterface[];
  public dataSource = new MatTableDataSource<LeaveTypeInterface>();
  constructor(private modelPopUpService : ModalPopUpServiceService, public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef,private _route: ActivatedRoute ){
    this.leaveDataSource = [];
  }
  ngOnInit(){
    debugger;
   this.leaveDataSource = this._route.snapshot.data["leaveData"]; 
  }

  pageChangeEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
}


  openDialog() {
    this.dialog.open(LeaveEditComponent).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  removeLeave(element:LeaveTypeInterface)
  {
    this.modelPopUpService.removeExisitingElement(element);
    this.refresh();
  }

  openEditDialog(element:LeaveTypeInterface) {
    debugger;
    this.dialog.open(LeaveEditComponent, {
      data       : {
          element
      },
}).afterClosed().subscribe(result=>{
  this.refresh();
});
  }
  refresh() {
    debugger;
    this.modelPopUpService.getLeaveDetails().subscribe((res) => {
      console.log(res);
      this.dataSource.data = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
}
