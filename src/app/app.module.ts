import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiselectComponent } from './multiselect/multiselect.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgSelectModule, NgbModule],
  declarations: [AppComponent, HelloComponent, MultiselectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
