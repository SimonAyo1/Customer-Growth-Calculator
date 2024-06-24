import { CustomerGrowthCalculator } from "../calculator";

describe("CustomerGrowthCalculator", () => {
  it("should calculate growth correctly", () => {
    const initialCustomers = 100;
    const startDate = "2024-01-01";
    const growthRates = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    const calculator = new CustomerGrowthCalculator(
      initialCustomers,
      startDate,
      growthRates
    );
    const results = calculator.calculateGrowth();

    expect(results.length).toBe(60); // 5 years, 12 months each
    expect(results[0].customers).toBe(105); // First month's growth
  });

  it("should update specific month growth rate correctly", () => {
    const initialCustomers = 100;
    const startDate = "2024-01-01";
    const growthRates = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    const calculator = new CustomerGrowthCalculator(
      initialCustomers,
      startDate,
      growthRates
    );
    calculator.updateGrowthRate(0, 10); // Update first month's growth rate to 10
    const results = calculator.calculateGrowth();

    expect(results[0].customers).toBe(110); // First month's growth after update
  });

  it("should update all future monthly growth rates correctly", () => {
    const initialCustomers = 100;
    const startDate = "2024-01-01";
    const growthRates = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    const calculator = new CustomerGrowthCalculator(
      initialCustomers,
      startDate,
      growthRates
    );
    calculator.updateGrowthRates([
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    ]);
    const results = calculator.calculateGrowth();

    expect(results[0].customers).toBe(110); // First month's growth after update
    expect(results[1].customers).toBe(121); // Second month's growth after update
  });
});
