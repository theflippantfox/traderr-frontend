<script>
	import TotalTradesCard from '@components/dashbord/TotalTradesCard.svelte';
	import TotalWinsCard from '@components/dashbord/TotalWinsCard.svelte';
	import AccuracyCard from '@components/dashbord/AccuracyCard.svelte';
	import TotalPnLCard from '@components/dashbord/TotalPnLCard.svelte';
	import BalanceUtilizationCard from '@components/dashbord/BalanceUtilizationCard.svelte';
	import ActiveTradesCard from '@components/dashbord/ActiveTradesCard.svelte';

	import { getContext } from 'svelte';
	const user = getContext('currentUser');
</script>

<div class="content-wrapper">
	<div class="row">
		<div class="col-xl-3 col-sm-6 grid-margin stretch-card">
			<TotalTradesCard numOfTrades={user.numOfTrades} />
		</div>
		<div class="col-xl-3 col-sm-6 grid-margin stretch-card">
			<TotalWinsCard numOfWins={user.numOfWins} />
		</div>
		<div class="col-xl-3 col-sm-6 grid-margin stretch-card">
			<AccuracyCard accuracy={user.accuracy} />
		</div>
		<div class="col-xl-3 col-sm-6 grid-margin stretch-card">
			<TotalPnLCard totalPnl={user.totalPnL} />
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 grid-margin stretch-card">
			<BalanceUtilizationCard />
		</div>
		<div class="col-md-8 grid-margin stretch-card">
			<ActiveTradesCard />
		</div>
	</div>
</div>
