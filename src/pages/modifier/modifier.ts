import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { HttpClient,HttpParams } from '@angular/common/http';

/**
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html',
})
export class ModifierPage {

  constructor(public navCtrl: NavController,private http: HttpClient, public navParams: NavParams) {
  }
  oneuser={};
  ionViewDidLoad() {
    this.oneuser=this.navParams.data;
  }

  
btnclick(){
    let params = new HttpParams().set('nom', this.oneuser.uNom).append('prenom', this.oneuser.uPrenom).append('mail',this.oneuser.uMail).append('pwd',this.oneuser.pwd);

    this.http.get('http://local.testmit.com/app_dev.php/api/putuser/'+this.oneuser.uId,{params:params})
    .subscribe(data => { 
  
      this.navCtrl.push(AccueilPage);
    
  } 
);
}
}
