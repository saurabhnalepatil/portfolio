import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VerturesCardComponent } from './generic/vertures-card/vertures-card.component';
import { ProjectCardComponent } from './generic/project-card/project-card.component';
import { HeroCardComponent } from './generic/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AiZydusComponent } from './AI-bots/ai-zydus/ai-zydus.component';
import { AiRetailbuddyComponent } from './AI-bots/ai-retailbuddy/ai-retailbuddy.component';
import { AIBotPortfolioComponent } from './AI-bots/ai-bot-portfolio/ai-bot-portfolio.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';


const googleLoginOptions = {
  provide: 'SocialAuthServiceConfig',
  useFactory: () => {
    return {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('282318528165-gnro0jskj7k2tcg669jqgc8ovgit636d.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig;
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExperiencesComponent,
    SkillsComponent,
    EducationsComponent,
    ContactusComponent,
    ProjectsComponent,
    MyWorksComponent,
    VerturesCardComponent,
    ProjectCardComponent,
    HeroCardComponent,
    AiZydusComponent,
    AiRetailbuddyComponent,
    AIBotPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    HttpClientModule
  ],
  providers: [googleLoginOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
