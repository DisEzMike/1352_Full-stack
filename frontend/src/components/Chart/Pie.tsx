import { Pie } from 'react-chartjs-2';
import {
	ArcElement,
	Chart,
	ChartData,
	Legend,
	Title,
	Tooltip,
} from 'chart.js';

Chart.register(
	Title,
	Tooltip,
	Legend,
	ArcElement
);

export const PieChart = (data: ChartData<'pie'>) => {
    const option = {};

	return <Pie options={option} data={data} />;
};
