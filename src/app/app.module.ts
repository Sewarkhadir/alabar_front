import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from './material/material.module';
import { TopicListComponent } from './topics/topic-list/topic-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
