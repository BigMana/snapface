import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandigPageComponent } from "./landig-page/landig-page.component";

const routes: Routes = [
    { path: '', component: LandigPageComponent},
    { path: 'facesnaps', component: FaceSnapListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}