import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-88",
	localId: 88,

	// Card informations
	name: {
		en: "Psyduck",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dizziness",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Psyduck but not used to pay for this attack. You can't add more than 20 damage in this way.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card