import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientUtilService } from '../services/client-util.service';
import { PubsubService } from '../services/pubsub.service';
import { environment } from '../../environments/environment';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BodyComponent implements OnInit {
  data;
  id;
  backgroundImage = null;
  constructor(
    public activeRoute: ActivatedRoute,
    private router: Router,
    private clientUtilService: ClientUtilService,
    private pubsubService: PubsubService
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activeRoute.queryParams.subscribe((params) => {
      this.id = params.id;
    });

    const obj = this.clientUtilService.StoreGetItem('menu');
    this.data = obj.data.filter((item) => {
      if (item.id == this.id) return item;
    });
  }

  booking(event) {
    event.preventDefault();
  }
}
