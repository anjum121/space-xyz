import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space-xyz';
  constructor(@Inject(DOCUMENT) private document: any) {
    this.document.body.classList.add('full-background');
  }
}
