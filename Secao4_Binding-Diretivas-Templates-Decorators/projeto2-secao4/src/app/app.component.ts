import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto2-secao4';
  buttonTitle = 'Título do botão'
  buttonDisabled = false;

  onButtonClick() {
    this.buttonTitle = 'Titulo ALTERADOOOO';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
