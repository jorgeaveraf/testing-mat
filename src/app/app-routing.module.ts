import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StddevComponent } from './stddev/stddev.component';
import { UiComponent } from './ui/ui/ui.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  {path: '', component: UiComponent},
  { path: 'stddev', component: StddevComponent },
  { path: '3A', component: LinearRegressionComponent },
  { path: '5A', component: SimpsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
