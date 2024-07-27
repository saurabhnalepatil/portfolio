import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertures-card',
  templateUrl: './vertures-card.component.html',
  styleUrls: ['./vertures-card.component.css']
})
export class VerturesCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() likes: string = '';
  @Input() comments: string = '';
  @Input() description: string = '';
  @Input() gitLink: string = '';
  @Input() browserLink: string = '';
}

