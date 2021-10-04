import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { CampaniaComponent } from './pages/campania/campania.component';
import { ReclamosComponent } from './pages/reclamos/reclamos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MisionyvisionComponent } from './pages/misionyvision/misionyvision.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConocenosComponent,
    CampaniaComponent,
    ReclamosComponent,
    ContactoComponent,
    MisionyvisionComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
