function createComment(comment) {
	const template = document.createElement("template");

	template.innerHTML = `
		<div class="flex justify-content-space-between align-items-start">
			<p class="post-content my-1"><span class="font-weight-700">${comment.email.split("@")[0]}</span> ${comment.body}</p></p>
			<button class="button-reset">
				<img src="../assets/images/activity.svg" alt="Like" height="12" class="pl-10 my-2"/>
			</button>
		</div>	
	`;

	return template.content;
}

export async function insertComments(parent, comments) {
	const container = parent.querySelector("[data-container='post-comments']");

	comments.forEach((comment) => {
		const component = createComment(comment);

		container.appendChild(component);
	});
}
