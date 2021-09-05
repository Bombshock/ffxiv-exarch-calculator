import { Component, Input, OnInit } from '@angular/core';
import { ItemNamePipe } from 'src/app/pipes/item-name.pipe';
import { ItemDataService } from 'src/app/services/item-data.service';
import { LanguageService } from 'src/app/services/language.service';
import { CurrentlyShown, ItemData } from 'src/app/types';

@Component( {
  selector: 'app-currently-shown',
  templateUrl: './currently-shown.component.html',
  styleUrls: [ './currently-shown.component.scss' ]
} )
export class CurrentlyShownComponent implements OnInit {

  @Input() public data: CurrentlyShown;
  public itemData: ItemData;

  constructor(
    private itemDataService: ItemDataService,
    private languageService: LanguageService
  ) { }

  async ngOnInit() {
    this.itemData = await this.itemDataService.getItemData( this.data.itemID );
  }

  public click() {
    navigator.clipboard.writeText( this.languageService.getItemName( this.itemData ) )
  }
}
