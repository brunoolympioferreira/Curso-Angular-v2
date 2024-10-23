import { Component } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user = {
    nome: 'Bruno',
    idade: 38,
    status: UserStatusEnum.ATIVO
  };
}
