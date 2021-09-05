import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class LanguageService {
  public languages: Language[] = [ 'en', 'de', 'fr', 'ja' ];
  public language: BehaviorSubject<Language> = new BehaviorSubject<Language>( 'en' );

  constructor() {
    if ( localStorage[ 'lang' ] ) {
      this.set( localStorage[ 'lang' ] );
    }
  }

  public set( lang: Language ) {
    this.language.next( lang );
    localStorage[ 'lang' ] = lang;
  }

  public getItemName( item: any ) {
    if ( !item ) return 'Loading ...';
    return item[ 'Name_' + this.language.value ];
  }
}

export type Language = 'en' | 'de' | 'fr' | 'ja';