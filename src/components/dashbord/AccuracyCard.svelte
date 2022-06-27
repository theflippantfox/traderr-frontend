<script>
	export let accuracy = 80;
</script>

<div class="card">
	<div class="card-body">
		<div class="row">
			<div class="col-9">
				<div class="d-flex align-items-center align-self-start">
					<h3 class="mb-0">{accuracy}%</h3>
					<p class="text-danger ml-2 mb-0 font-weight-medium">-1.875%</p>
				</div>
			</div>
			<div class="col-3">
				<div class="icon icon-box-danger">
					<span class="mdi mdi-arrow-bottom-left icon-item" />
				</div>
			</div>
		</div>
		<h6 class="text-muted font-weight-normal">Accuracy</h6>
	</div>
</div>
