import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomComparePage } from './room-compare';

@NgModule({
  declarations: [
    RoomComparePage,
  ],
  imports: [
    IonicPageModule.forChild(RoomComparePage),
  ],
})
export class RoomComparePageModule {}
