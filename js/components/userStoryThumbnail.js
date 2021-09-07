import { getUsers } from "../requests.js";

function createUserStoryThumbnail(user) {
	const template = document.createElement("template");

	template.innerHTML = `
		<article class="flex flex-column align-items-center gap-2">
			<div class="user-thumbnail user-thumbnail--bg user-thumbnail--with-story">
				<img src="https://i.pravatar.cc/300?img=${user.id}" alt="Watch ${user.name} stories" />
			</div>
			<span class="font-size-300 font-weight-300 text-align-center">${user.name}</span>
		</article>
	`;

	return template.content;
}

export async function insertUserStoryThumbnails() {
	const container = document.querySelector("[data-container='user-gallery']");
	const users = await getUsers();

	users.forEach((user) => {
		const component = createUserStoryThumbnail(user);

		container.appendChild(component);
	});
}
