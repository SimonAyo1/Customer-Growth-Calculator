export interface GrowthRates {
  [index: number]: number;
}

export class CustomerGrowthCalculator {
  private initialCustomers: number;
  private startDate: Date;
  private growthRates: GrowthRates;

  constructor(
    initialCustomers: number,
    startDate: string,
    growthRates: number[]
  ) {
    this.initialCustomers = initialCustomers;
    this.startDate = new Date(startDate);
    this.growthRates = growthRates;
  }

  public calculateGrowth(): { month: string; customers: number }[] {
    let customers = this.initialCustomers;
    let results: { month: string; customers: number }[] = [];
    for (let i = 0; i < 60; i++) {
      let currentMonth = new Date(this.startDate);
      currentMonth.setMonth(currentMonth.getMonth() + i);
      customers *= 1 + this.growthRates[i % 12] / 100;
      results.push({
        month: currentMonth.toISOString().substring(0, 7),
        customers: Math.round(customers),
      });
    }
    return results;
  }

  public updateGrowthRate(monthIndex: number, newRate: number): void {
    this.growthRates[monthIndex % 12] = newRate;
  }

  public updateGrowthRates(newRates: number[]): void {
    this.growthRates = newRates;
  }
}
