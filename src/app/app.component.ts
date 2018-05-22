import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatchService]
})
export class AppComponent implements OnInit{

constructor(private matchService: MatchService){}

ngOnInit(){
}

}
