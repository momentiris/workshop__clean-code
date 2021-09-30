export enum TargetCurrency {
  NOK = 'NOK',
  EUR = 'EUR',
  USD = 'USD',
}

export type PriceList = number[];

export const convertSwedishPriceToForeign = (
  price: number,
  targetCurrency: TargetCurrency
) => swedishToForeignCurrencyCalculator[targetCurrency](price);

const swedishToForeignCurrencyCalculator: Record<
  TargetCurrency,
  (x: number) => number
> = {
  NOK: (x: number) => x * 0.98,
  EUR: (x: number) => x * 0.1,
  USD: (x: number) => x * 0.2,
};

export const appendCurrencySuffix = (
  price: string,
  targetCurrency: TargetCurrency
) => price.concat(' ', TargetCurrency[targetCurrency]);

export const toFixedTwoDecimals = (price: number) => price.toFixed(2);
