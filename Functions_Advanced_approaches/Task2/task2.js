// recursion  - when the function call itself in its body

const favorites = ['id-2', 'id-1'];
const tree = {
	id: 'id-1',
	name: 'Products',
	nodes: [
		{
			id: 'id-2',
			name: 'Food',
			nodes: [
				{
					id: 'id-4',
					name: 'Food',
					nodes: [],
				},
			],
		},
	],
};

export const markFavorites = (tree, favorites) => {
	const getFavorites = favorites.includes(tree.id);
	return {
		...tree,
		getFavorites,
		nodes: tree.nodes.map((childnode) => markFavorites(childnode, favorites)),
	};
};

const result = markFavorites(tree, favorites);
console.log(result);
