const data = require("./readFile");

const monthWiseSales = (data) => {
  const monthTotals = {};
  data.forEach((record) => {
    const [day, month, year] = record.date.split("-");
    const formattedMonth = `${year}-${month}`;

    //If the key does not exist, initialize it to 0
    if (!monthTotals[formattedMonth]) {
      monthTotals[formattedMonth] = 0;
    }

    monthTotals[formattedMonth] += record.totalPrice;
  });
  return monthTotals;
};

console.log(monthWiseSales(data));
