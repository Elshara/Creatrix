<template>
	<div class="relative cover-container group">
		<img
			aria-hidden="true"
			class="block w-full opacity-100 coverart"
			:class="{ rounded: isRounded, 'rounded-full': isCircle }"
			:src="cover"
		/>

		<button
			role="button"
			aria-label="download"
			:data-link="link"
			class="absolute p-0 text-center bg-black border-0 rounded-full opacity-0 download_overlay hover:bg-primary"
			tabindex="0"
			v-on="$listeners"
		>
			<i class="text-white cursor-pointer material-icons" :title="$t('globals.download_hint')">get_app</i>
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		cover: {
			type: String,
			required: true
		},
		isRounded: {
			type: Boolean,
			required: false
		},
		isCircle: {
			type: Boolean,
			required: false
		},
		link: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.cover-container {
	width: 156px;
	height: 156px;
	margin-bottom: 10px;

	.coverart {
		backface-visibility: hidden;
		transition: 0.5s ease;
		height: auto;
	}

	.download_overlay {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.5s ease;
		opacity: 0;
		min-width: 2rem;
		height: 2.75rem;
		text-align: center;

		i {
			padding: 0.625rem;
		}

		&:focus {
			opacity: 1;
		}
	}

	&:hover {
		.coverart {
			opacity: 0.75;
		}

		.download_overlay {
			opacity: 1;
			border: 0;
		}
	}
}
</style>
