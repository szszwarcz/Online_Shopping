import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { BookARideComponent } from './book-a-ride/book-a-ride.component';
import { FormsModule } from '@angular/forms';
import { MyPipelinePipe } from './my-pipeline.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    BookARideComponent,
    MyPipelinePipe,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
