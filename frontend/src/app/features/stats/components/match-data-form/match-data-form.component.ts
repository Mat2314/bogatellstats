import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-data-form',
  templateUrl: './match-data-form.component.html',
  styleUrls: ['./match-data-form.component.scss']
})
export class MatchDataFormComponent implements OnInit {

  public matchForm: FormGroup = new FormGroup({
    // General match score
    team1_score: new FormControl(null, Validators.required),
    team2_score: new FormControl(null, Validators.required),
    
    // Team 1 players
    team1_player1_id: new FormControl(null, Validators.required),
    team1_player2_id: new FormControl(null, Validators.required),

    // Team 2 playes
    team2_player1_id: new FormControl(null, Validators.required),
    team2_player2_id: new FormControl(null, Validators.required),

  });

  constructor() { }

  ngOnInit(): void {
  }

}
