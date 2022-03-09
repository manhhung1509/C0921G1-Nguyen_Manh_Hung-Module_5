import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateRegisterFormComponent } from './bai_tap/create-register-form/create-register-form.component';
import { FormLoginComponent } from './bai_tap/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateRegisterFormComponent,
    FormLoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
