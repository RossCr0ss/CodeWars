function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    netProfit = principal * interest;
    netProfit -= netProfit * tax;
    principal += netProfit;
    year++;
  }
  return year;
}

calculateYears(1000, 0.05, 0.18, 1100);
