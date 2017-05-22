import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddits.service';
import { DeatilsPage } from '../details/details';
import { trigger ,state,style,transition,animate} from '@angular/animations';
@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
  animations:[
    trigger('myvisibility',[
      state('visible',style({
        opacity:1
      })),
      state('invisible',style({
        opacity:0
      })),
      transition('* => *',animate('500ms ease-in'))
    ])
  ]
})
export class RedditsPage {
  items:any;
  categary:any;
  limit:any;
  visibleState='visible';
  constructor(public navCtrl: NavController,private redditService:RedditService) {
  	this.getDefults();
  }

  ngOnInit(){
  	this.getPosts(this.categary,this.limit)
  }
  getPosts(categary,limit){
  	this.redditService.getPosts(categary,limit).subscribe(response=>{
  		this.items=response.data.children;
  	})
  }
  getDefults(){
		if(localStorage.getItem('categary')!=null){
			this.categary=localStorage.getItem('categary')
		}else
		{
			this.categary ='sports';
		}
	  	if(localStorage.getItem('limit')!=null){
			this.limit=localStorage.getItem('limit')
		}else
		{
			this.limit = 10;
		}
	  	
	 }
  view(item){
  	this.navCtrl.push(DeatilsPage,{
  		item:item
  	});
    
  }
  changeCat(){
  	this.getPosts(this.categary,this.limit);
  }
  toggle(){
    this.visibleState =(this.visibleState == 'visible') ? 'invisible' : 'visible'
  }

}
