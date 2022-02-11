import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderComponentComponent } from './order-component/order-component.component';

const routes: Routes = [
  {path:"", component:LoginComponent, pathMatch: 'full'},
  {path:"order", component:OrderComponentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
