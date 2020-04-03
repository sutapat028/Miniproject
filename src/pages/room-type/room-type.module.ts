import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomTypePage } from './room-type';

@NgModule({
  declarations: [
    RoomTypePage,
  ],
  imports: [
    IonicPageModule.forChild(RoomTypePage),
  ],
})
export class RoomTypePageModule {}
