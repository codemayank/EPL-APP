import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadHome() {
    this.router.navigate([""]);
  }
}
