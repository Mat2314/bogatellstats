import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDataPageComponent } from './pages/match-data-page/match-data-page.component';
import { PlayerDetailsPageComponent } from './pages/player-details-page/player-details-page.component';


const routes: Routes = [
    {
        path: '',
        component: PlayerDetailsPageComponent
    },
    {
        path: 'match',
        component: MatchDataPageComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatsRoutingModule { }