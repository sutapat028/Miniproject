import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Note } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import * as Enums from '../../enums/enums'; 


@IonicPage()
@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
})
export class RoomDetailPage {
  num ="";
  getnaja= [];
  comment = [];
  cate = {rentalroom_name:'',rentalroom_id:'',rentalroom_name_location:'',rentalroom_phone:'',rentalroom_price:'',category_id:''};
  postcomment : any ={} ;
  cm : string="";


  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams,
    private socialSharing: SocialSharing, public event : Events) {
      this.getJsonObjet();
      this.getDetail();
      this.event.subscribe('star-rating:changed', (note) => {
        console.log('คะแนน',note);
        this.num=note;
        
      })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailPage');
    this.cate = this.navParams.data;
    console.log(this.cate);
  }

  getJsonObjet(){
    this.cate = this.navParams.data;
    let url =Enums.APIURL.URL+'/todoslim3/public/room/comment/'+this.cate.rentalroom_id;
    this.http.get(url).subscribe(
      (data: any)=>{
        console.log(data);
       this.comment = data;
       console.log(this.comment);
      }
      ,
      (error) => {console.log(error)}
    );
  }

  getDetail(){
    this.cate = this.navParams.data;
    let url = Enums.APIURL.URL+'/todoslim3/public/category/'+this.cate.category_id;
    this.http.get(url).subscribe(
      (data: any)=>{
       this.getnaja = data;
       console.log("catname",this.getnaja);
       console.log(url);
      }
      ,
      (error) => {console.log(error)}
    );
  }
  share(){
    let TO ="สถานที่ : "+this.cate.rentalroom_name+"\nเบอร์โทร : " +this.cate.rentalroom_phone +"\nราคา : "+this.cate.rentalroom_price +"\nที่อยู่ : "+this.cate.rentalroom_name_location
    console.log("TO", TO);
    this.socialSharing.share(TO).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });;
  }

  gmap(cate){
    this.navCtrl.push("GmapPage",this.cate);
  }

  // save(){
  //   this.postcomment.comment_content = "" ;
  //   this.postcomment.comment_date = "";
  // }

  summit(cm){
    if(cm != null){
      if(this.num != ""){
        //START
        let josnData;
        josnData = {
          comment_content: cm
        , comment_score: this.num
        , rentalroom_id: this.cate.rentalroom_id
        };

        let url = Enums.APIURL.URL+'/todoslim3/public/room/addcomment';

        this.http.post(url,josnData).subscribe(
        (data: any)=>{
        console.log(data);
        this.getJsonObjet();
        this.cm="";
        this.num="";
        }
        ,
        (error) => {console.log(error)}
         );
        //END
        // this.navCtrl.push("RoomDetailPage",this.cate.category_id);


      }
      else{
        alert("โปรดให้คะแนน");
      }
    }
    else{
      alert("โปรดกรอกความคิดเห็น");
    }
  }

  
 
}
