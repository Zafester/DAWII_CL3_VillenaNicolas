import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { AlmacenComponent } from './menu/almacen/almacen.component';
import { ObreroComponent } from './menu/obrero/obrero.component';
import { ApiRestListaComponent } from './menu/apiRest/api-rest-lista/api-rest-lista.component';
import { ApiRestDetalleComponent } from './menu/apiRest/api-rest-detalle/api-rest-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlmacenComponent,
    ObreroComponent,
    ApiRestListaComponent,
    ApiRestDetalleComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'menu', component: MenuComponent, children:[
        {path: 'almacen', component: AlmacenComponent},
        {path: 'obrero', component: ObreroComponent},
        {path: 'apiRest', component: ApiRestListaComponent},
        {path: 'apiRest/:id', component: ApiRestDetalleComponent}
      ]},
      {path: '', redirectTo: 'menu', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
