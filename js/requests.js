export async function getPosts(start, limit) {
	const url = `${sessionStorage.url}/posts?_start=${start}&_limit=${limit}`;
	const data = await fetch(url).then((response) => response.json);

	return data;
}

export async function getPostComments(postId) {
	const url = `${sessionStorage.url}/comments?postId=${postId}`;
	const data = await fetch(url).then((response) => response.json);

	return data;
}
