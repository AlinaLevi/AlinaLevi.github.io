Development & Deployment:
Source is the default and live branch

1. Make sure you are running on the latest version of source! (Editing Custom Domain field in github will create a commit to source, so make sure you have it locally before starting work. Otherwise see Note 3.)
2. Add your code changes
3. run npm run predeploy - this will generate a new docs folder with the new build. (/docs must be named docs because gh-pages serves the build out of either root or /docs. November 2023.)
4. Add, commit and push all files.
5. Once commit is in github, go to Settings > Pages and populate the Custom Domain field with https://www.victorcojocaru.com. Note: at this stage also verify that the Branch setting is still configured to source/docs; Note 2: Confirm that Enforce HTTPS is turned ON otherwise google domains will fail to point to git. Note 3: if you run into source branch divergent issues you can always rebase by using the git rebase origin/source command.