import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyNgClassDirective } from './directives/my-ng-class.directive';
import { MyNgStyleDirective } from './directives/my-ng-style.directive';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { NgSwitchExampleComponent } from './components/ng-switch-example/ng-switch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNgClassDirective,
    MyNgStyleDirective,
    MyNgIfDirective,
    TermsAndConditionsComponent,
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
