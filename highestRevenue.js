const data = require("./readFile");

function highestRevenue(salesData) {
  const revenueByMonthAndItem = {};

  salesData.forEach((saleRecord) => {
    const [day, month, year] = saleRecord.date.split("-");
    const monthKey = `${year}-${month}`;

    if (!revenueByMonthAndItem[monthKey]) {
      revenueByMonthAndItem[monthKey] = {};
    }

    if (!revenueByMonthAndItem[monthKey][saleRecord.sku]) {
      revenueByMonthAndItem[monthKey][saleRecord.sku] = 0;
    }

    revenueByMonthAndItem[monthKey][saleRecord.sku] += saleRecord.totalPrice;
  });

  const highestRevenueItems = {};

  for (const month in revenueByMonthAndItem) {
    let maxRevenue = 0;
    let topItem = "";

    for (const sku in revenueByMonthAndItem[month]) {
      const itemRevenue = revenueByMonthAndItem[month][sku];
      if (itemRevenue > maxRevenue) {
        maxRevenue = itemRevenue;
        topItem = sku;
      }
    }

    highestRevenueItems[month] = { sku: topItem, revenue: maxRevenue };
  }

  return highestRevenueItems;
}

console.log(highestRevenue(data));
