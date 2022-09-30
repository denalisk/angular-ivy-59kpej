import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooBarModule } from './foo-bar/foo-bar.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FooBarModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
