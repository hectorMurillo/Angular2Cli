import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
//import { ProductosModule } from './productos/productos.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app-routes';
import { TdFormComponent } from './td-form/td-form.component';
import { MdformComponent } from './mdform/mdform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {CanActivateAuth} from './can-activate-auth';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    MdformComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule.forRoot(),
    routing,
//  ProductosModule
  ],
  providers: [CanActivateAuth],
  bootstrap: [AppComponent],  
})
export class AppModule { }
