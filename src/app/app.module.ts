import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { JugadaComponent } from './jugada/jugada.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    InicioComponent,
    ResultadosComponent,
    JugadaComponent,
    LoginComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
