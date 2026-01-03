/*
The Yeti is ordering party supplies from an international 
vendor and needs to calculate the final bill in local currency 
(with conversion rates and service fees).

The Yeti has the cart ready and the pricing engine set up, 
but when trying to calculate the total, something's going 
horribly wrong with the numbers!

Fix the calculateFinalBill function so the Yeti can finally 
place the order before the party starts!
*/

/*
Simplified PricingEngine class (already implemented):

class PricingEngine {
  constructor(exchangeRate, serviceFeePercentage) {
    this.exchangeRate = exchangeRate;
    this.serviceFeePercentage = serviceFeePercentage;
  }

  // convert USD price to local currency
  convertToLocal(usdPrice) {
    return usdPrice * this.exchangeRate;
  }

  // add item with fee
  accumulateTotal(currentTotal, itemPrice) {
    const fee = itemPrice * this.serviceFeePercentage;
    return currentTotal + itemPrice + fee;
  }
}
*/

function calculateFinalBill(cartPricesUSD, exchangeRate, feePercent) {
  const engine = new PricingEngine(exchangeRate, feePercent);

  // convert prices to local currency
  const localPrices = cartPricesUSD.map(engine.convertToLocal, engine);

  // calculate the final bill
  const finalBill = localPrices.reduce(engine.accumulateTotal.bind(engine), 0);

  return finalBill;
}
