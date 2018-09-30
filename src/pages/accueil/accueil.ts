import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjouterPage } from '../ajouter/ajouter';
import { loginPage } from '../login/login';
import { ModifierPage } from '../modifier/modifier';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  nextPage = AjouterPage;
  nextP = ModifierPage;
  deconection =loginPage;
  users = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }
  

  ionViewDidLoad() {    
    this.http.get('http://local.testmit.com/app_dev.php/api/getusers')
    .subscribe(data =>  this.users=data
	);
    console.log('ionViewDidLoad AccueilPage');
  }

  delete(user): void {  
    
    this.http.get('http://local.testmit.com/app_dev.php/api/deleteuser/'+user.uId)
    .subscribe(data => 
        this.users = this.users.filter(h => h !== user)		    
	  );
  
  }
  
  getone(user): void {  
      this.navCtrl.push(ModifierPage,user);
  }
}
