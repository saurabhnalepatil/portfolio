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
      title: 'AI Powered Financial App',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'Nginx'],
      myRole: 'Backend Developer',
      description: 'Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI\'s latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.'
    },
    {
      topPosition: 68,
      title: 'Travel Agency App',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['NextJS', 'Tailwind CSS', 'Google Maps', 'NestJS', 'TypeScript', 'MySQL', 'AWS S3', 'Sun-Editor', 'Gmail Passkey'],
      myRole: 'Full Stack Developer',
      description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.'
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
