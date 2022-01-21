export const transformDataForBarChart = (data, dataKey) => {
  return data
    .reduce((prev, item) => {
      return [
        ...prev,
        {
          name: item.name,
          amt: item[dataKey],
          pv: item[dataKey],
        },
      ];
    }, [])
    .sort((a, b) => b.amt - a.amt)
    .slice(0, 5);
};
