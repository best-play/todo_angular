import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodosComponent } from './todos/todos.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodosComponent]
})
export class AppModule { }
