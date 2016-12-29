import Vue from 'vue';
import bus from '../messageBus.js';
import GithubUserData from '../GithubUserData/index.vue';

export default {
	name: 'GithubOutput',
	created() {
		bus.$on('new-username', this.onUsernameChange);
	},
	destroyed() {
		bus.$off('new-username', this.onUsernameChange);
	},
	components: {
		'github-user-data': GithubUserData
	},
	methods: {
		onUsernameChange(name) {
			this.currentUsername = name;
			this.fetchGithubData(name);
		},
		fetchGithubData(name) {
			// don't request if we got the data already
			if (this.githubData.hasOwnProperty(name)) return;

			const url = `https://api.github.com/users/${name}`;
			fetch(url)
				.then(r => r.json())
				.then(data => {
					Vue.set(this.githubData, name, data)
				})
		}
	},
	data() {
		return {
			currentUsername: null,
			githubData: {
				//i.e. jpedroribeiro: {...}
			}
		}
	}
}