import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
})
export class ComponentsModule { }