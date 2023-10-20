import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'DriX',
      'Best-in-class Unmanned Surface Vessel with outstanding sea keeping capabilities and a proven track record in enhancing sea operations efficiency',
      'https://images.laprovence.com/media/hermes/20230313/20230313_1_2_5_1_1_obj27742682_1.jpg?twic=v1/crop=746x419@0x138/cover=1250x703',
      new Date(),
      0
    );
  }
}
