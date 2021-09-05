export type CurrentlyShown = {
    itemID: number;
    worldID: number;
    lastUploadTime: number;
    listings: CurrentlyShownListingItem[];
    recentHistory: CurrentlyShownHistoryItem[];
    currentAveragePrice: number;
    currentAveragePriceNQ: number;
    currentAveragePriceHQ: number;
    regularSaleVelocity: number;
    nqSaleVelocity: number;
    hqSaleVelocity: number;
    averagePrice: number;
    averagePriceNQ: number;
    averagePriceHQ: number;
    minPrice: number;
    minPriceNQ: number;
    minPriceHQ: number;
    maxPrice: number;
    maxPriceNQ: number;
    maxPriceHQ: number;
    stackSizeHistogram: {[key: string]: number};
    stackSizeHistogramNQ: {[key: string]: number};
    stackSizeHistogramHQ: {[key: string]: number};
    worldName: string;
    worth: number;
    gilPerToken: number;
}

export type CurrentlyShownListingItem = {
    lastReviewTime: number;
    pricePerUnit: number;
    quantity: number;
    stainID: number;
    creatorName: string;
    creatorID: string;
    hq: boolean;
    isCrafted: boolean;
    listingID: null;
    materia: [];
    onMannequin: boolean;
    retainerCity: number;
    retainerID: string;
    retainerName: string;
    sellerID: string;
    total: number;
    checked: boolean;
}

export type CurrentlyShownHistoryItem = {
    hq: boolean;
    pricePerUnit: number;
    quantity: number;
    timestamp: number;
    buyerName: string;
    total: number;
}

export type ItemData = {
  Name: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
}