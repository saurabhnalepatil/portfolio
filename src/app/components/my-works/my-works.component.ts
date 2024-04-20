import { Component } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent {
  cardData = [
    {
      imageUrl: "assets/images/work-1.png",
      title: "Event Decorators",
      likes: "22",
      comments: "1",
      description: "showcasing his expertise in Event Decoration. Explore a collection of stunning projects and experiences that demonstrate creativity and skill.",
      link: "https://event-decoration.vercel.app"
    },
    {
      imageUrl: "assets/images/school.png",
      title: "School",
      likes: "09",
      comments: "2",
      description: "showcasing his expertise in Event Decoration. Explore a collection of stunning projects and experiences that demonstrate creativity and skill.",
      link: "https://school-practice-web.vercel.app"
    },
    {
      imageUrl: "assets/images/food-order.png",
      title: "Food Orders",
      likes: "15",
      comments: "1",
      description: "showcasing his expertise in Event Decoration. Explore a collection of stunning projects and experiences that demonstrate creativity and skill.",
      link: "https://food-orders-psi.vercel.app"
    },
  ];
}
