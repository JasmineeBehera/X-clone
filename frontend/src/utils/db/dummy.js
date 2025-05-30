export const POSTS = [
	{
		_id: "1",
		text: "its me espresso 😍",
		img: "/posts/post2.jpeg",
		user: {
			username: "taetae",
			profileImg: "/avatar/boy1.png",
			fullName: "Kim Taehung",
		},
		comments: [
			{
				_id: "1",
				text: "Nice song",
				user: {
					username: "gojo",
					profileImg: "/avatar/girl1.png",
					fullName: "Gojo Satoru",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "Are u guys dating? ",
		user: {
			username: "shreesh",
			profileImg: "/avatar/boy2.png",
			fullName: "Shreesh Jog",
		},
		comments: [
			{
				_id: "1",
				text: "Nope",
				user: {
					username: "taylor",
					profileImg: "/avatar/girl2.png",
					fullName: "Taylor Swift",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: " This project nearly got me ded",
		img: "/posts/post3.jpeg",
		user: {
			username: "sabrina",
			profileImg: "/avatar/boy3.png",
			fullName: "Sabrina Carpenter",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "london rain windowpane you were saying slurs in a cafe and i still loved u ",
		img: "/posts/post1.jpeg",
		user: {
			username: "taylor",
			profileImg: "/avatar/boy3.png",
			fullName: "Taylor Swift",
		},
		comments: [
			{
				_id: "1",
				text: "fuckass lyrics",
				user: {
					username: "sabrina",
					profileImg: "/avatar/girl3.png",
					fullName: "Sabrina Carpenter",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "Kim Taehyung",
		username: "taetae",
		profileImg: "/avatar/boy2.png",
	},
	{
		_id: "2",
		fullName: "Sabrina Carpenter",
		username: "sabrina",
		profileImg: "/avatar/girl1.png",
	},
	{
		_id: "3",
		fullName: "Gojo Satoru",
		username: "gojo",
		profileImg: "/avatar/boy3.png",
	},
	{
		_id: "4",
		fullName: "Taylor Swift",
		username: "taylor",
		profileImg: "/avatar/girl2.png",
	},
];