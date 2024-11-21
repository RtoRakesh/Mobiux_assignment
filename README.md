# Ice Cream Parlour Sales Analysis

This repository contains solutions for analyzing the sales data of an ice cream parlour. The dataset is stored in a CSV file, and each problem has been solved in an individual JavaScript file. The data is read from the CSV file using the `readFile.js` file.

## File Descriptions

- **data.csv**:  Contains sales data including item names, quantities, prices, and timestamps. This file serves as the input for the analysis scripts.
- **readFile.js**:  Reads the `data.csv` file, parses its content, and converts it into a usable JavaScript object/array format for further processing.
- **totalSales.js**:  Processes the parsed data to calculate and return the total sales amount for the store.
- **monthWiseSales.js**:  Computes the total sales for each month, providing a breakdown of revenue by month.
- **mostPopularItemPerMonth.js**:  Analyzes sales data to determine the most popular item (based on quantity sold) for each month.
- **highestRevenue.js**:  Identifies the items that generate the most revenue for each month by multiplying quantities sold by item price.
- **mostPopularItem.js**:  Provides detailed statistics (minimum, maximum, and average orders) for the most popular item across all months.
- **README.md**:  This documentation file, which explains the project structure, functionality, and usage.


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
2. Place the data.csv file in the root directory
3. Run each problem script individually:
  ```bash
  node filename.js
  
