import { Component, Input, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data.service';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent implements OnInit {

  @Input() playerId!: string;

  constructor(private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
  }

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

}
