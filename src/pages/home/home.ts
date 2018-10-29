import {Component, ChangeDetectorRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemModel} from "../../app/Models/Card";
import mergeImages from 'merge-images';
import {Camera, CameraOptions} from "@ionic-native/camera";
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})







export class HomePage {

  itemModel = new ItemModel("Juan" , "Nota de prueba");
  prueba = "Soy una prueba"
  image: string = 'assets/imgs/mario2.jpg';







  constructor(public navCtrl: NavController, public camera: Camera,public cd: ChangeDetectorRef, public base64ToGallery: Base64ToGallery) {


    mergeImages([{ src: this.image, x: 0, y: 0 },
      { src: 'assets/imgs/cartaBaseFondo5.png', x: 160, y: 0}],{
      width: 500,
      height: 500
    })
      .then(b64 => document.querySelector('img').src = b64);




  }


  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 348,
      targetHeight: 250,
      quality: 100
    }
    this.camera.getPicture( options )
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;

        mergeImages([{ src: this.image, x: 0, y: 0 },
          { src: 'assets/imgs/cartaBaseFondo5.png', x: 0, y: 0}],{
          width: 500,
          height: 500
        })
          .then(b64 => document.querySelector('img').src = b64);





        this.cd.detectChanges();
      })
      .catch(error =>{
        console.error( error );
      });
  }


  saveImage(){


    this.base64ToGallery.base64ToGallery(document.querySelector('img').src, ).then(
      res => alert("Guardada"),
      err => alert("Fallo")
    );


  }









}
