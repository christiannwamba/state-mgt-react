import axios from "axios";
import React, { useEffect, useState } from "react";

type user = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

function DataFetching() {
	const [users, setUsers] = useState<user[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	async function getUsers() {
		setLoading(true);
		const res = await axios.get<user[]>("https://jsonplaceholder.typicode.com/users");
		setUsers(res.data);
		setLoading(false);
	}

	useEffect(() => {
		getUsers();
	}, []);

	return <div>{loading ? <h1>loading</h1> : users.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
}

export default DataFetching;
