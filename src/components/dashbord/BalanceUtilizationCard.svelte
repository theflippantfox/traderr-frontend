<script lang="ts">
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import { Chart, registerables } from 'chart.js/dist/chart.esm';
	import { createChart } from '@assets/ts/chart';
	Chart.register(...registerables);

	const data = {
		labels: ['Spot', 'Margin', 'Futures', 'Stacking', 'Stable Coins'],
		datasets: [
			{
				data: [1, 2, 3, 4, 5],
				borderColor: ['#5E50F9', '#f2a654', '#E91E63', '#46c35f', '#f96868'],
				backgroundColor: ['#5E50F9', '#f2a654', '#E91E63', '#46c35f', '#f96868'],
				borderWidth: 1
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		color: '#fff',
		strokeWidth: 12,
		easing: 'easeInOut'
	};
	const type = 'doughnut';

	const plugins = [];
	let chart = null;
	let chartRef;

	onMount(() => {
		chart = createChart(data, options, type, chartRef);
	});

	afterUpdate(() => {
		if (!chart) return;
		chart.data = data;
		chart.type = type;
		chart.options = options;
		chart.plugins = plugins;
		chart.update();
	});

	onDestroy(() => {
		if (chart) chart.destroy();
		chart = null;
	});
</script>

<div class="card">
	<div class="card-body">
		<h4 class="card-title">Balance Allocation</h4>
		<div class="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
			<canvas bind:this={chartRef} />
		</div>
	</div>
</div>
