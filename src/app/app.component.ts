import { Component, ElementRef, Inject, Input, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, forwardRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProductComponent } from './containers/product/product.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChildComponent } from './containers/child/child.component';
import { ExampleDirective } from './directives/example.directive';
import { FormsModule, NgModel } from '@angular/forms';
import { Child2Component } from './containers/child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[RouterModule, HomeComponent, ProductComponent, NgTemplateOutlet, NgFor, ChildComponent, ExampleDirective, FormsModule, Child2Component, NgIf],
})
export class AppComponent {
  title = 'LastVersionNgProject'; 
  fatma: any;
  visible: boolean = true;
  showHide(){
    this.visible = !this.visible; 
  }
  @Input()id!: number;
/*   constructor(@Inject("url") private url: string){
    console.log(url);
  } */
  @ViewChild("t", { static: false, read: TemplateRef })
  _ngTemplate!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef, private renderer: Renderer2){
  }
  @ViewChild("child", { static: true, read: 'example child provider' }) _exampleProvider!: string;
  @ViewChild(ChildComponent, {static: true}) _childComponent!: ChildComponent;
  @ViewChild("h", {static: true}) _h1: any;
  @ViewChild("h", {read: ElementRef, static: true}) _h2: any;
  @ViewChild("h", {read: ExampleDirective, static: true}) _h3: any;
  @ViewChild("h", {read: NgModel, static: true}) _h4 : any;
  @ViewChild("h", {read: ViewContainerRef, static: true}) _h5: any;

  @ViewChildren("div") _div!: QueryList<ElementRef>;
  @ViewChildren("children", { read: 'example child provider'}) _children!: QueryList<string>;
  @ViewChildren("p") _p!: QueryList<ElementRef>
  @ViewChild("rend", {static: true}) _rend!: ElementRef;


  

  ngOnInit(): void {
    console.log(this._childComponent + "ngOnInit");
    console.log(this._exampleProvider);

    this.renderer.setStyle(this._rend.nativeElement, 'color', 'green');
    const text = this.renderer.createText("merhaba");
  }

  ngAfterViewInit(){
    this.viewContainerRef.createEmbeddedView(this._ngTemplate);
    console.log(this._childComponent +'ngAfterViewInit');
    this._childComponent.x();

    console.log(this._h1);
    console.log(this._h2);
    console.log(this._h3);
    console.log(this._h4);
    console.log(this._h5);

    console.log(this._div);
    console.log(this._children);
    this._p.changes.subscribe({
      next: data => console.log(data)
    })
    
  }

  persons : {name: string, surname: string} [] = [
    {name: "Fatma", surname: "Ozturk"},
    {name: "Ozdemir", surname: "Ozturk"}
  ]
}
