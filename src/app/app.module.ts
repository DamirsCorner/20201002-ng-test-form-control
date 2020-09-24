import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, NgSelectModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
