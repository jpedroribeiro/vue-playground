import bus from '../messageBus.js';

export default {
	name: 'GithubInput',
	methods: {
		onSubmit(event) {
			if (this.username && this.username !== '') {
				bus.$emit('new-username', this.username);
			}
		}
	},
	data() {
		return {
			username: ''
		}
	}
}