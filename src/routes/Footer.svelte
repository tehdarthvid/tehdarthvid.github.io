<script>
	import { PUBLIC_GITHUB_SHA } from '$env/static/public';

	let strGitHash = PUBLIC_GITHUB_SHA;
	strGitHash = strGitHash.slice(0, 7);
</script>

<footer>
	<div id="build">
		&nbsp;
		<p>
			<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/"> source </a>
		</p>
		<p>
			<a href="https://github.com/tehdarthvid/tehdarthvid.github.io/commit/{PUBLIC_GITHUB_SHA}">
				build {strGitHash}
			</a>
		</p>
	</div>
</footer>

<style>
	#build {
		font-size: 0.38195em;
	}
</style>
