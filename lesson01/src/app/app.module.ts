import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { UserComponent } from './user/user.component';
import { PassportinfoComponent } from './user/passportinfo/passportinfo.component';
import { Userbutton } from './user/userbuttons/userbuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    UserComponent,
    PassportinfoComponent,
    Userbutton,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
