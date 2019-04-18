import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordShowComponent } from './record-show/record-show.component';
import { RecordAddComponent } from './record-add/record-add.component';
import { RecordEditComponent } from './record-show/record-edit/record-edit.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordShowComponent,
    RecordAddComponent,
    RecordEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
