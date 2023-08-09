function abbreviateNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + 'B';
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';
  }
  return number.toFixed(1);
}

export function renderBeautifulDollarAmount(goals) {
  if (!Array.isArray(goals) || goals.length === 0) {
    return '';
  }

  const totalAmount = goals.slice(0, 1).reduce((acc, curr) => acc + curr.amount, 0);

  const formattedAmount = abbreviateNumber(totalAmount);

  return `$${formattedAmount}`;
}
