import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {InicioComponent} from './components/inicio/inicio.component';
import {ResultadosComponent} from './components/resultados/resultados.component';
import {JugadaComponent} from './components/jugada/jugada.component';
import {LoginComponent} from './components/login/login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSliderModule, MatTabsModule, MatGridListModule, MatListModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './components/app/app.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    InicioComponent,
    ResultadosComponent,
    JugadaComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
