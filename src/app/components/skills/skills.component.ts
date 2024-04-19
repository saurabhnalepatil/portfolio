import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'AWS', image: 'assets/images/skills/aws.svg' },
    { name: 'Bootstrap', image: 'assets/images/skills/bootstrap.svg' },
    { name: 'CSS', image: 'assets/images/skills/css.svg' },
    { name: 'Docker', image: 'assets/images/skills/docker.svg' },
    { name: 'Figma', image: 'assets/images/skills/figma.svg' },
    { name: 'Firebase', image: 'assets/images/skills/fireba.svg' },
    { name: 'Git', image: 'assets/images/skills/git.svg' },
    { name: 'Go', image: 'assets/images/skills/go.svg' },
    { name: 'HTML', image: 'assets/images/skills/html.svg' },
    { name: 'JavaScript', image: 'assets/images/skills/javascript.svg' },
    { name: 'MaterialUi', image: 'assets/images/skills/materialui.svg' },
    { name: 'MongoDB', image: 'assets/images/skills/mongoDB.svg' },
    { name: 'MySQL', image: 'assets/images/skills/mysql.svg' },
    { name: 'Angular', image: 'assets/images/skills/angular.png' },
    { name: 'React', image: 'assets/images/skills/react.svg' },
    { name: 'Strapi', image: 'assets/images/skills/strapi.svg' },
    { name: 'Tailwind', image: 'assets/images/skills/tailwind.svg' },
    { name: 'TypeScript', image: 'assets/images/skills/typescript.svg' }
  ];

}
