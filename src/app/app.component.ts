import { Component, Inject, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProductComponent } from './containers/product/product.component';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ChildComponent } from './containers/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[RouterModule, HomeComponent, ProductComponent, NgTemplateOutlet, NgFor, ChildComponent]
})
export class AppComponent {
  title = 'LastVersionNgProject';
  @Input()id!: number;
/*   constructor(@Inject("url") private url: string){
    console.log(url);
  } */
  @ViewChild("t", { static: false, read: TemplateRef })
  _ngTemplate!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef){

  }

  ngAfterViewInit(){
    this.viewContainerRef.createEmbeddedView(this._ngTemplate);
  }

  persons : {name: string, surname: string} [] = [
    {name: "Fatma", surname: "Ozturk"},
    {name: "Ozdemir", surname: "Ozturk"}
  ]
}
