import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { CurrentlyShown } from './types';

const itemWorth: { worth: number, ids: string[] }[] = [
  {
    worth: 42,
    ids: [
      //weapons
      '31814',
      '31815',
      '31816',
      '31817',
      '31818',
      '31819',
      '31820',
      '31821',
      '31822',
      '31823',
      '31824',
      '31825',
      '31826',
      '31827',
      '31828',
      '31829',
      //chest
      '31844',
      '31856',
      '31832',
      '31850',
      '31838',
      '31868',
      '31862',
      //legs
      '31852',
      '31840',
      '31834',
      '31846',
      '31858',
      '31864',
      '31870',
    ]
  },
  {
    worth: 33,
    ids: [
      //head
      '31855',
      '31849',
      '31843',
      '31867',
      '31861',
      '31837',
      '31831',
      //hands
      '31833',
      '31839',
      '31845',
      '31851',
      '31857',
      '31869',
      '31863',
      //feet
      '31871',
      '31859',
      '31865',
      '31835',
      '31853',
      '31847',
      '31841',
    ]
  },
  {
    worth: 21,
    ids: [
      //pala
      '31813',
      '31830',
      //belts
      '31872',
      '31836',
      '31842',
      '31866',
      '31854',
      '31860',
      '31846',
      //earring
      '31873',
      '31874',
      '31875',
      '31876',
      '31877',
      //brace
      '31883',
      '31884',
      '31885',
      '31886',
      '31887',
      //ring
      '31888',
      '31889',
      '31890',
      '31891',
      '31892',
    ]
  }
]

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  public itemsDone: CurrentlyShown[] = [];

  public done = 0;
  public maxDone = 0;
  public inProgress = false;
  public progress = 0;

  private queue: Promise<any> = Promise.resolve();

  constructor(
    private http: HttpClient,
    public languageService: LanguageService
  ) {
    this.init();
  }

  private async init() {
    this.itemsDone = [];
    this.done = 0;
    this.maxDone = 0;
    this.progress = 0;
    this.inProgress = true;
    itemWorth.forEach( group => {
      group.ids.forEach( id => {
        this.enqueue( id, group.worth );
      } )
    } )
    this.queue.then( () => {
      this.inProgress = false;
    } );
  }

  private enqueue( id: string, worth: number ) {
    this.maxDone++;
    this.queue = this.queue.then( async () => {
      const result = await this.getItem( id );
      result.worth = worth;
      result.gilPerToken = result.minPriceHQ / worth;
      this.itemsDone.push( result );
      this.done++;
      this.progress = this.done / this.maxDone * 100;
      this.sort();
      return wait( 1000 / 24 );
    } )
  }

  private getItem( id: string ): Promise<CurrentlyShown> {
    return this.http.get( `https://universalis.app/api/omega/${ id }` ).toPromise() as Promise<CurrentlyShown>
  }

  private sort() {
    this.itemsDone = this.itemsDone.sort( ( a, b ) => {
      return a.gilPerToken - b.gilPerToken;
    } );
  }
}

function wait( ms: number ) {
  return new Promise( resolve => {
    setTimeout( resolve, ms );
  } )
}
