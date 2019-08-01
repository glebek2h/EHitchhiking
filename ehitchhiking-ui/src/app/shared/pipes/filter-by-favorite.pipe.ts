import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByFavorite',
})
export class FilterByFavoritePipe implements PipeTransform {
	transform(array: any, isFavorite: string, selectedFavorite: boolean = false): any[] {
		if (!array || !selectedFavorite) {
			return array;
		}

		return array.filter((trip) => trip[isFavorite] === selectedFavorite);
	}
}
