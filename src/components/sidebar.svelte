<script lang="ts">
	import ProfileSidebar from '@components/sidebar/profile.sidebar.svelte';
	import logo from '@assets/logo.png';
	export let user;
</script>

<nav class="sidebar sidebar-offcanvas" id="sidebar">
	<div
		class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top"
	>
		<a class="sidebar-brand brand-logo" href=""><img src={logo} alt="logo" /></a>
		<a class="sidebar-brand brand-logo-mini" href=""><img src={logo} alt="logo" /></a>
	</div>
	<ul class="nav">
		<ProfileSidebar {user} />
		<li class="nav-item nav-category">
			<span class="nav-link">Navigation</span>
		</li>
		<li class="nav-item menu-items">
			<a class="nav-link" href="./dashbord">
				<span class="menu-icon">
					<i class="mdi mdi-speedometer" />
				</span>
				<span class="menu-title">Dashboard</span>
			</a>
		</li>
		<li class="nav-item menu-items">
			<a href="./portfolio" class="nav-link">
				<!-- data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic"> -->
				<span class="menu-icon">
					<i class="mdi mdi-chart-pie" />
				</span>
				<span class="menu-title">Portfolio</span>
			</a>
		</li>
		<li class="nav-item menu-items">
			<a href="./journal" class="nav-link" data-toggle="collapse">
				<span class="menu-icon">
					<i class="mdi mdi-notebook" />
				</span>
				<span class="menu-title">Trade Journal</span>
			</a>
		</li>
	</ul>
</nav>
