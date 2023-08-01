import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { BookARideComponent } from './book-a-ride/book-a-ride.component';
import { FormsModule } from '@angular/forms';
import { MyPipelinePipe } from './my-pipeline.pipe';
import { SortByPipe } from './sort-by.pipe';
import { CardsComponent } from './cards/cards.component';
import { V60Component } from './v60/v60.component';
import { EspressoMachineComponent } from './espresso-machine/espresso-machine.component';
import { FrenchPressComponent } from './french-press/french-press.component';
import { MochaPotComponent } from './mocha-pot/mocha-pot.component';
import { AreoPressComponent } from './areo-press/areo-press.component';
import { TurkishCoffeeComponent } from './turkish-coffee/turkish-coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    BookARideComponent,
    MyPipelinePipe,
    SortByPipe,
    CardsComponent,
    V60Component,
    EspressoMachineComponent,
    FrenchPressComponent,
    MochaPotComponent,
    AreoPressComponent,
    TurkishCoffeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
