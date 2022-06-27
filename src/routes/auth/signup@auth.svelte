<script lang="ts">
	import { goto } from '$app/navigation';

	import { client } from '@lib/apollo/client';
	import { SIGNUP } from '@lib/graphql/mutation';

	const data = {
		username: '',
		email: '',
		password: ''
	};

	const signup = async () => {
		if (!data.username || !data.email || !data.password) {
			return null;
		}

		const res = await client.mutate({
			mutation: SIGNUP,
			variables: { data }
		});

		if (res.data.signupUser) {
			goto('./login');
		}
	};
</script>

<div class="card-body px-5 py-5">
	<h3 class="card-title text-left mb-3">Register</h3>
	<form on:submit|preventDefault={() => signup()}>
		<div class="form-group">
			<label for="username">Username</label>
			<input type="text" class="form-control p_input" bind:value={data.username} />
		</div>
		<div class="form-group">
			<label for="eamil">Email</label>
			<input type="email" class="form-control p_input" bind:value={data.email} />
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" class="form-control p_input" bind:value={data.password} />
		</div>
		<div class="form-group d-flex align-items-center justify-content-between">
			<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input" /> Remember me
				</label>
			</div>
			<a href="#" class="forgot-pass">Forgot password</a>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary btn-block enter-btn">Sign Up</button>
		</div>
		<!-- <div class="d-flex">
			<button class="btn btn-facebook col mr-2">
				<i class="mdi mdi-facebook" /> Facebook
			</button>
			<button class="btn btn-google col">
				<i class="mdi mdi-google-plus" /> Google plus
			</button>
		</div> -->
		<p class="sign-up text-center">Already have an Account? <a href="#"> Sign In</a></p>
		<p class="terms">
			By creating an account you are accepting our <a href="#"> Terms & Conditions</a>
		</p>
	</form>
</div>
