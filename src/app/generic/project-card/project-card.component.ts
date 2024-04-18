import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() topPosition: number = 0;
  @Input() title: string = '';
  @Input() badgeColors: string[] = [];
  @Input() tools: string[] = [];
  @Input() myRole: string = '';
  @Input() description: string = '';
}

