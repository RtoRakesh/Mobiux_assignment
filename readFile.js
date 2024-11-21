const fs = require("fs");

const filePath = "./data.csv";

let data = fs.readFileSync(filePath, "utf-8");
data = data.trim().split("\n");

const rows = data.slice(1).map((row) => row.split(","));

function divideRows(rows) {
  return rows.map((row) => ({
    date: row[0],
    sku: row[1],
    unitPrice: parseFloat(row[2]),
    quantity: parseInt(row[3], 10),
    totalPrice: parseFloat(row[4]),
  }));
}

const parsedData = divideRows(rows);

module.exports = parsedData;
