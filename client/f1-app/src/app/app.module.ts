import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { RasporedUtrkaComponent } from './components/raspored-utrka/raspored-utrka.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatTableModule} from '@angular/material/table'; 
import { PoredakVozacaComponent } from './components/poredak-vozaca/poredak-vozaca.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForumComponent } from './components/forum/forum.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { PoredakKonstruktoraComponent } from './components/poredak-konstruktora/poredak-konstruktora.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    RasporedUtrkaComponent,
    PoredakVozacaComponent,
    AuthComponent,
    ForumComponent,
    PoredakKonstruktoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
