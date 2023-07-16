import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet ],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[{provide: 'example child provider', useValue: 'example value child'}]
})
export class ChildComponent {
  @Input()
  childTemplate!: TemplateRef<HTMLElement>;

  x () {
    console.log("Child x function")
  }
}
