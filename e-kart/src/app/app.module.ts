import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { SearchComponent } from './components/container/search/search.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductComponent } from './components/container/product-list/product/product.component';
import { FilterComponent } from './components/container/product-list/filter/filter.component';
import { ProductDetailComponent } from './components/container/product-list/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './components/container/featured-brands/featured-brands.component';
import { SetBackgroundDirective } from './directives/set-background.directive';
import { Highlight } from './directives/highlight.directive';
import { HoverDirective } from './directives/hover.directive';
import { DisableProductDirective } from './directives/disable-product.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
    ContainerComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackgroundDirective,
    Highlight,
    HoverDirective,
    DisableProductDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
