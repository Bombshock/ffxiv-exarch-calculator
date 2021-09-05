import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe( {
  name: 'itemName',
  pure: false
} )
export class ItemNamePipe implements PipeTransform {

  constructor(
    private languageService: LanguageService
  ) { }

  transform( value: any ): string {
    return this.languageService.getItemName(value);
  }

}
