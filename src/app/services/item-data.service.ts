import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemData } from '../types';

@Injectable( {
  providedIn: 'root'
} )
export class ItemDataService {
  private cache: { [ key: string ]: Promise<ItemData> } = {};

  constructor(
    private http: HttpClient
  ) { }

  public getItemData( id: number ): Promise<ItemData> {
    if ( !this.cache[ id ] && localStorage[ 'item_' + id ] ) {
      this.cache[ id ] = Promise.resolve( JSON.parse( localStorage[ 'item_' + id ] ) );
    }
    if ( this.cache[ id ] ) {
      return this.cache[ id ];
    }
    const result = this.http.get<ItemData>( `https://xivapi.com/item/${ id }` ).toPromise();
    result.then( result => {
      localStorage[ 'item_' + id ] = JSON.stringify( result );
    } );
    this.cache[ id ] = result;
    return result;
  }
}