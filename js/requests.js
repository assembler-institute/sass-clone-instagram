export async function getPosts(start, limit, embedComments) {
	let url = `${sessionStorage.url}/posts?_start=${start}&_limit=${limit}`;

	if (embedComments) url += `&_embed=comments`;

	const data = await fetch(url).then((response) => response.json());

	return data;
}

export async function getPostComments(postId, start, limit) {
	const url = `${sessionStorage.url}/comments?postId=${postId}`;
	if (start !== undefined) url.concat(`&_start=${start}`);
	if (limit !== undefined) url.concat(`&_limit=${limit}`);

	const data = await fetch(url).then((response) => response.json());

	return data;
}

export async function getUsers() {
	const url = `${sessionStorage.url}/users`;
	const data = await fetch(url).then((response) => response.json());

	return data;
}

export async function getUser(userId) {
	const url = `${sessionStorage.url}/users/${userId}`;
	const data = await fetch(url).then((response) => response.json());

	return data;
}
