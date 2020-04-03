import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomDetailPage } from './room-detail';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    RoomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomDetailPage),
    StarRatingModule
  ],
})
export class RoomDetailPageModule {}
