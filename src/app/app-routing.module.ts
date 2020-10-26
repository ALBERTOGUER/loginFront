import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login/login.component'
import { DataComponent} from './components/data/data.component'
  


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'home', component: DataComponent },
{ path: '**', pathMatch:'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
