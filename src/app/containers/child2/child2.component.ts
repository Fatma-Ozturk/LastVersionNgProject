import { Component, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers:[{provide: 'example child provider', useValue: 'example value child2'}]
})
export class Child2Component {
  @ContentChild("exampleContent") _exampleContent!: ElementRef;
  ngAfterContentInit(){
    console.log(this._exampleContent);
 }

}
