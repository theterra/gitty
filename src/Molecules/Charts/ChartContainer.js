import StatContainer from "Atoms/StatContainer";

const ChartContainer = ({ component: Component, data, title, ...other }) => {
  return (
    <StatContainer title={title}>
      <Component data={data} {...other} />
    </StatContainer>
  );
};

export default ChartContainer;
