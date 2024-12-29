import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coin-list',
    pathMatch: 'full',
  },

  {
    path: 'coin-list',
    component: CoinListComponent,
  },

  {
    path: 'coin-detail/:id',
    component: CoinDetailComponent,
  },
  {
    path: 'coin-detail/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
