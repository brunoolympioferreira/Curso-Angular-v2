import { Component, OnInit } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  user = {
    nome: 'Bruno',
    idade: 38,
    status: UserStatusEnum.ATIVO
  };

  minhaData: string = '2024-10-25T21:00:00.000Z';

  minhaDataObj: Date = new Date('2024-10-24T21:00:00.000Z');

  ngOnInit() {
    console.log('Data convertida para região:', new Date(this.minhaData))
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString())
    console.log('Timestamp', new Date(this.minhaData).getTime());
    console.log(this.minhaDataObj);
  }
}
