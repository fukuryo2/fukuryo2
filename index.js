const octokit = new Octokit({
  auth: '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'
});

async function iii() {
	await octokit.request('GET /repos/hukuryo/hukuryo/pulls/12/requested_reviewers', {
    owner: 'hukuryo',
    repo: 'hukuryo',
    pull_number: '12',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
 }
 
 iii();