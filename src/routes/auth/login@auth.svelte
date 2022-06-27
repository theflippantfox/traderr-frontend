<script lang="ts">
	import { goto } from '$app/navigation';

	import { client } from '@lib/apollo/client';
	import { LOGIN } from '@lib/graphql/mutation';

	const data = {
		username: '',
		password: ''
	};

	let rememberme = false;

	const login = async () => {
		if (data.username === '' || data.password === '') {
			return null;
		}

		const res = await client.mutate({
			mutation: LOGIN,
			variables: { data }
		});

		if (res.data) {
			localStorage.setItem('token', res.data.loginUser);
			goto('../user/dashbord');
		}
	};
</script>

<div class="card-body px-5 py-5">
	<h3 class="card-title text-left mb-3">Login</h3>
	<form on:submit|preventDefault={() => login()}>
		<div class="form-group">
			<label for="username">Username or email *</label>
			<input type="text" class="form-control p_input" bind:value={data.username} />
		</div>
		<div class="form-group">
			<label for="password">Password *</label>
			<input type="password" class="form-control p_input" bind:value={data.password} />
		</div>
		<div class="form-group d-flex align-items-center justify-content-between">
			<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input" bind:value={rememberme} /> Remember me
				</label>
			</div>
			<a href="#" class="forgot-pass">Forgot password</a>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary btn-block enter-btn">Login</button>
		</div>
		<!-- <div class="d-flex">
			<button class="btn btn-facebook mr-2 col">
				<i class="mdi mdi-facebook" /> Facebook
			</button>
			<button class="btn btn-google col">
				<i class="mdi mdi-google-plus" /> Google plus
			</button>
		</div> -->
		<p class="sign-up">Don't have an Account? <a href="./signup"> Sign Up</a></p>
	</form>
</div>
