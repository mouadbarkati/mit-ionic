import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { HttpClient,HttpParams } from '@angular/common/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage {

  nextPage = AccueilPage;

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
  todo = {};
  btnclick(){
        let params = new HttpParams().set('login', this.todo.login).append('pwd', this.todo.pwd);
    
        this.http.get('http://local.testmit.com/app_dev.php/api/auth',{params:params})
        .subscribe(data => { 
      
        if(data.status==0){
          alert(data.response);
        }else{
          this.navCtrl.push(AccueilPage);
        }
		  } 
	);
  }
}
