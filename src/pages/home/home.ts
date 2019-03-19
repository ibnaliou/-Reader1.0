import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  ModalController} from 'ionic-angular';
import { ViewController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController) {

  }
    
    navigateToPayment(){
      this.navCtrl.push("PaymentPage");
    }
     navigateToLogin(){
      this.navCtrl.push("PagesLoginPage");
    }
    

}

