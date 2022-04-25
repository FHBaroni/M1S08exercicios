import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { ContentComponent } from './compnents/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { Route } from '@angular/router';
import { ComidaComponent } from './pages/comida/comida.component';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { ComidaListaComponent } from './compnents/comida-lista/comida-lista.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'comida',
    component: ComidaComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ComidaComponent,
    BebidaComponent,
    ComidaListaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
