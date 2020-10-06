import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { Card1Component } from './portfolio/card1/card1.component';
import { Card2Component } from './portfolio/card2/card2.component';
import { Card3Component } from './portfolio/card3/card3.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'about-us', component : AboutUsComponent},
  {path: 'portfolio', component : PortfolioComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'portfolio/card1', component : Card1Component},
  {path: 'portfolio/card2', component : Card2Component},
  {path: 'portfolio/card3', component : Card3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
