import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { HomeComponent } from './app/containers/home/home.component';
import { AboutComponent } from './app/containers/about/about.component';
import { ProductComponent } from './app/containers/product/product.component';

bootstrapApplication(AppComponent, {providers: [
  {provide:"url", useValue: "https://www.google.com"},
    provideRouter([
      {path: "", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "product/:id", component: ProductComponent, data:{productName: "terlik"}},
    ], withPreloading(PreloadAllModules), withComponentInputBinding())
  ]
})