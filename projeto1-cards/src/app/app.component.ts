import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // buttonClicked() {
  //   console.log('Button CLicked');
  // }

  cardWhite = {
    planType: 'Completo',
    planPrice: 200,
  }

  cardOrange = {
    planType: 'Simples',
    planPrice: 100,
  }

  onCardButtonClicked() {
    console.log('onCardButtonClicked');
    //chamada http
  }
}
