import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  
  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const coursesArray = [];
    for (const course of value) {
      if (course.courseName.includes(filteredString)) {
        coursesArray.push(course);
      }
    }
    return coursesArray;
  }
}
