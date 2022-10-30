
export class Usability {
   static GOOD = 0;
   static NORMAL = 0.75;
   static WORSE = 0.50;
   static POOR = 0.25;
}

export interface CalculatorValues {
    width: number,
    length: number,
    basicMaterial: number,
    topMaterial : number,
    age: number,
    anvandbarhet: number,
    properties: number[],
    setExtraProperty: boolean,
    baseShares: number,
    propertyShares: number[],
    ageReal: number,
    andelstalNewAndOld: number,
    andelsKvot: number[],
    totalValue: number,
    andelstalPay: number[],
    printGrundMaterial: string,
    printTopMaterial: string,
    printAnvandbarhet: string
}
