const data = require("./readFile");

const totalSales = (data) => {
  return data.reduce((total, record) => total + record.totalPrice, 0);
};

console.log(totalSales(data));
