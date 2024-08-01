import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import "./diagrammPise.scss";
import { ITransitions } from "../../interface/interface";

ChartJS.register(Tooltip, Legend, ArcElement);

export default function DiagrammPie(props: { transition: ITransitions[] }) {
  const options = {};

  const pieChartData = {
    labels: [] as string[],
    datasets: [
      {
        label: "Time Spent",
        data: [] as number[],
        backgroundColor: [
          "#522338",
          "#252338",
          "#722338",
          "#622338",
          "#742338",
        ],
        hoverOffset: 4,
      },
    ],
  };

  for (let i = 0; i < props.transition.length; i++) {
    pieChartData.labels.push(props.transition[i].category);
    pieChartData.datasets[0].data.push(props.transition[i].money);
  }

  return (
    <div className="diagramm">
      <Doughnut options={options} data={pieChartData} />
    </div>
  );
}
