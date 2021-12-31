import { Component } from '@angular/core';
import { PubsubService } from './services/pubsub.service';
import { environment } from '../environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'space-xyz';
  backgroundImage = null;

  constructor(private pubsubService: PubsubService) {
    this.backgroundImage = '../../assets/f9_feature.webp';
    this.pubsubService.on('onMenuClick').subscribe((data: any) => {
      this.backgroundImage = `${environment.apiEndpoint}${data.attributes.page.background.data.attributes.formats.large.url}`;
    });
  }
}
