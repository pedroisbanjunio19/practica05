import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { HomeComponent } from './home/home.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { EncapsulacionComponent } from './encapsulacion/encapsulacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEnLineaComponent,
    HomeComponent,
    AutenticacionComponent,
    EncapsulacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
