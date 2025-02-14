import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AiChatbotComponent } from './components/ai-chatbot/ai-chatbot.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
  },
  {
    path: 'ai-bot', component: AiChatbotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
