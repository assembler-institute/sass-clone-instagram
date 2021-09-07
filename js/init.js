import { insertPosts } from "./components/post.js";
import { insertUserStoryThumbnails } from "./components/userStoryThumbnail.js";

const ss = sessionStorage;

document.addEventListener("DOMContentLoaded", async function () {
	ss.start = 0;
	ss.limit = 12;
	ss.url = "https://jsonplaceholder.typicode.com";

	await insertUserStoryThumbnails();
	await insertPosts(parseInt(ss.start), parseInt(ss.limit));
});
