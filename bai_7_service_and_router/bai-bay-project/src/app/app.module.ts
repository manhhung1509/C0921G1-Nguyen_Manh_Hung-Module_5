import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeLineComponent } from './thuc_hanh/ung_dung_tính_thoi_gian_da_song/time-line/time-line.component';
import { YoutubePlaylistComponent } from './thuc_hanh/ung_dung_nghe_nhac/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './thuc_hanh/ung_dung_nghe_nhac/youtube-player/youtube-player.component';
import { ProductListComponent } from './thuc_hanh/ung_dung_quan_ly_san_pham/product/product-list/product-list.component';
import { ProductCreateComponent } from './thuc_hanh/ung_dung_quan_ly_san_pham/product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './thuc_hanh/ung_dung_quan_ly_san_pham/product/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
