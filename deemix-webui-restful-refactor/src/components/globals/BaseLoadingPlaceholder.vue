<template functional>
	<div
		class="flex justify-center items-center flex-col flex-1 h-full"
		:class="props.additionalClasses"
		v-show="!props.hidden"
	>
		<span class="mb-5">{{ props.text || 'Loading...' }}</span>

		<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
// Source: https://loading.io/css/
.lds-ring {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #fff transparent transparent transparent;

		&:nth-child(1) {
			animation-delay: -0.45s;
		}

		&:nth-child(2) {
			animation-delay: -0.3s;
		}

		&:nth-child(3) {
			animation-delay: -0.15s;
		}
	}
}

@keyframes lds-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>

