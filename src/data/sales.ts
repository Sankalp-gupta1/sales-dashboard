export type SalesRecord = {
  month: string;
  year: 2022 | 2023 | 2024;
  sales: number;
  orders: number;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const raw = {
  2022: [42000, 38000, 46000, 51000, 57000, 62000, 59000, 66000, 71000, 76000, 82000, 91000],
  2023: [52000, 49000, 61000, 68000, 72000, 79000, 84000, 90000, 95000, 104000, 111000, 126000],
  2024: [68000, 73000, 82000, 90000, 96000, 108000, 115000, 122000, 136000, 144000, 158000, 172000]
} as const;

export const salesData: SalesRecord[] = Object.entries(raw).flatMap(([year, values]) =>
  values.map((sales, index) => ({
    month: months[index],
    year: Number(year) as 2022 | 2023 | 2024,
    sales,
    orders: Math.round(sales / 1200 + index * 4)
  }))
);
