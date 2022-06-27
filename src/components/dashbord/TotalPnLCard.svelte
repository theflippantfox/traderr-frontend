<script>
	export let totalPnl;
</script>

<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-9">
				<div class="d-flex align-items-center align-self-start">
					<h3 class="mb-0">{`$${totalPnl}`}</h3>
					<p class="text-success ml-2 mb-0 font-weight-medium">+1024%</p>
				</div>
			</div>
			<div class="col-3">
				<div class="icon icon-box-success ">
					<span class="mdi mdi-arrow-top-right icon-item" />
				</div>
			</div>
		</div>
		<h6 class="text-muted font-weight-normal">Total P&L</h6>
	</div>
</div>
