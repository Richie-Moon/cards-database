import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-32",
	localId: 32,

	// Card informations
	name: {
		en: "Nidoqueen",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/32/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Boyfriends",
		},
		text: {
			en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card