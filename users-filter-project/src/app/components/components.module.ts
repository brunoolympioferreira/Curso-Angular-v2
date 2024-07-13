import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent
  ],
})
export class ComponentsModule { }