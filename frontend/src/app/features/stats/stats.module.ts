import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDataComponent } from './components/player-data/player-data.component';
import { PlayerDetailsPageComponent } from './pages/player-details-page/player-details-page.component';
import { StatsRoutingModule } from './stats-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatchDataPageComponent } from './pages/match-data-page/match-data-page.component';
import { MatchDataFormComponent } from './components/match-data-form/match-data-form.component';

@NgModule({
  declarations: [
    PlayerDataComponent,
    PlayerDetailsPageComponent,
    MatchDataPageComponent,
    MatchDataFormComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule
  ]
})
export class StatsModule { }
