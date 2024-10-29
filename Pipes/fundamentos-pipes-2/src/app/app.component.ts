import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit() {
    const numero = 1200.99;
    console.log(numero);
  }
}
