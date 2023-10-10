import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(students: Student[], filter: string = ''): Student[] {
    return students.filter(
      (student) => student.gender === filter || filter === 'All'
    );
  }
}
