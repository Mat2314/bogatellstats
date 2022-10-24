import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'stats',
    loadChildren: () => import('./features/stats/stats.module').then(m => m.StatsModule)
  },
  {
    path: '**', redirectTo: 'stats', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
