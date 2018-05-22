import { Component, OnInit } from "@angular/core";
import { MatchService } from "../match.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Form } from "@angular/forms";

@Component({
  selector: "app-edit-match",
  templateUrl: "./edit-match.component.html",
  styleUrls: ["./edit-match.component.css"]
})
export class EditMatchComponent implements OnInit {
  match: { id: number; dateOfPlay: string; team1: string; team2: string };
  dateOfPlay = "";
  team1 = "";
  team2 = "";
  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.match = this.matchService.getMatch(this.route.snapshot.params["id"]);

    this.dateOfPlay = this.match.dateOfPlay;
    this.team1 = this.match.team1;
    this.team2 = this.match.team2;
  }

  onUpdateMatch() {
    this.matchService.updateMatch(this.match.id, {
      id: this.match.id,
      dateOfPlay: this.dateOfPlay,
      team1: this.team1,
      team2: this.team2
    });
    this.router.navigate(["/"]);
  }
}
