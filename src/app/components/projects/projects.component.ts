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
      title: 'RiderReach (Cab Advertiser Portal)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['C#', '.NET Core', 'Dapper', 'MS-SQL', 'Redis', 'Angular', 'Azure'],
      myRole: 'Full Stack Developer',
      description: 'Developed a Cab Advertising platform that enables businesses to run targeted ad campaigns on tablet screens in cabs, leveraging real-time analytics and dynamic content updates for maximum engagement. Key responsibilities included designing and implementing Admin, Customer, and Driver modules using Angular, building efficient backend APIs with .NET Core and Dapper, optimizing MS-SQL queries for performance, and integrating Redis caching to enhance responsiveness. Additionally, worked on campaign scheduling, payment processing, and real-time driver status updates to ensure seamless functionality.'
    },
    {
      topPosition: 68,
      title: 'RCS (Retail Control System)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.NET Core', 'MS-SQL', 'Azure', 'Bootstrap'],
      myRole: 'Full Stack Developer',
      description: 'Developed and maintained RCS, an integrated platform designed to enhance retail operations and management efficiency. Key responsibilities included implementing core modules such as inventory management, sales tracking, and CRM to streamline platform functionality. Optimized inventory processes by automating stock updates and alerts, reducing manual errors by 40%. Led secure payment system integration, ensuring compliance with industry standards for data security. Collaborated with cross-functional teams to design scalable solutions for multi-store management and reporting. Improved application performance by optimizing database queries and backend APIs, reducing response times by 20%.'
    },
    {
      topPosition: 136,
      title: 'HuntScaler (Assessment Portal)',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['Angular', '.Net Core', 'SQL', 'Material UI', 'Bootstrap CSS', 'Google Maps', 'TypeScript', 'SMTP Server', 'IIS', 'Gmail Passkey'],
      myRole: 'Full Stack Developer',
      description: 'Worked on an Angular and .NET project, building an assessment portal with various question types (Coding, MCQ, Descriptive, Fill in the Blanks). This project included:'
    },
    {
      topPosition: 204,
      title: 'AI Powered Real Estate',
      badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
      tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
      myRole: 'Full Stack Developer',
      description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.'
    },
  ];
}
