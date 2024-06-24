import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CustomerGrowthCalculator } from './calculator';
import Table from 'cli-table3';

interface Arguments {
    initialCustomers: number;
    startDate: string;
    growthRates: number[];
    updateMonth?: {
        monthIndex: number;
        newRate: number;
    };
    updateRates?: number[];
}

const argv = yargs(hideBin(process.argv))
    .options({
        initialCustomers: { type: 'number', demandOption: true, alias: 'i', description: 'Initial number of customers' },
        startDate: { type: 'string', demandOption: true, alias: 's', description: 'Start date (YYYY-MM-DD)' },
        growthRates: { 
            type: 'string', 
            demandOption: true, 
            alias: 'g', 
            description: 'Monthly growth rates (comma-separated for 12 months)', 
            coerce: (arg: string) => arg.split(',').map(Number)
        },
        updateMonth: {
            type: 'string',
            alias: 'u',
            description: 'Update a specific month growth rate (format: monthIndex,newRate)',
            coerce: (arg: string) => {
                const [monthIndex, newRate] = arg.split(',').map(Number);
                return { monthIndex, newRate };
            }
        },
        updateRates: {
            type: 'string',
            alias: 'r',
            description: 'Update all future monthly growth rates (comma-separated for 12 months)',
            coerce: (arg: string) => arg.split(',').map(Number)
        }
    })
    .help()
    .alias('help', 'h')
    .argv as Arguments;

const calculator = new CustomerGrowthCalculator(argv.initialCustomers, argv.startDate, argv.growthRates);

if (argv.updateMonth) {
    calculator.updateGrowthRate(argv.updateMonth.monthIndex, argv.updateMonth.newRate);
} else if (argv.updateRates) {
    calculator.updateGrowthRates(argv.updateRates);
}

const results = calculator.calculateGrowth();

const table = new Table({
    head: ['Month', 'Projected Customers'],
    colWidths: [20, 20]
});

results.forEach(result => {
    table.push([result.month, result.customers]);
});

console.log(table.toString());
