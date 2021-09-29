export const calculate = (p: any[], c: string) => {
  let newP: any[] | undefined;
  const cs = ['NOK', 'EUR', 'USD'];

  if (c === cs[0]) {
    newP = p.map((x) => (x * 0.98).toFixed(2));
  }
  if (c === cs[1]) {
    newP = p.map((x) => (x * 0.1).toFixed(2));
  }
  if (c === cs[2]) {
    newP = p.map((x) => (x * 0.2).toFixed(2));
  }

  return newP?.map((x) => {
    if (c === cs[0]) {
      return x.toString() + ' NOK';
    }
    if (c === cs[1]) {
      return x.toString() + ' EUR';
    }
    if (c === cs[2]) {
      return x.toString() + ' USD';
    }

    return x;
  });
};
