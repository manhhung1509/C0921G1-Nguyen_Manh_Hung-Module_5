import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeLineComponent} from "./thuc_hanh/ung_dung_tính_thoi_gian_da_song/time-line/time-line.component";
import {YoutubePlaylistComponent} from "./thuc_hanh/ung_dung_nghe_nhac/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./thuc_hanh/ung_dung_nghe_nhac/youtube-player/youtube-player.component";
import {ProductListComponent} from "./thuc_hanh/ung_dung_quan_ly_san_pham/product/product-list/product-list.component";
import {ProductCreateComponent} from "./thuc_hanh/ung_dung_quan_ly_san_pham/product/product-create/product-create.component";
import {EditProductComponent} from "./thuc_hanh/ung_dung_quan_ly_san_pham/product/edit-product/edit-product.component";


const routes: Routes = [{
  path: 'timelines',
  component: TimeLineComponent
},
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
