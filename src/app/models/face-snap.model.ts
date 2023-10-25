export class FaceSnap { 
    id! : number;
    title!: string; 
    description!: string; 
    imageUrl!: string;
    createdDate!: Date; 
    snaps!: number;
    routerLink?: string;
    linkText?: string;
    audio?: string;
    audioCaption? : string;
    location?: string
}