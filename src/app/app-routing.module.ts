import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiZydusComponent } from './AI-bots/ai-zydus/ai-zydus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AIBotPortfolioComponent } from './AI-bots/ai-bot-portfolio/ai-bot-portfolio.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
  },
  {
    path: 'ai-zydus', component: AiZydusComponent,
  },
  {
    path: 'ai-bot', component: AIBotPortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
