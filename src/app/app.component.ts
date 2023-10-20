import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'DriX',
      'Best-in-class Unmanned Surface Vessel with outstanding sea keeping capabilities and a proven track record in enhancing sea operations efficiency',
      'https://images.laprovence.com/media/hermes/20230313/20230313_1_2_5_1_1_obj27742682_1.jpg?twic=v1/crop=746x419@0x138/cover=1250x703',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'A18-D',
      'A18-D is Exail mid size Autonomous Underwater Vehicle, AUV, for deep water applications. It is dedicated to accurate 3D seabed Survey. It performs autonomous mission up to 3000 m depth with 21 h endurance, and is easy transportable by plane for oversea missions. This system can be delivered with a LARS allowing automatic underwater recovery and software for data post processing.',
      'https://www.ecagroup.com/media-picture/7404-754-473-a18d-credits-exail-balao-hd.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Protos Carrier',
      '"These magnificent capital ships are known to inspire hope in the hearts of templar—or fear in their enemies. Armed with swift interceptors, they are a formidable force on the battlefield."',
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/starcraft/a/aa/ProBroodM7P1.jpg?width=640',
      new Date(),
      0
    );

  }
}
