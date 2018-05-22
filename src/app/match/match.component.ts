import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MatchService } from "../match.service";

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.css"]
})
export class MatchComponent implements OnInit {
  match: { id: number; dateOfPlay: string; team1: string; team2: string };
  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.route.snapshot will only be instantiated only once when the component is loaded. subsequent changes in parameters will not affect the snapshot property,
    this.match = this.matchService.matches[this.route.snapshot.params["id"]];
    console.log(this.route.snapshot.params["id"]);
    this.route.params.subscribe((params: Params) => {
      this.match = this.matchService.matches[params["id"]];
    });
  }
}
