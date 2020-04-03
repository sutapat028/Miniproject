import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../enums/enums'; 

@IonicPage()
@Component({
  selector: 'page-room-type',
  templateUrl: 'room-type.html',
})
export class RoomTypePage {
  category=[];
  
  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.getJsonObjet();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomTypePage');
  }
  
  getJsonObjet(){
    let url =Enums.APIURL.URL+'/todoslim3/public/room/category';
    this.http.get(url).subscribe(
      (data: any)=>{
        console.log(data);
       this.category = data;
       console.log(this.category);
      }
      ,
      (error) => {console.log(error)}
    );

  }

  select(type){
  this.navCtrl.push("RentalroomPage",type.category_id);
  }
  

}
