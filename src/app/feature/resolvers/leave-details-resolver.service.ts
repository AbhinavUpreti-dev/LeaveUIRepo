import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ModalPopUpServiceService } from 'src/app/shared/modal-pop-up-service.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailsResolverService implements Resolve<any>{

  constructor(private modalpopupService : ModalPopUpServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.modalpopupService.getLeaveDetails();
  }
}
