import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrenghtValue } from '../../utils/get-password-strenght-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  passwordStrengthValue = 0;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges) {
    //console.log('ngOnChanges', changes);
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrenghtValue(password);
  }
}
