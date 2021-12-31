import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { AppInitService } from './services/app-init.service';

const APP_INIT_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: (appInitService: AppInitService) => () =>
    appInitService.fetchInitData().toPromise(),
  deps: [AppInitService],
  multi: true,
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AppInitService, APP_INIT_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
