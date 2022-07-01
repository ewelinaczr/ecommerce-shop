import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
	{
		id: 1,
		title: "body",
		imageUrl:
			"https://images.unsplash.com/photo-1541980162-4d2fd81f420d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		route: "shop/body",
	},
	{
		id: 2,
		title: "face",
		imageUrl:
			"https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386",
		route: "shop/face",
	},
	{
		id: 3,
		title: "hair",
		imageUrl:
			"https://images.unsplash.com/photo-1525671920395-711bb576f1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		route: "shop/hair",
	},
	{
		id: 4,
		title: "makeup",
		imageUrl:
			"https://images.unsplash.com/photo-1493321384838-70c5a85ba487?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474",
		route: "shop/makeup",
	},
	{
		id: 5,
		title: "hygiene",
		imageUrl:
			"https://images.unsplash.com/photo-1593309403363-b79957b1e40d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
		route: "shop/hygine",
	},
];

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
