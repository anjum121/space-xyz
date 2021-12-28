import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space-xyz';
  backgroundImage = null;

  constructor() {
    this.backgroundImage = '../../assets/f9_feature.webp';
  }
}
