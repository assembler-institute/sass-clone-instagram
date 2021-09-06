function createPost(post, user) {
	const template = document.createElement("template");

	template.innerHTML = `
		<article class="post">
			<header class="post-header">
				<img class="post-user-icon" src="https://i.pravatar.cc/300?img=${user.id}" alt="User user-thumbnail" />
				<div>
					<span class="block my-2 font-weight-700">${user.username}</span>
					<span class="block my-2">Foo Lon</span>
				</div>
			</header>
			<img class="post-img" src="https://picsum.photos/id/${post.id}/1000/1200" />
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
				<span class="block my-2 font-weight-700">0 likes</span>
				<p class="post-content my-2"><span class="font-weight-700">${user.username}</span>${post.body}</p>
				<span class="block my-2 text-color-gray-03">1 week ago</span>
				<button class="bg-color-transparent text-color-gray-03 font-weight-700">See comments</button>
				<div class="post-comments is-hidden" data-container="post-comments">
				</div>
			</section>
		</article>
	`;

	return template.content;
}

function createComment(comment) {
	const template = document.createElement("template");

	template.innerHTML = `<p class=""><span class="font-weight-700">${comment.email.split("@")[0]}</span>${comment.body}</p></p>`;

	return template.content;
}

function insertPosts(start, total) {
	const container = document.querySelector("#post-gallery");
	const posts = getPosts(start, limit);

	posts.forEach((post) => {
		const user = getUser(post.userId);
		const component = createPost(post, user);

		insertComments(component, postId);

		container.insertAdjacentElement("beforeend", component);
	});
}

function insertComments(parent, postId) {
	const container = parent.querySelector("[data-container='post-comments']");
	const comments = getPostComments(postId);

	comments.forEach((comment) => {
		const component = createComment(comment);
		container.insertAdjacentElement("beforeend", component);
	});
}
