import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details-page',
  templateUrl: './player-details-page.component.html',
  styleUrls: ['./player-details-page.component.scss']
})
export class PlayerDetailsPageComponent implements OnInit {

  public playerId: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
