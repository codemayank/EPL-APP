import { Component, OnInit } from "@angular/core";
import { MatchService } from "../match.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-maincomponent",
  templateUrl: "./maincomponent.component.html",
  styleUrls: ["./maincomponent.component.css"]
})
export class MaincomponentComponent implements OnInit {
  matches: {
    id: number;
    dateOfPlay: string;
    team1: string;
    team2: string;
  }[] = [];

  constructor(private matchService: MatchService, private router: Router) {}

  ngOnInit() {
    this.matches = this.matchService.matches;
  }
  onLoadStats() {
    this.router.navigate(["/stats"]);
  }
}
