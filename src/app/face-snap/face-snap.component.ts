import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
   @Input() faceSnap!: FaceSnap;

   title!: string;
   description!: string;
   creationDate!: Date;
   snaps!: number;
   imageUrl!: string;
   buttonText!: string;

   ngOnInit() {
    this.title = 'DriX';
    this.description = 'Best-in-class Unmanned Surface Vessel with outstanding sea keeping capabilities and a proven track record in enhancing sea operations efficiency';
    this.creationDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://images.laprovence.com/media/hermes/20230313/20230313_1_2_5_1_1_obj27742682_1.jpg?twic=v1/crop=746x419@0x138/cover=1250x703'
    this.buttonText = 'Oh Snap!'
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
     this.snaps++;
     this.buttonText = 'Oops, unSnap!';
    } else {      
     this.snaps--;
     this.buttonText = 'Oh Snap!';
    }
  } 


   //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.frandroid.com%2Ftest%2F289427_prise-main-parrot-hydrofoil-drone-lhybride-hydroptere-quadricoptere&psig=AOvVaw0WXQCvCpQaRQJMFl7o_Mee&ust=1697875565059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD_u8GVhIIDFQAAAAAdAAAAABAJ

   //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.capital.fr%2Feconomie-politique%2Fles-etats-unis-developpent-un-bateau-autonome-rempli-de-drones-kamikazes-1392791&psig=AOvVaw0WXQCvCpQaRQJMFl7o_Mee&ust=1697875565059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD_u8GVhIIDFQAAAAAdAAAAABAX

   //https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.photo-gfx.gr%2Fgoods%2Frecuperation1307721%3Fkey%3DZ&psig=AOvVaw0WXQCvCpQaRQJMFl7o_Mee&ust=1697875565059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD_u8GVhIIDFQAAAAAdAAAAABAn

   //Carrier Protos !
   //https://oyster.ignimgs.com/mediawiki/apis.ign.com/starcraft/a/aa/ProBroodM7P1.jpg?width=640

   //Drone du Carrier Protos
   //https://liquipedia.net/commons/images/5/58/Interceptor.gif
}
