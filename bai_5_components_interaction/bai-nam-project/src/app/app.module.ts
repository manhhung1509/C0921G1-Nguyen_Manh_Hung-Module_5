import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NameCardComponent } from './thuc_hanh/name-card/name-card.component';
import { ProgressBarComponent } from './thuc_hanh/progress-bar/progress-bar.component';
import { RatingBarComponent } from './bai_tap/bai_1/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './bai_tap/bai_2/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
