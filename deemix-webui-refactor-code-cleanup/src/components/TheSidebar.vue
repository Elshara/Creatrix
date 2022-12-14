<template>
	<aside
		id="sidebar"
		:class="{ 'slim-sidebar w-12': isSlim }"
		:style="{ minWidth: isSlim ? null : '14rem' }"
		aria-label="sidebar"
		class="top-0 left-0 flex flex-col h-screen bg-panels-bg text-foreground"
		role="navigation"
	>
		<div class="deemix-icon-container" v-html="deemixIcon" />
		<router-link
			v-for="link in links"
			:key="link.name"
			:aria-label="link.ariaLabel"
			:class="{ 'bg-background-main': activeTablink === link.name }"
			:to="{ name: link.routerName }"
			class="relative flex items-center h-16 no-underline group main_tablinks hover:bg-background-main text-foreground"
			tag="a"
			@click.native="activeTablink = link.name"
		>
			<i
				:class="{ 'text-primary': activeTablink === link.name }"
				class="p-2 text-3xl material-icons side_icon group-hover:text-primary"
			>
				{{ link.icon }}
			</i>
			<span
				:class="{ hidden: isSlim }"
				class="ml-5 overflow-hidden capitalize whitespace-no-wrap main-tablinks-text"
				style="letter-spacing: 1.3px"
			>
				{{ $t(link.label) }}
			</span>
			<span
				v-if="link.name === 'about' && updateAvailable"
				id="update-notification"
				class="absolute w-3 h-3 bg-red-600 rounded-full"
			></span>
		</router-link>

		<span
			id="theme_selector"
			:class="{ 'inline-grid gap-2': isSlim }"
			aria-label="theme selector"
			class="flex h-12 mt-5"
			role="link"
		>
			<i class="p-2 text-3xl transition-all duration-500 cursor-default material-icons side_icon side_icon--theme">
				brush
			</i>
			<div
				id="theme_togglers"
				:class="{ 'inline-grid gap-2': isSlim }"
				class="relative flex items-center w-full justify-evenly"
			>
				<div
					v-for="theme of THEMES"
					:key="theme"
					:class="[{ 'theme_toggler--active': currentTheme === theme }, `theme_toggler--${theme}`]"
					class="w-6 h-6 border rounded-full cursor-pointer theme_toggler border-grayscale-500 gap"
					@click="currentTheme = theme"
				/>
			</div>
		</span>
	</aside>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from '@vue/composition-api'

import { links } from '@/data/sidebar'
import { useTheme } from '@/use/theme'

import deemixIcon from '@/assets/deemix-icon.svg'

export default defineComponent({
	setup(_, ctx) {
		const state = reactive({
			activeTablink: 'home',
			links
		})
		const { THEMES, currentTheme } = useTheme()

		/* === Add update notification near info === */
		const updateAvailable = computed(() => ctx.root.$store.state.appInfo.updateAvailable)

		ctx.root.$router.afterEach(to => {
			const linkInSidebar = state.links.find(link => link.routerName === to.name)

			if (!linkInSidebar) return

			state.activeTablink = linkInSidebar.name
		})

		return {
			...toRefs(state),
			updateAvailable,
			THEMES,
			currentTheme,
			isSlim: computed(() => ctx.root.$store.getters.getSlimSidebar),
			deemixIcon
		}
	}
})
</script>

<style lang="scss" scoped>
.deemix-icon-container {
	display: grid;
	place-content: center;

	.slim-sidebar & {
		margin: 0.5rem 0;

		&::v-deep svg {
			height: 30px;
		}
	}

	&::v-deep svg {
		height: 75px;
	}
}

#update-notification {
	top: 12px;
	left: 30px;
}

.theme_toggler {
	transition: border 200ms ease-in-out;

	&--active {
		border-width: 3px;
	}

	&--light {
		background-color: #fff;
	}

	&--dark {
		background-color: hsl(0, 0%, 8%);
	}

	&--purple {
		background: hsl(261, 85%, 37%);
	}
}
</style>
