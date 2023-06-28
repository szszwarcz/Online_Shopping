import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { BookARideComponent } from './book-a-ride/book-a-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    BookARideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
