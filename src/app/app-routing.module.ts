import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkshetComponent } from './markshet/markshet.component';

const routes: Routes = [

  { path:'marksheet',
  component:MarkshetComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
