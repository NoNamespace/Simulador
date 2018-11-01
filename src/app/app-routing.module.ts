import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {JugadaComponent} from './components/jugada/jugada.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {ResultadosComponent} from './components/resultados/resultados.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'jugada', component: JugadaComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
