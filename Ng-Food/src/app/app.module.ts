import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { ContentComponent } from './compnents/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(ROUTES)
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
