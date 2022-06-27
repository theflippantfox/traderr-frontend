<script context="module" lang="ts">
	import { client } from '@lib/apollo/client';
	import { CURRENT_USER } from '@lib/graphql/queries';

	export const load = async () => {
		const { data } = await client.query({
			query: CURRENT_USER,
			fetchPolicy: 'network-only',
			errorPolicy: 'ignore'
		});

		return {
			props: {
				data
			}
		};
	};
</script>

<script>
	import Sidebar from '@components/sidebar.svelte';
	import Navbar from '@components/navbar.svelte';
	import '@assets/css/style.css';
	import { setContext } from 'svelte';

	export let data;
	if (data) {
		setContext('currentUser', data.currentUser);
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css"
	/>
</svelte:head>

{#if data}
	<div class="container-scroller">
		<Sidebar user={data.currentUser} />
		<div class="container-fluid page-body-wrapper">
			<Navbar user={data.currentUser} />
			<div class="main-panel">
				<slot user={data.currentUser} />
			</div>
		</div>
	</div>
{/if}
