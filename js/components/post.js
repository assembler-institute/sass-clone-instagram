function createPost(post, user) {
	const template = document.createElement("template");

	template.innerHTML = `
		<article class="post">
			<header class="post-header">
				<img class="post-user-icon" src="https://i.pravatar.cc/300?img=${user.id}" alt="User Avatar" />
				<div>
					<span class="block my-2 font-weight-700">${user.username}</span>
					<span class="block my-2">Foo Lon</span>
				</div>
			</header>
			<img class="post-img" src="https://picsum.photos/id/${post.id}/1000/1200" />
			<section class="post-body">
				<div class="post-options">
					<button class="button-icon">
						<img src="../assets/images/activity.svg" alt="Like" />
					</button>
					<button class="button-icon">
						<img src="../assets/images/comment.svg" alt="Comment" />
					</button>
					<button class="button-icon">
						<img src="../assets/images/direct.svg" alt="Share" />
					</button>
				</div>
				<span class="block my-2 font-weight-700">0 likes</span>
				<p class="post-content my-2"><span class="font-weight-700">${post.body}</p>
				<span class="block my-2 text-color-gray-03">1 week ago</span>
				<div class="post-comments is-hidden" data-container="post-comments">
				</div>
			</section>
		</article>
	`;

	return template.content;
}

function createComment(comment) {
	const template = document.createElement("template");

	template.innerHTML = ``;

	return template.content;
}

function insertPosts(start, total) {
	const container = document.querySelector("#post-gallery");
	const posts = getPosts(start, total);

	posts.forEach((post) => {
		const user = getUser(post.userId);
		const component = createPost(post, user);

		insertComments(component.postId);

		container.insertAdjacentElement("beforeend", component);
	});
}

function insertComments(component, postId) {
	const container = document.querySelector("[data-container='post-comments']");
	const comments = getCommentsByPost(postId);

	comments.forEach((comment) => {
		const component = createComment(comment);
		container.insertAdjacentElement("beforeend", component);
	});
}
