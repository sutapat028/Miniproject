import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../enums/enums'; 
@IonicPage()
@Component({
  selector: 'page-room-compare',
  templateUrl: 'room-compare.html',
})
export class RoomComparePage {
  result:any={};
  value;
  showroom1:any=[];
  showroom2:any=[];
  get={rentalroom_name:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.result.room1 ="";
    this.result.room2 ="";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomComparePage');
    let url =Enums.APIURL.URL+'/todoslim3/public/room/compare';
    this.http.get(url).subscribe(
      (data: any)=>{
      console.log(data);
       this.value = data;
       console.log(this.value);
      }
      ,
      (error) => {console.log(error)}
    );
  }

  getRoomview(){
    if(this.result.room1 != ""){
      let url =Enums.APIURL.URL+'/todoslim3/public/room/compare/'+this.result.room1;
    this.http.get(url).subscribe(
      (data: any)=>{
      console.log(data);
       this.showroom1 = data;
       console.log(this.showroom1);
      }
      ,
      (error) => {console.log(error)}
    );
    }
    if(this.result.room2 != ""){
      let url =Enums.APIURL.URL+'/todoslim3/public/room/compare/'+this.result.room2;
    this.http.get(url).subscribe(
      (data: any)=>{
      console.log(data);
       this.showroom2 = data;
       console.log(this.showroom2);
      }
      ,
      (error) => {console.log(error)}
    );
 
    }
    
  }



}
