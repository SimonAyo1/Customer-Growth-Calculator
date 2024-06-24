# Customer Growth Calculator

## Description

This TypeScript project calculates the projected number of customers over the next 5 years based on an initial number of customers and monthly growth rates. It provides a command-line interface (CLI) for user interaction and supports updating growth rates for specific months or all future months. The output is displayed in a formatted table.

## Features

- Calculate customer growth over a 5-year period.
- Accepts initial number of customers, start date, and monthly growth rates as inputs.
- Allows updating growth rates for specific months or all future months.
- Displays projected number of customers for each month over the 5-year period in a formatted table.
- Includes unit tests to verify the correctness of calculations.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/customer-growth-calculator.git
   cd customer-growth-calculator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile TypeScript to JavaScript:**
   ```bash
   npx tsc
   ```

## Usage

### Running the Calculator

To run the calculator, use the CLI with the following options:

```bash
npx ts-node src/index.ts --initialCustomers <number> --startDate <YYYY-MM-DD> --growthRates <rate1,rate2,...,rate12>
```

### Examples

Basic Calculation:

```bash
npx ts-node src/index.ts --initialCustomers 100 --startDate 2024-01-01 --growthRates 5,5,5,5,5,5,5,5,5,5,5,5
```

Updating Specific Month:

```bash
npx ts-node src/index.ts --initialCustomers 100 --startDate 2024-01-01 --growthRates 5,5,5,5,5,5,5,5,5,5,5,5 --updateMonth 0,10
```

Updating All Future Months:

```bash
npx ts-node src/index.ts --initialCustomers 100 --startDate 2024-01-01 --growthRates 5,5,5,5,5,5,5,5,5,5,5,5 --updateRates 10,10,10,10,10,10,10,10,10,10,10,10
```

### Testing

```bash

npm test

```
