# Ice Cream Parlour Sales Analysis

This repository contains solutions for analyzing the sales data of an ice cream parlour. The dataset is stored in a CSV file, and each problem has been solved in an individual JavaScript file. The data is read from the CSV file using the `readFile.js` file.

## File Structure

├── data.csv # Input data file containing sales records 
├── readFile.js # Reads and parses the CSV file into a usable format 
├── totalSales.js # Calculates the total sales of the store 
├── monthWiseSales.js # Calculates month-wise sales totals 
├── mostPopularItemPerMonth.js # Identifies the most popular item (by quantity) for each month ├── highestRevenue.js # Finds the items generating the most revenue in each month ├── mostPopularItem.js # Provides stats (min, max, average orders) for the most popular item in each month ├── README.md # Documentation for the repository


## Dataset Format

The data in `data.csv` has the following structure:

| Date       | SKU                   | Unit Price | Quantity | Total Price |
|------------|-----------------------|------------|----------|-------------|
| 01-01-2019 | Death by Chocolate    | 180        | 5        | 900         |
| 01-01-2019 | Cake Fudge            | 150        | 1        | 150         |

- **Date**: Date of the sale in `DD-MM-YYYY` format.
- **SKU**: Name of the item sold.
- **Unit Price**: Price of a single unit of the item.
- **Quantity**: Number of units sold in a transaction.
- **Total Price**: Total revenue from the transaction.

## How to Run the Code

### Prerequisites
- Install [Node.js](https://nodejs.org/) on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ice-cream-sales-analysis.git
   cd ice-cream-sales-analysis
2.Place the data.csv file in the root directory.
