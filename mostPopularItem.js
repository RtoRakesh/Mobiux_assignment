const data = require("./readFile");

function mostPopularItem(salesData) {
  const monthlyItemOrders = {};

  salesData.forEach((saleRecord) => {
    const [day, month, year] = saleRecord.date.split("-");
    const monthKey = `${year}-${month}`; // Format as 'YYYY-MM'

    if (!monthlyItemOrders[monthKey]) {
      monthlyItemOrders[monthKey] = {};
    }

    if (!monthlyItemOrders[monthKey][saleRecord.sku]) {
      monthlyItemOrders[monthKey][saleRecord.sku] = [];
    }

    monthlyItemOrders[monthKey][saleRecord.sku].push(saleRecord.quantity);
  });

  const mostPopularStats = {};

  for (const month in monthlyItemOrders) {
    let mostPopularSku = "";
    let highestTotalQuantity = 0;

    //most popular item by total quantity
    for (const sku in monthlyItemOrders[month]) {
      const totalQuantitySold = monthlyItemOrders[month][sku].reduce(
        (sum, qty) => sum + qty,
        0
      );

      if (totalQuantitySold > highestTotalQuantity) {
        highestTotalQuantity = totalQuantitySold;
        mostPopularSku = sku;
      }
    }

    const popularItemQuantities = monthlyItemOrders[month][mostPopularSku];

    const minQuantity = Math.min(...popularItemQuantities);
    const maxQuantity = Math.max(...popularItemQuantities);
    const avgQuantity =
      popularItemQuantities.reduce((sum, qty) => sum + qty, 0) /
      popularItemQuantities.length;

    mostPopularStats[month] = {
      sku: mostPopularSku,
      min: minQuantity,
      max: maxQuantity,
      avg: avgQuantity.toFixed(2),
    };
  }

  return mostPopularStats;
}

console.log(mostPopularItem(data));
