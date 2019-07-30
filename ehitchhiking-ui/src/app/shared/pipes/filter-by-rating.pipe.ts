import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByRating',
})
export class FilterByRatingPipe implements PipeTransform {
  transform(array: any, fieldName: string,  selectedRating: [], isEnabled: boolean = false): any[] {
    if (!array || !isEnabled) {
      return array;
    }
    return array.filter((trip) => selectedRating.some((rating) => rating === trip.rating));
  }
}
