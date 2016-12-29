import GithubInput from '../GithubInput/index.vue';
import GithubOutput from '../GithubOutput/index.vue';

export default {
	name: 'App',
	components: {
		'github-input': GithubInput,	// as per W3C, use dashes for component names
		'github-output': GithubOutput
	},
	data() {
		return {}
	}
}