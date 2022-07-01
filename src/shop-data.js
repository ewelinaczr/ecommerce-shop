const SHOP_DATA = [
	{
		title: "Body",
		items: [
			{
				id: 1,
				name: "Orange Shower Gel",
				imageUrl:
					"https://images.unsplash.com/photo-1615396899839-c99c121888b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 25,
				bestseller: true,
				discount: false,
			},
			{
				id: 2,
				name: "Light Gel",
				imageUrl:
					"https://images.unsplash.com/photo-1616003234644-c8743560953e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 18,
				bestseller: false,
				discount: false,
			},
			{
				id: 3,
				name: "Berries Body Lotion",
				imageUrl:
					"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 35,
				bestseller: false,
				discount: false,
			},
			{
				id: 4,
				name: "Summertime Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1615396517306-dc7d0f229351?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 25,
				bestseller: false,
				discount: false,
			},
			{
				id: 5,
				name: "Rose Lotion",
				imageUrl:
					"https://images.unsplash.com/photo-1583899548980-8c1168d8e4a4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
				price: 18,
				bestseller: true,
				discount: true,
			},
			{
				id: 6,
				name: "Green Vegie Relax",
				imageUrl:
					"https://images.unsplash.com/photo-1643941368759-2a3a788a570c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415",
				price: 14,
				bestseller: false,
				discount: false,
			},
			{
				id: 7,
				name: "Hand Coconut Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1648729736333-ac72d773f053?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580",
				price: 18,
				bestseller: true,
				discount: false,
			},
			{
				id: 8,
				name: "Six Oils Set",
				imageUrl:
					"https://images.unsplash.com/photo-1594140640213-e12a74e0d414?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
				price: 14,
				bestseller: false,
				discount: false,
			},
			{
				id: 9,
				name: "Body Care Duet",
				imageUrl:
					"https://images.unsplash.com/photo-1630872090564-4bd50c0101d7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 16,
				bestseller: false,
				discount: true,
			},
		],
	},
	{
		title: "Face",
		items: [
			{
				id: 10,
				name: "Face Oil",
				imageUrl:
					"https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
				price: 22,
				bestseller: true,
				discount: true,
			},
			{
				id: 11,
				name: "Almond Face Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1599305090598-fe179d501227?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
				price: 28,
				bestseller: false,
				discount: false,
			},
			{
				id: 12,
				name: "Algue Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1552046122-03184de85e08?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 11,
				bestseller: false,
				discount: true,
			},
			{
				id: 13,
				name: "Orange Fruit Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
				price: 16,
				bestseller: false,
				discount: false,
			},
			{
				id: 14,
				name: "Light Day Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1617545564544-cda2bf28f9ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 16,
				bestseller: false,
				discount: false,
			},
			{
				id: 15,
				name: "Day Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1616002108138-5b97626fe67b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 160,
				bestseller: true,
				discount: false,
			},
			{
				id: 16,
				name: "Jasmine Summer Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1559747425-1644c651a403?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 19,
				bestseller: false,
				discount: false,
			},
			{
				id: 17,
				name: "Daily Mist",
				imageUrl:
					"https://images.unsplash.com/photo-1581839680158-103b461d8886?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758",
				price: 20,
				bestseller: true,
				discount: true,
			},
		],
	},
	{
		title: "Hair",
		items: [
			{
				id: 18,
				name: "Shampoo Set",
				imageUrl:
					"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
				price: 12,
				bestseller: false,
				discount: false,
			},
			{
				id: 19,
				name: "Conditioner No2",
				imageUrl:
					"https://images.unsplash.com/photo-1586179407793-6d997eca637e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 19,
				bestseller: true,
				discount: true,
			},
			{
				id: 20,
				name: "Light Foam Gel",
				imageUrl:
					"https://images.unsplash.com/photo-1616003178889-efd4d94acb83?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 19,
				bestseller: true,
				discount: false,
			},
			{
				id: 21,
				name: "Night Mask",
				imageUrl:
					"https://images.unsplash.com/photo-1643379850274-77d2e3703ef9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406",
				price: 16,
				bestseller: false,
				discount: false,
			},
			{
				id: 22,
				name: "Fruit Fusion",
				imageUrl:
					"https://images.unsplash.com/photo-1615395658279-e11e87fb6cd7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 15,
				bestseller: true,
				discount: false,
			},
		],
	},
	{
		title: "Makeup",
		items: [
			{
				id: 23,
				name: "Rose Lipstick",
				imageUrl:
					"https://images.unsplash.com/photo-1592150311591-d668da8095f0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 25,
				bestseller: false,
				discount: true,
			},
			{
				id: 24,
				name: "Brushers Set",
				imageUrl:
					"https://images.unsplash.com/photo-1535415493710-bdf0b2dc725e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
				price: 20,
				bestseller: false,
				discount: false,
			},
			{
				id: 25,
				name: "Base Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1604326265457-450ce7a898c9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
				price: 28,
				bestseller: true,
				discount: true,
			},
			{
				id: 26,
				name: "Brushes Set",
				imageUrl:
					"https://images.unsplash.com/photo-1587754256282-a11d04e3472d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
				price: 18,
				bestseller: false,
				discount: true,
			},
			{
				id: 27,
				name: "Lip Rose Balsam",
				imageUrl:
					"https://images.unsplash.com/photo-1614159102625-41ceafda13e9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580",
				price: 45,
				bestseller: false,
				discount: false,
			},
			{
				id: 28,
				name: "Base Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1582673103736-f72670a969a7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 16,
				bestseller: false,
				discount: true,
			},
			{
				id: 29,
				name: "Make Up Paradise",
				imageUrl:
					"https://images.unsplash.com/photo-1617220829376-08127ba965dc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871",
				price: 20,
				bestseller: false,
				discount: false,
			},
		],
	},
	{
		title: "Hygiene",
		items: [
			{
				id: 30,
				name: "Flower Gel",
				imageUrl:
					"https://images.unsplash.com/photo-1619280839060-7c3d9a88a6c7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 32,
				bestseller: true,
				discount: false,
			},
			{
				id: 31,
				name: "Daily Mist",
				imageUrl:
					"https://images.unsplash.com/photo-1570797852193-3aada66a8bc5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 20,
				bestseller: false,
				discount: false,
			},
			{
				id: 32,
				name: "Refreshing Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869",
				price: 25,
				bestseller: true,
				discount: true,
			},
			{
				id: 33,
				name: "Fruit Hand Cream",
				imageUrl:
					"https://images.unsplash.com/photo-1650532473798-cea26510c160?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
				price: 25,
				bestseller: true,
				discount: false,
			},
			{
				id: 34,
				name: "Cleaning Leafs",
				imageUrl:
					"https://images.unsplash.com/photo-1648735256967-ca9c4d2cbc80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
				price: 40,
				bestseller: true,
				discount: false,
			},
			{
				id: 35,
				name: "Hand Refresher",
				imageUrl:
					"https://images.unsplash.com/photo-1590708673128-889ae0341adb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
				price: 25,
				bestseller: false,
				discount: false,
			},
		],
	},
];

export default SHOP_DATA;
