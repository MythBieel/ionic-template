import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the NovoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-usuario',
  templateUrl: 'novo-usuario.html',
})
export class NovoUsuarioPage {

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseauth : AngularFireAuth,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(false);
  }
  cadastrar() {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=>{
        //console.log("Cadastrado com sucesso");
        this.msgSucesso();
      })
      .catch(()=>{
        //console.log("Erro ao cadastar");
        this.msgErro();
      })
  }

  msgSucesso() {
    const toast = this.toastCtrl.create({
      message: 'Cadastrado com sucesso!',
      duration: 3000
    });
    toast.present();
  }
  msgErro() {
    const toast = this.toastCtrl.create({
      message: 'Cadastro inválido!',
      duration: 3000
    });
    toast.present();
  }
}
