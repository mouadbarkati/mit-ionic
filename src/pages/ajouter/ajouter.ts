import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { HttpClient,HttpParams } from '@angular/common/http';


/**
 * Generated class for the AjouterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter',
  templateUrl: 'ajouter.html',
})
export class AjouterPage {

  constructor(public navCtrl: NavController,private http: HttpClient, public navParams: NavParams) {
  }
todo ={};
  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterPage');
  }
  btnclick(){
    let params = new HttpParams().set('nom', this.todo.nom).append('prenom', this.todo.prenom).append('mail',this.todo.email).append('pwd',this.todo.pwd);

    this.http.get('http://local.testmit.com/app_dev.php/api/postuser',{params:params})
    .subscribe(data => { 
  
      this.navCtrl.push(AccueilPage);
    
  } 
);
}
}
