import { transformDataForBarChart } from "Utils/userDetailsUtils";

test("Should transform the given data into bar chart data sturcture", () => {
  const data = [
    {
      name: "Repo 1",
      size: 1,
    },
    {
      name: "Repo 3",
      size: 2,
    },
    {
      name: "Repo 5",
      size: 4,
    },
  ];
  const result = transformDataForBarChart(data, "size");
  expect(result[0]).toEqual({
    name: "Repo 5",
    amt: 4,
    pv: 4,
  });
});
