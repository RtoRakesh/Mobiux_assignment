const data = require("./readFile");

function mostPopularItemPerMonth(data) {
  const monthItemMap = {};

  data.forEach((record) => {
    const [day, month, year] = record.date.split("-");
    const formattedMonth = `${year}-${month}`;

    // Initialize month  if not
    if (!monthItemMap[formattedMonth]) {
      monthItemMap[formattedMonth] = {};
    }

    if (!monthItemMap[formattedMonth][record.sku]) {
      monthItemMap[formattedMonth][record.sku] = 0;
    }

    // Add the quantity sold
    monthItemMap[formattedMonth][record.sku] += record.quantity;
  });

  const result = {};
  for (const month in monthItemMap) {
    let maxQuantity = 0;
    let popularItem = "";

    for (const sku in monthItemMap[month]) {
      //maximun finding
      if (monthItemMap[month][sku] > maxQuantity) {
        maxQuantity = monthItemMap[month][sku];
        popularItem = sku;
      }
    }

    result[month] = { sku: popularItem, quantity: maxQuantity };
  }

  return result;
}

console.log(mostPopularItemPerMonth(data));
