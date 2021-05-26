import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Lancez une pièce. Si c’est face, cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item"
}

export default card