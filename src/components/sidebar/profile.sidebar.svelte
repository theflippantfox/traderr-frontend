<script lang="ts">
	export let user;

	$: isDropdownActive = false;
	const toggleDropdown = () => {
		isDropdownActive = !isDropdownActive;
		console.log(isDropdownActive);
	};

	const dropdownActiveStyle = `position: absolute;transform: translate3d(52px, 113px, 0px);top: 0px;left: 0px;will-change: transform;`;
</script>

<li class="nav-item profile">
	<div class="profile-desc">
		<div class="profile-pic">
			<div class="count-indicator">
				<img class="img-xs rounded-circle " src={user.profilePic} alt="" />
				<span class="count bg-success" />
			</div>
			<div class="profile-name">
				<h5 class="mb-0 font-weight-normal">{user.fullName}</h5>
				<span>{`@${user.username}`}</span>
			</div>
		</div>
		<a
			href="#"
			id="profile-dropdown"
			data-bs-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			on:click={() => toggleDropdown()}><i class="mdi mdi-dots-vertical" /></a
		>
		<div
			class={isDropdownActive
				? 'dropdown-menu sidebar-dropdown dropdown-menu-right preview-list show'
				: 'dropdown-menu dropdown-menu-right sidebar-dropdown preview-list'}
			aria-labelledby="profile-dropdown"
			x-placemant={isDropdownActive ? 'bottom-end' : null}
			style={isDropdownActive ? dropdownActiveStyle : null}
			on:click={() => toggleDropdown()}
		>
			<a href="#" class="dropdown-item preview-item">
				<div class="preview-thumbnail">
					<div class="preview-icon bg-dark rounded-circle">
						<i class="mdi mdi-settings text-primary" />
					</div>
				</div>
				<div class="preview-item-content">
					<p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
				</div>
			</a>
			<div class="dropdown-divider" />
			<a href="#" class="dropdown-item preview-item">
				<div class="preview-thumbnail">
					<div class="preview-icon bg-dark rounded-circle">
						<i class="mdi mdi-onepassword  text-info" />
					</div>
				</div>
				<div class="preview-item-content">
					<p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
				</div>
			</a>
			<div class="dropdown-divider" />
			<a href="#" class="dropdown-item preview-item">
				<div class="preview-thumbnail">
					<div class="preview-icon bg-dark rounded-circle">
						<i class="mdi mdi-calendar-today text-success" />
					</div>
				</div>
				<div class="preview-item-content">
					<p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
				</div>
			</a>
		</div>
	</div>
</li>
