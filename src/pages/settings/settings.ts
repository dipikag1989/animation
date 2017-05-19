import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  items:any;
  categary:any;
  limit:any;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
  	this.getDefults();
  }
	getDefults(){
		if(localStorage.getItem('categary')!=null){
			this.categary=localStorage.getItem('categary')
		}else
		{
			this.categary ='sports';
		}
	  	if(localStorage.getItem('limit')!=null){
			this.categary=localStorage.getItem('limit')
		}else
		{
			this.limit = 10;
		}
	  	
	 }
  setDefults(){
  	debugger
  	
  	let confirm = this.alertCtrl.create({
      title: 'SAVE !!!',
      message: 'are you sure?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Ok',
          handler: () => {
            localStorage.setItem('categary',this.categary)
		  	localStorage.setItem('limit',this.limit)
		  	this.navCtrl.push(RedditsPage)
          }
        }
      ]
    });
    confirm.present();
  }
}
