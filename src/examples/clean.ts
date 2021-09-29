import {
  appendCurrencySuffix,
  convertSwedishPriceToForeign,
  PriceList,
  TargetCurrency,
  toFixedTwoDecimals,
} from './utils';

export const getForeignPriceListFromSwedish = (
  priceList: PriceList,
  targetCurrency: TargetCurrency
) =>
  priceList
    .map((price) => convertSwedishPriceToForeign(price, targetCurrency))
    .map(toFixedTwoDecimals)
    .map(String)
    .map((price) => appendCurrencySuffix(price, targetCurrency));
