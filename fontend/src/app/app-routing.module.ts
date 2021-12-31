import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: ':url?:id',
    component: BodyComponent,
  },
  {
    path: '*.*',
    component: BodyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
