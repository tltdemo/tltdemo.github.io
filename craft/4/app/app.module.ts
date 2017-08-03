import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { AddressComponent } from './address.component';
import { PhoneComponent } from './phone.component';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, AddressComponent, PhoneComponent, PhoneMaskDirective ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }