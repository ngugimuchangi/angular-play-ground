import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentService } from './services/student.service';
import { AdminComponent } from './admin/admin.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, AdminComponent, PercentagePipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
