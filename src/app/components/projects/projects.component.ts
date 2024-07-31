import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      topPosition: 0,
      title: 'AI-Based Essay Grading System (2023-2024)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Python', 'SQL', 'OpenAI API', 'Azure', 'Azure function', 'SMTP Server', 'Pinecone', 'Threading', 'Postman'],
      myRole: 'Backend Developer',
      description: 'Developed and implemented an AI-Based Essay Grading System leveraging serverless architecture with Azure Functions and SQL Server. This project aimed to address the challenges of manual essay grading, such as subjectivity, inconsistency, and time consumption. My key responsibilities included'
    },
    {
      topPosition: 68,
      title: 'Assessment Portal Project (2022-2023)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.Net Core', 'SQL', 'Material UI', 'Bootstrap CSS', 'Google Maps', 'TypeScript', 'SMTP Server', 'IIS', 'Gmail Passkey'],
      myRole: 'Full Stack Developer',
      description: 'Worked on an Angular and .NET project, building an assessment portal with various question types (Coding, MCQ, Descriptive, Fill in the Blanks). This project included:'
    },
    {
      topPosition: 136,
      title: 'AI Powered Real Estate',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
      myRole: 'Full Stack Developer',
      description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.'
    },
    {
      topPosition: 204,
      title: 'Newsroom Management',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', 'Calendar'],
      myRole: 'Full Stack Developer',
      description: 'My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the applications state and React- hook - form and Sun Editor to handle forms.'
    },
  ];
}
