import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { locales } from '@/lang/index'

Vue.use(VueI18n)

const storedLocale = localStorage.getItem('locale')
const DEFAULT_LANG = storedLocale || 'en'

document.querySelector('html').setAttribute('lang', DEFAULT_LANG)

const i18n = new VueI18n({
	locale: DEFAULT_LANG,
	fallbackLocale: 'en',
	messages: locales,
	pluralizationRules: {
		/**
		 * @param {number}	choice 					A choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
		 * @param {number}	choicesLength		An overall amount of available choices
		 * @returns 				A final choice index to select plural word by
		 */
		ru: function(choice, choicesLength) {
			var n = Math.abs(choice) % 100
			var n1 = n % 10

			if (n > 10 && n < 20) {
				return 2
			}

			if (n1 > 1 && n1 < 5) {
				return 1
			}

			if (n1 == 1) {
				return 0
			}

			return 2
		}
	}
})

export default i18n
