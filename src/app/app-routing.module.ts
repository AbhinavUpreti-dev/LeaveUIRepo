import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavetypesComponent } from './feature/leavetypes/leavetypes.component';
import { LoginComponent } from './feature/login/login.component';
import { AuthGuardService } from './feature/auth-guard.service';
import { LeaveDetailsResolverService } from './feature/resolvers/leave-details-resolver.service';

const routes: Routes = [
  {path:'leaveDetails',component:LeavetypesComponent,canActivate: [AuthGuardService],
  resolve: {
    leaveData: LeaveDetailsResolverService
  }},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
