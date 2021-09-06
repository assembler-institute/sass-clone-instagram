import { insertComments } from "./comment.js";
import { getPosts, getUser } from "../requests.js";

function createPost(post, user) {
	const template = document.createElement("template");

	template.innerHTML = `
		<article class="post">
			<header class="post-header">
				<div class="flex gap-3 align-items-center">
					<div class="user-thumbnail user-thumbnail--sm user-thumbnail--with-story">
						<img src="https://i.pravatar.cc/300?img=1" alt="user-1" />
					</div>
					<div>
						<span class="block my-2 font-weight-700">${user.username}</span>
						<span class="block my-2">${post.title}</span>
					</div>
				</div>
				<button class="button-reset">
					<img src="../assets/images/options.svg" alt="Options" />
				</button>
			</header>
			<img class="post-img" src="https://picsum.photos/id/${post.id + 50}/1000/1200" />
			<section class="post-body">
				<div class="post-options">
					<button class="button-reset">
						<img src="../assets/images/activity.svg" alt="Like" />
					</button>
					<button class="button-reset">
						<img src="../assets/images/comment.svg" alt="Comment" />
					</button>
					<button class="button-reset">
						<img src="../assets/images/direct.svg" alt="Share" />
					</button>
				</div>
				<span class="block my-2 font-weight-700">0 Likes</span>
				<p class="post-content my-2"><span class="font-weight-700">${user.username}</span> ${post.body}</p>
				<span class="block my-2 text-color-gray-03">1 week ago</span>
				<div class="post-comments" data-container="post-comments">
				</div>
			</section>
			<footer class="post-footer">
				<div class="flex gap-3">
					<button class="button-reset">
						<img src="../assets/images/emoji.svg" alt="Add Emoji" />
					</button>
					<input class="comment-input" placeholder="Add a comment..." />
				</div>
				<button class="button-reset font-weight-700 text-color-blue-01">Post</button>
			</footer>
		</article>
	`;

	return template.content;
}

export async function insertPosts(start, limit) {
	const container = document.querySelector("[data-container='post-gallery']");
	const posts = await getPosts(start, limit, true);

	posts.forEach(async (post) => {
		const user = await getUser(post.userId);
		const component = createPost(post, user);

		console.log(post.comments);

		insertComments(component, post.comments);

		container.appendChild(component);
	});
}
