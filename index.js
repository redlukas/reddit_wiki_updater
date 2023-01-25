const core = require('@actions/core');
const github = require('@actions/github');
const snoowrap = require('snoowrap');
const fs = require("fs");


try {
    const wrapper = new snoowrap({
        userAgent: 'github action',
        clientId: core.getInput("reddit_client_id"),
        clientSecret: core.getInput("reddit_client_secret"),
        username: core.getInput("reddit_user_name"),
        password: core.getInput("reddit_user_password")
    });

    const subName = core.getInput('sub_name');

    const dir = fs.readdirSync("./")
    console.log("dir is",dir);

    const myToken = await core.getIDToken();
    console.log("myToken is", myToken);

    const octokit = github.getOctokit(myToken)

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}