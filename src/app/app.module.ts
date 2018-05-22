import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MaincomponentComponent } from "./maincomponent/maincomponent.component";

import { Routes, RouterModule } from "@angular/router";
import { MatchComponent } from "./match/match.component";
import { StatsComponent } from "./stats/stats.component";
import { EditMatchComponent } from "./edit-match/edit-match.component";
import { FormsModule } from "@angular/forms";
const appRoutes: Routes = [
  { path: "", component: MaincomponentComponent },
  { path: "match/:id", component: MatchComponent },
  { path: "match/edit/:id", component: EditMatchComponent },
  { path: "stats", component: StatsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    // import HttpClientModule from BrowserModule

    MaincomponentComponent,
    MatchComponent,
    StatsComponent,
    EditMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
