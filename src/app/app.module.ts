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
import { TetsuKasuyaMethodComponent } from './v60/tetsu-kasuya-method/tetsu-kasuya-method.component';
import { JamesHoffmanMethodComponent } from './james-hoffman-method/james-hoffman-method.component';
import { ClassicV60MethodComponent } from './classic-v60-method/classic-v60-method.component';
import { IceV60Component } from './ice-v60/ice-v60.component';
import { RaoSpinMethodComponent } from './rao-spin-method/rao-spin-method.component';

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
    TetsuKasuyaMethodComponent,
    JamesHoffmanMethodComponent,
    ClassicV60MethodComponent,
    IceV60Component,
    RaoSpinMethodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
