import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientUtilService } from '../services/client-util.service';
import { PubsubService } from '../services/pubsub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private route: Router,
    public clientUtilService: ClientUtilService,
    private pubsubService: PubsubService
  ) {}

  menu;

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    const response: any = this.clientUtilService.StoreGetItem('menu');
    const data = response.data;
    data.forEach((element, index) => {
      const item = element.attributes.Title.split(' ').join('-').toLowerCase();
      data[index]['url'] = item;
    });

    this.menu = data;
  }

  onClick(item, event) {
    event.preventDefault();
    this.route.navigateByUrl(`${item.url}?id=${item.id}`);
    this.pubsubService.broadcast('onMenuClick', item);
  }
}
