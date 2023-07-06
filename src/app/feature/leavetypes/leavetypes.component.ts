import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LeaveTypeInterface } from '../Interfaces/LeaveTypeInterface';
import {ModalPopUpServiceService} from '../../shared/modal-pop-up-service.service';
import {BehaviorSubject, Observable, map} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LeaveEditComponent } from '../leave-edit/leave-edit.component';
@Component({
  selector: 'app-leavetypes',
  templateUrl: './leavetypes.component.html',
  styleUrls: ['./leavetypes.component.css'],
 changeDetection : ChangeDetectionStrategy.OnPush
})


export class LeavetypesComponent implements OnInit {
  displayedColumns: string[] = ['id','leaveType', 'startdate', 'enddate','editleaves','deleteleaves','status'];
  //dataSource : LeaveTypeInterface[] = [];
  dataSource$: BehaviorSubject<LeaveTypeInterface[]>;
  public dataSource = new MatTableDataSource<LeaveTypeInterface>();
  constructor(private modelPopUpService : ModalPopUpServiceService, public dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef){

  }
  ngOnInit(){
   this.dataSource$ = this.modelPopUpService.getLeaveDetails(); 
   this.refresh();
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
    this.modelPopUpService.getLeaveDetails().subscribe((res) => {
      this.dataSource.data = res;
      this.changeDetectorRefs.detectChanges();
    });
  }
}
