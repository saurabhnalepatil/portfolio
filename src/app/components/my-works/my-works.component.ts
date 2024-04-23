import { Component } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent {
  cardData = [
    {
      "imageUrl": "assets/images/work-1.png",
      "title": "Event Decorators",
      "likes": "22",
      "comments": "1",
      "description": "Explore stunning event decorations, from weddings to corporate events, showcasing creativity and attention to detail.",
      "link": "https://event-decoration.vercel.app"
    },
    {
      "imageUrl": "assets/images/school.png",
      "title": "School",
      "likes": "09",
      "comments": "2",
      "description": "Discover innovative digital learning projects for students of all ages, focusing on engaging experiences.",
      "link": "https://school-practice-web.vercel.app"
    },
    {
      "imageUrl": "assets/images/food-order.png",
      "title": "Food Orders",
      "likes": "15",
      "comments": "1",
      "description": "Experience seamless food ordering solutions and from user-friendly apps to efficient backend systems.",
      "link": "https://food-orders-psi.vercel.app"
    },
    {
      "imageUrl": "assets/images/user-auth.png",
      "title": "Auth Dashboard",
      "likes": "13",
      "comments": "0",
      "description": "Manage user authentication effortlessly. Handle sign-up, sign-in, and tokens with ease. Centralized security features for seamless user management.",
      "link": "https://auth-dashboard-frontend.vercel.app"
    },
    {
      "imageUrl": "assets/images/techamica.png",
      "title": "Software Solutions",
      "likes": "125",
      "comments": "5",
      "description": "Built for Techamica, a startup software company. Emphasized simplicity and user-friendliness to reflect their commitment to accessible solutions.",
      "link": "techamica.com"
    }
,
  ];
}
