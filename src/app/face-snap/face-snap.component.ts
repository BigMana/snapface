import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
   description!: string;
   creationDate!: Date;
   snaps!: number;

   ngOnInit() {
     this.title = 'Archibald';
     this.description = 'Mon meilleur ami depuis tout petit';
     this.creationDate = new Date();
     this.snaps = 6;
   }
}
