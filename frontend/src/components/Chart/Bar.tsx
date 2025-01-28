import { Bar } from 'react-chartjs-2';
import {
	BarElement,
	CategoryScale,
	Chart,
	ChartData,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';

Chart.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const BarChart = (data: ChartData<'bar'>) => {
    const option = {};

	return <Bar options={option} data={data} />;
};
