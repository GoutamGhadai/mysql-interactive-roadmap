window.gitData = {
    "name": "The Ultimate Git Roadmap",
    "children": [
        {
            "name": "Git Fundamentals",
            "children": [
                { "name": "What is Version Control?", "children": [{"name": "System for tracking changes in files over time."}, {"name": "Allows reverting to previous versions & collaboration."}] },
                { "name": "Types of VCS", "children": [{"name": "Centralized (CVCS) like SVN: Single central server, single point of failure."}, {"name": "Distributed (DVCS) like Git: Every developer has a full repository copy."}] },
                { "name": "What is Git?", "children": [{"name": "A free, open-source, fast, and powerful DVCS"}, {"name": "Created by Linus Torvalds in 2005 for Linux kernel development."}] },
                { "name": "Git's Philosophy", "children": [
                    {"name": "Snapshots, not Differences", "children": [{"name":"Git thinks of data as a stream of snapshots of your entire project."}]},
                    {"name": "Nearly Every Operation is Local", "children": [{"name":"Commit, branch, merge, view history - all are instant because they happen locally."}]},
                    {"name": "Git Has Integrity", "children": [{"name":"Everything is checksummed (SHA-1 hash) before it's stored."}]}
                ]},
                { "name": "The Three Git States", "children": [
                    {"name": "Working Directory", "children": [{"name":"Your local project files. Can contain untracked or modified files."}]},
                    {"name": "Staging Area (Index)", "children": [{"name":"A file that stores info about what will go into your next commit."}]},
                    {"name": "Repository (.git dir)", "children": [{"name":"The directory where Git stores the metadata and object database for your project."}]}
                ]}
            ]
        },
        {
            "name": "Setup & Configuration",
            "children": [
                { "name": "Installing Git", "children": [{"name": "Download from git-scm.com for Windows/macOS"}, {"name": "sudo apt install git (Debian/Ubuntu)"}, {"name": "brew install git (macOS)"}] },
                { "name": "First-Time Configuration", "children": [
                    {"name": "git config --global user.name \"Your Name\"", "children": [{"name": "Scenario: Sets the author name for every commit on your system."}]},
                    {"name": "git config --global user.email \"you@example.com\"", "children": [{"name": "Scenario: Sets the author email, tied to platforms like GitHub."}]},
                    {"name": "git config --global init.defaultBranch main", "children": [{"name": "Scenario: Avoids the outdated 'master' branch name for new repos."}]},
                    {"name": "git config --global core.editor \"code --wait\"", "children": [{"name": "Scenario: Use your favorite editor (VS Code here) for commit messages."}]},
                    {"name": "git config --global core.autocrlf input", "children": [{"name": "Scenario (Mac/Linux): Ensures Unix-style line endings are used."}]},
                    {"name": "git config --global core.autocrlf true", "children": [{"name": "Scenario (Windows): Converts line endings to be compatible with other systems."}]}
                ]},
                { "name": "Advanced Configuration", "children": [
                    {"name": "git config --edit --global", "children":[{"name":"Open the global .gitconfig file in your default editor."}]},
                    {"name": "Conditional Includes", "children":[{"name":"Scenario: Use different user names/emails for work and personal projects based on directory path."}]}
                ]},
                { "name": "Aliases", "children": [
                    {"name": "git config --global alias.co checkout", "children": [{"name":"Example: `git co my-branch`"}]},
                    {"name": "git config --global alias.br branch", "children": [{"name":"Example: `git br -d old-branch`"}]},
                    {"name": "git config --global alias.st status", "children": [{"name":"Example: `git st`"}]},
                    {"name": "git config --global alias.lg \"log --graph --oneline --decorate\"", "children": [{"name":"Example: `git lg` for a compact, graphical log."}]}
                ]},
                {"name": "Authentication: SSH vs HTTPS", "children": [
                    {"name": "HTTPS", "children": [{"name":"- Easier setup", "children":[{"name":"- Often requires username/password or token for each push/pull"}]}]},
                    {"name": "SSH", "children": [{"name":"- More secure & convenient after setup", "children":[{"name":"- Requires generating SSH keys (`ssh-keygen`) and adding public key to remote"}]}]}
                ]}
            ]
        },
        {
            "name": "Basic Repository Operations",
            "children": [
                { "name": "git init", "children": [{"name": "Scenario: Start version control in an existing project folder."}, {"name": "git init my-project", "children": [{"name":"Creates a new directory and initializes it."}] }] },
                { "name": "git clone", "children": [
                    {"name": "git clone <url>", "children": [{"name": "Scenario: Get a local copy of a project from GitHub/GitLab to start working on it."}]},
                    {"name": "git clone <url> <directory-name>", "children": [{"name": "Scenario: Clone a project into a folder with a different name."}]},
                    {"name": "git clone --depth 1 <url>", "children": [{"name": "Scenario: Quickly download a large repo when you only need the latest code, not its history."}]},
                    {"name": "git clone --branch <name> <url>", "children": [{"name": "Scenario: You only need to work on a specific feature branch, not the main one."}]}
                ]},
                { "name": "git status", "children": [
                    {"name": "git status", "children": [{"name": "Explanation: Your primary tool to see what's happening. Shows new, modified, and staged files."}]},
                    {"name": "git status -s (or --short)", "children": [{"name": "Explanation: A compact, one-line-per-file view. Great for a quick overview."}]},
                    {"name": "git status -v (or --verbose)", "children": [{"name": "Explanation: Shows the same as `-s` plus the actual changes (diff) that are not yet staged."}]}
                ]}
            ]
        },
        {
            "name": "Recording Changes (Staging & Committing)",
            "children": [
                { "name": "git add", "children": [
                    {"name": "git add <file>", "children": [{"name": "Scenario: You finished work on a specific file and want to include it in the next commit."}]},
                    {"name": "git add .", "children": [{"name": "Scenario: You've made several changes and want to stage all of them from the current directory down."}]},
                    {"name": "git add -u", "children": [{"name": "Scenario: You've modified and deleted some files, but created new ones you're not ready to track yet."}]},
                    {"name": "git add -A", "children": [{"name": "Scenario: Stage every single change in the entire repository."}]},
                    {"name": "git add -p", "children": [{"name": "Scenario: A single file contains multiple logical changes (e.g., a bug fix and a new feature). Stage only the bug fix parts."}]},
                    {"name": "git add -N", "children": [{"name": "Scenario: You created a new file, but it's empty. This tells Git to track it anyway."}]}
                ]},
                { "name": "Commit Message Best Practices", "children":[
                    {"name": "1. Separate subject from body with a blank line"},
                    {"name": "2. Limit the subject line to 50 characters"},
                    {"name": "3. Capitalize the subject line"},
                    {"name": "4. Do not end the subject line with a period"},
                    {"name": "5. Use the imperative mood in the subject line (e.g., 'Fix bug', not 'Fixed bug')"},
                    {"name": "6. Use the body to explain what and why vs. how"},
                    {"name": "7. Conventional Commits (feat:, fix:, chore:, etc.)"}
                ]},
                { "name": "git commit", "children": [
                    {"name": "git commit -m \"Message\"", "children": [{"name": "Scenario: For a small, simple change that doesn't need a detailed explanation."}]},
                    {"name": "git commit -a -m \"Msg\"", "children": [{"name": "Scenario: Quick commit when you know you want to include all changes to files Git already tracks."}]},
                    {"name": "git commit -v", "children": [{"name": "Scenario: When writing a detailed commit message, this shows the full diff in the editor for context."}]},
                    {"name": "git commit --amend", "children": [{"name": "Scenario: You just committed but forgot to add a file, or made a typo in the commit message."}]},
                    {"name": "git commit --allow-empty -m \"Msg\"", "children": [{"name": "Scenario: To trigger a build or CI/CD pipeline without making any code changes."}]}
                ]},
                { "name": "git rm", "children": [
                    {"name": "git rm <file>", "children": [{"name": "Scenario: You want to delete a file from your project completely."}]},
                    {"name": "git rm --cached <file>", "children": [{"name": "Scenario: You accidentally committed a config file with secrets and need to untrack it without deleting it locally."}]}
                ]},
                { "name": "git mv", "children": [{"name": "git mv <old-name> <new-name>", "children": [{"name": "Scenario: You want to rename a file. This is like running `mv`, `git rm`, and `git add` all in one."}]} ]},
                { "name": ".gitignore file", "children": [{"name": "Explanation: A text file that tells Git which files or folders to ignore in a project."}, {"name": "Examples: *.log, node_modules/, .env, build/"}] }
            ]
        },
        {
            "name": "Branching & Merging",
            "children": [
                { "name": "git branch", "children": [
                    {"name": "git branch", "children": [{"name": "Lists all local branches."}]},
                    {"name": "git branch -a", "children": [{"name": "Lists all branches (local and remote-tracking)."}]},
                    {"name": "git branch <branch-name>", "children": [{"name": "Scenario: Create a new branch for a feature, but stay on your current branch."}]},
                    {"name": "git branch -m <new-name>", "children": [{"name": "Scenario: Rename the current branch because of a typo or name change."}]},
                    {"name": "git branch -d <branch-name>", "children": [{"name": "Scenario: You have merged your feature branch and want to clean it up."}]},
                    {"name": "git branch -D <branch-name>", "children": [{"name": "Scenario: You started a feature, decided it was a bad idea, and want to delete the branch and all its commits."}]},
                    {"name": "git branch --merged", "children": [{"name": "Scenario: Safely identify which branches can be cleaned up."}]},
                     {"name": "git branch --no-merged", "children": [{"name": "Scenario: See what work is still in progress and not yet in the main branch."}]}
                ]},
                { "name": "Switching Branches", "children": [
                    {"name": "git switch <branch-name>", "children": [{"name": "Scenario: Modern, preferred way to switch to an existing branch."}]},
                    {"name": "git switch -c <new-branch>", "children": [{"name": "Scenario: Modern way to both create and immediately switch to a new branch."}]},
                    {"name": "git checkout <branch-name>", "children": [{"name": "Explanation: Older, multi-purpose command. `switch` is now recommended for changing branches."}]}
                ]},
                { "name": "git merge", "children": [
                    {"name": "git merge <branch-name>", "children": [{"name": "Scenario: Your feature is complete, and you want to integrate its changes into the main branch."}]},
                    {"name": "Fast-Forward Merge", "children":[{"name":"If the target branch hasn't diverged, Git just moves the pointer forward. No merge commit."}]},
                    {"name": "Recursive Merge (3-way)", "children":[{"name":"If branches have diverged, Git creates a new 'merge commit' to tie the histories together."}]},
                    {"name": "git merge --squash", "children": [{"name": "Scenario: Your feature branch has many messy 'WIP' commits. This combines them into one clean commit on the target branch."}]},
                    {"name": "git merge --no-ff", "children": [{"name": "Scenario: You want to preserve the history of a feature branch, even if a fast-forward is possible. Creates a merge commit."}]},
                    {"name": "git merge --abort", "children": [{"name": "Scenario: You get a complex merge conflict and decide to start over or rethink your approach."}]},
                    {"name": "Resolving Merge Conflicts", "children": [{"name": "1. Git marks files with `<<<<<`, `=====`, `>>>>>`"}, {"name":"2. Manually edit the files to keep the desired changes."}, {"name":"3. `git add` the resolved files."}, {"name":"4. `git commit` to finalize the merge."}]}
                ]}
            ]
        },
        {
            "name": "Inspecting History & Diffs",
            "children": [
                 { "name": "git log", "children": [
                    {"name": "git log", "children": [{"name": "Show the full commit history."}]},
                    {"name": "git log --oneline", "children": [{"name": "A compact, one-line view of each commit."}]},
                    {"name": "git log --graph --oneline --decorate", "children": [{"name": "My favorite alias! Shows a visual graph of branches and merges."}]},
                    {"name": "git log -p <file>", "children": [{"name": "Scenario: See the history and the exact changes made to a specific file."}]},
                     {"name": "git log --stat", "children": [{"name": "Scenario: Get a summary of which files were changed and how many lines were added/removed in each commit."}]},
                     {"name": "git log --author=\"Name\"", "children": [{"name": "Scenario: Find all commits made by a specific teammate."}]},
                     {"name": "git log --grep=\"keyword\"", "children": [{"name": "Scenario: Find a commit where you fixed a specific bug by searching for the ticket number in the message."}]},
                     {"name": "git log --since=\"2 weeks ago\"", "children": [{"name": "Scenario: Review all the work that has been done on a project recently."}]},
                     {"name": "git log -S\"function_name\"", "children": [{"name": "Scenario: Pinpoint exactly when a specific function was introduced or removed from the code."}]},
                     {"name": "git log <branch1>..<branch2>", "children": [{"name":"Scenario: See what commits are in `branch2` that are not in `branch1`."}]}
                ]},
                {
                    "name": "Advanced Revision Selection",
                    "children": [
                        {"name": "HEAD", "children": [{"name":"The currently checked-out commit or branch."}]},
                        {"name": "my-branch", "children": [{"name":"The latest commit on `my-branch`."}]},
                        {"name": "HEAD~3", "children": [{"name":"The 3rd great-grandparent of HEAD."}]},
                        {"name": "HEAD@{yesterday}", "children": [{"name":"Where HEAD was yesterday. (Uses reflog)"}]},
                        {"name": "main@{upstream}", "children": [{"name":"The last known state of the `main` branch on the remote."}]},
                        {"name": ":/<text>", "children": [{"name":"The most recent commit whose message contains `<text>`."}]}
                    ]
                },
                { "name": "git diff", "children": [
                    {"name": "git diff", "children": [{"name": "Scenario: Review your changes before staging them to make sure they are correct."}]},
                    {"name": "git diff --staged", "children": [{"name": "Scenario: Double-check the changes you're about to commit."}]},
                    {"name": "git diff --diff-filter=[A|D|M...]", "children":[{"name":"Scenario: Show me only the files that were deleted in this branch (`git diff main --diff-filter=D`)."}]},
                    {"name": "git diff <branch1>...<branch2>", "children": [{"name": "Scenario: See changes on `branch2` since it diverged from `branch1`."}]},
                    {"name": "git diff <commit1> <commit2>", "children": [{"name": "Scenario: See what changed between two specific points in history."}]}
                ]},
                 { "name": "git show", "children": [{"name": "git show <commit-hash>", "children": [{"name": "Scenario: Quickly inspect the message and all changes for a single commit."}]}] },
                 { "name": "git blame", "children": [{"name": "git blame <file>", "children": [{"name": "Scenario: Find out who wrote a specific line of code to ask them a question about it."}]}] }
            ]
        },
        {
            "name": "Remote Repositories",
            "children": [
                { "name": "git remote", "children": [
                    {"name": "git remote -v", "children": [{"name": "List your configured remotes (like 'origin')."}]},
                    {"name": "git remote add <name> <url>", "children": [{"name": "Scenario: Connect your local repo to a new empty repository on GitHub."}]},
                    {"name": "git remote set-url <name> <new-url>", "children": [{"name": "Scenario: Your project has moved from one hosting provider to another."}]}
                ]},
                { "name": "Understanding Refspecs", "children": [
                    {"name":"Explanation: The mapping from a remote ref to a local ref, used by `fetch` and `push`."},
                    {"name":"Syntax: `+<src>:<dst>`"},
                    {"name":"Example: `+refs/heads/*:refs/remotes/origin/*` (default fetch)"}
                ]},
                { "name": "git fetch", "children": [
                    {"name": "git fetch <remote>", "children": [{"name": "Scenario: You want to see what changes your team has made, but you're not ready to merge them into your work yet."}]},
                    {"name": "git fetch --all --prune", "children": [{"name": "Fetch from all remotes and clean up stale branches."}]}
                ]},
                { "name": "git pull", "children": [
                    {"name": "git pull", "children": [{"name": "Scenario: You are up-to-date with your work and want to get the latest changes from the remote and merge them in immediately."}]},
                    {"name": "What it does", "children": [{"name": "It's a shortcut for `git fetch` followed by `git merge FETCH_HEAD`."}]},
                    {"name": "git pull --rebase", "children": [{"name": "Scenario: You prefer a clean, linear history. This fetches remote changes and replays your local commits on top of them."}]}
                ]},
                { "name": "git push", "children": [
                    {"name": "git push -u <remote> <branch>", "children": [{"name": "Scenario: The first time you push a new branch, this sets up the tracking relationship."}]},
                    {"name": "git push --force-with-lease", "children": [{"name": "SAFER! Scenario: You rebased a shared branch, this pushes your changes but fails if someone else has pushed new work."}]},
                    {"name": "git push <remote> --delete <branch>", "children": [{"name": "Scenario: Your feature branch has been merged and you want to delete it from the remote repository."}]},
                    {"name": "git push --tags", "children": [{"name": "Scenario: You've tagged a new release and want to publish the tags for everyone."}]}
                ]}
            ]
        },
        {
            "name": "Undoing Changes",
            "children": [
                { "name": "git restore", "children": [
                    {"name": "When to use?", "children":[{"name":"To discard local, uncommitted changes. This is a safe operation."}]},
                    {"name": "git restore <file>", "children": [{"name": "Scenario: You made experimental changes to a file but decide you don't want them."}]},
                    {"name": "git restore --staged <file>", "children": [{"name": "Scenario: You used `git add <file>` but realized you don't want that file in the next commit."}]}
                ]},
                { "name": "git reset", "children": [
                     {"name": "When to use?", "children":[{"name":"To unstage files or remove commits on your LOCAL branch. Rewrites history."}]},
                    {"name": "git reset --soft HEAD~1", "children": [{"name": "Scenario: You want to re-do your last commit, keeping the changes staged to modify them."}]},
                    {"name": "git reset --mixed HEAD~1", "children": [{"name": "Scenario: You want to completely rethink your last commit. This removes the commit and unstages the changes."}]},
                    {"name": "git reset --hard HEAD~1", "children": [{"name": "DANGER! Scenario: You want to completely destroy your last commit and all the work in it."}]}
                ]},
                { "name": "git revert", "children": [
                    {"name": "When to use?", "children":[{"name":"To undo a commit that has already been pushed to a shared remote. The safest way."}]},
                    {"name": "git revert <commit-hash>", "children": [{"name": "Scenario: A commit that was pushed to `main` introduced a bug. This creates a NEW commit that does the exact opposite."}]}
                ]},
                { "name": "git clean", "children": [
                    {"name": "When to use?", "children":[{"name":"To remove untracked files from your working directory."}]},
                    {"name": "git clean -n -d", "children": [{"name": "Scenario: Dry-run to see which files and directories would be deleted."}]},
                    {"name": "git clean -f -d", "children": [{"name": "Scenario: Your build process generated lots of artifacts. This cleans them up."}]}
                ]}
            ]
        },
        {
            "name": "Advanced Topics",
            "children": [
                { "name": "git rebase", "children": [
                    {"name": "Golden Rule of Rebasing", "children": [{"name": "Never rebase commits that have been pushed to a shared branch!"}]},
                    {"name": "git rebase <base-branch>", "children": [{"name": "Scenario: Update your feature branch with the latest changes from `main` to create a clean, linear history."}]},
                    {"name": "git rebase -i HEAD~3", "children": [{"name": "Scenario: Clean up the last 3 commits on your local branch before sharing them."}]},
                    {"name": "git rebase --onto <new_base> <old_base>", "children":[{"name":"Scenario: Move a series of commits from one base to another, without bringing the old base's history."}]},
                    {"name":"git config --global rebase.autosquash true", "children":[{"name":"Scenario: Automatically arrange fixup!/squash! commits during an interactive rebase."}]}
                ]},
                { "name": "git stash", "children": [
                    {"name": "git stash", "children": [{"name": "Scenario: Urgent bug comes in. Stash your changes, switch branches, fix bug, then come back and unstash."}]},
                    {"name": "git stash -u", "children":[{"name":"Scenario: Stash your changes including new, untracked files."}]},
                    {"name": "git stash pop", "children": [{"name": "Apply the most recent stash and remove it from the list."}]},
                    {"name": "git stash apply", "children": [{"name": "Apply a stash but keep it in the list."}]}
                ]},
                { "name": "git tag", "children": [
                     {"name": "Scenario", "children": [{"name":"Marking a specific point in history as important, such as a version release (e.g., v1.0.0)."}]},
                    {"name": "git tag -a v1.0 -m \"Msg\"", "children": [{"name": "Creates an annotated tag (recommended)."}]},
                    {"name": "git tag v1.0.1", "children": [{"name": "Creates a lightweight tag."}]},
                    {"name": "git push origin --tags", "children": [{"name": "Push all local tags to the remote."}]}
                ]},
                { "name": "git reflog", "children": [{"name": "Scenario: You accidentally deleted a branch with `git branch -D` or did a hard reset and lost commits. `reflog` is your safety net."}]},
                { "name": "git cherry-pick", "children": [
                    {"name": "Scenario", "children": [{"name":"A single commit from another branch has a bug fix you need now, but you can't merge the whole branch."}]},
                    {"name": "git cherry-pick <commit-hash>", "children": [{"name": "Duplicates the specified commit and applies it to your current branch."}]}
                ]},
                { "name": "git bisect", "children": [
                    {"name": "Scenario", "children": [{"name":"A bug was introduced sometime in the last 100 commits. Bisect helps you find the exact commit that caused it."}]},
                    {"name": "git bisect start"},
                    {"name": "git bisect bad"},
                    {"name": "git bisect good <commit-hash>"},
                    {"name": "git bisect reset"}
                ]}
            ]
        },
        {
            "name": "Advanced Repository Management",
            "children": [
                 { "name": "Submodules", "children": [
                     {"name": "Scenario", "children": [{"name": "Your project depends on another Git repository and you want to lock it to a specific version."}]},
                    {"name": "git submodule add <repo-url>"},
                    {"name": "git submodule update --init --recursive"}
                 ]},
                 { "name": "Subtree", "children": [
                    {"name": "Scenario", "children":[{"name":"Similar to submodules, but it merges the dependency's code directly into your project history."}]},
                    {"name":"git subtree add --prefix=lib <repo-url> main"}
                 ]},
                 { "name": "Worktrees", "children": [
                    {"name": "Scenario", "children": [{"name": "Need to quickly fix a bug on `main` but you're in the middle of a big feature? Use a worktree to check out `main` in a new folder."}]},
                    {"name": "git worktree add ../hotfix main"},
                    {"name": "git worktree list"}
                 ]},
                 { "name": "git notes", "children":[
                     {"name":"Scenario: Attach extra information to a commit without changing its hash (e.g., review comments)."},
                     {"name":"git notes add -m 'Reviewed by...' <commit>"}
                 ]}
            ]
        },
        {
            "name": "Large Repos & Performance",
            "children": [
                { "name": "Git LFS (Large File Storage)", "children": [
                    {"name":"Scenario: Your project needs to version large binary files like audio, video, or graphics."},
                    {"name": "git lfs install"},
                    {"name": "git lfs track \"*.psd\""}
                ]},
                { "name": "Shallow Clones", "children": [
                    {"name": "git clone --depth 1 <url>", "children": [{"name": "Scenario: For CI/CD pipelines where you only need the latest code to build and test."}]}
                ]},
                { "name": "Sparse Checkout", "children": [
                     {"name": "Scenario: In a huge monorepo, check out only the sub-directory you need to work on."}]},
                {"name": "Modern Performance Features", "children":[
                    {"name": "Commit-Graph File", "children":[{"name":"Speeds up log traversal and history operations."}]},
                    {"name": "Multi-Pack-Index (MIDX)", "children":[{"name":"Optimizes object lookups in repos with many packed objects."}]}
                ]},
                {"name": "Cleaning History", "children":[
                    {"name":"BFG Repo-Cleaner / git-filter-repo", "children":[{"name":"External tools to remove large files or sensitive data from your entire project history."}]}
                ]}
            ]
        },
        {
            "name": "Git Workflows & Collaboration",
            "children": [
                { "name": "Feature Branch Workflow", "children": [{"name": "Idea: All feature development takes place in a dedicated branch."}, {"name":"Pros: Isolates work, enables Pull Requests and code review."}] },
                { "name": "Gitflow Workflow", "children": [{"name": "Idea: A strict branching model with `main`, `develop`, feature, release, and hotfix branches."}, {"name":"Pros: Very structured, good for projects with scheduled releases."}, {"name":"Cons: Often overly complex."}] },
                { "name": "Forking Workflow", "children": [{"name": "Idea: Each developer forks the repo, pushes to their fork, and creates a Pull Request back."}, {"name":"Pros: Ideal for open-source projects."}] },
                { "name": "Pull Requests / Merge Requests", "children": [{"name": "Explanation: A formal way to propose changes, allowing for code review, discussion, and automated checks before merging."}] }
            ]
        },
        {
            "name": "Tools & Platforms",
            "children": [
                { "name": "GitHub", "children": [{"name":"Key Features: Pull Requests, GitHub Actions (CI/CD), Issues, Codespaces."}] },
                { "name": "GitLab", "children": [{"name":"Key Features: Merge Requests, Integrated CI/CD, Issue Boards, Self-hosting option."}] },
                { "name": "Bitbucket", "children": [{"name":"Key Features: Excellent integration with Jira, Pipelines (CI/CD)."}] },
                { "name": "Azure DevOps", "children": [{"name":"Key Features: Azure Repos (Git), Azure Pipelines (CI/CD), Azure Boards."}] },
                { "name": "GUI Clients", "children": [{"name": "SourceTree"}, {"name": "GitKraken"}, {"name": "GitHub Desktop"}, {"name": "Integrated in VS Code, JetBrains IDEs"}] }
            ]
        },
        {
            "name": "Automation, Customization & Security",
            "children": [
                { "name": "Git Hooks", "children": [
                    {"name":"Explanation: Scripts that run automatically at certain points in the Git lifecycle."},
                    {"name": "Client-Side Example: pre-commit", "children": [{"name":"Scenario: Automatically run a linter or code formatter before allowing a commit."}] },
                    {"name": "Server-Side Example: pre-receive", "children": [{"name":"Scenario: Enforce project policies, like checking if commit messages are formatted correctly."}] }
                ]},
                { "name": ".gitattributes", "children": [
                    {"name": "Explanation: A file to specify attributes for paths."},
                    {"name": "* text=auto", "children": [{"name": "Scenario: Automatically handle line endings between different operating systems."}]},
                    {"name": "*.jpg binary", "children": [{"name": "Scenario: Tell Git not to try and diff binary files."}]}
                ]},
                { "name": "Git Security", "children":[
                    {"name":"Signing Commits/Tags with GPG", "children":[
                        {"name":"Scenario: Prove that commits and tags on a project were made by you and have not been tampered with."},
                        {"name":"git commit -S -m \"Message\""}
                    ]},
                    {"name":"Preventing Secrets", "children":[
                        {"name":"Use tools like `git-secrets` or pre-commit hooks to scan for API keys or passwords before they can be committed."}
                    ]}
                ]}
            ]
        },
        {
            "name": "Git Internals & Maintenance",
            "children": [
                { "name": "The .git Directory", "children": [{"name": "objects/", "children":[{"name": "The object database, stores all content."}]}, {"name": "refs/", "children": [{"name": "Stores pointers to commits (branches, tags)."}]}, {"name": "HEAD", "children": [{"name": "Pointer to the currently checked-out branch."}]}] },
                { "name": "Git Objects", "children": [
                    {"name": "Blob", "children":[{"name":"Stores the raw content of a file."}]},
                    {"name": "Tree", "children":[{"name":"Represents a directory, contains pointers to blobs and other trees."}]},
                    {"name": "Commit", "children":[{"name":"Points to a single tree, parent commit(s), author, and message."}]},
                    {"name": "Tag", "children":[{"name":"A named pointer to a specific commit."}]}
                ]},
                { "name": "More Plumbing Commands", "children": [
                    {"name":"git cat-file -p <hash>", "children":[{"name":"See the contents of any Git object."}]},
                    {"name":"git write-tree", "children":[{"name":"Create a tree object from the current index."}]},
                    {"name":"git update-ref", "children":[{"name":"Manually update a ref (like a branch head) to point to a new commit."}]}
                ]},
                { "name": "Maintenance", "children": [
                    {"name": "git gc", "children": [{"name": "Scenario: After a lot of work, run garbage collection to compress objects and optimize the repository."}]},
                    {"name": "git fsck", "children": [{"name": "Scenario: If you suspect repository corruption, this command checks for integrity issues."}]}
                ]}
            ]
        },
        {
            "name": "Command Clarifications: This vs. That",
            "children": [
                {
                    "name": "merge vs. rebase",
                    "children": [
                        { "name": "git merge", "children": [ { "name": "Effect: Preserves history, creates a 'merge commit'." }, { "name": "Use When: You want to maintain the exact history of a feature branch. Default for shared branches." } ] },
                        { "name": "git rebase", "children": [ { "name": "Effect: Rewrites history to create a clean, linear sequence." }, { "name": "Use When: Cleaning up your local branch before merging. NEVER use on shared branches." } ] }
                    ]
                },
                {
                    "name": "pull vs. fetch",
                    "children": [
                        { "name": "git fetch", "children": [ { "name": "Effect: Downloads remote changes but does NOT integrate them." }, { "name": "Use When: You want to review remote changes before applying them to your local work." } ] },
                        { "name": "git pull", "children": [ { "name": "Effect: `git fetch` followed by `git merge`." }, { "name": "Use When: You want to update your current branch with all remote changes at once." } ] }
                    ]
                },
                {
                    "name": "reset vs. revert vs. restore",
                    "children": [
                         { "name": "git restore", "children": [ { "name": "Purpose: Discarding local, uncommitted changes." }, { "name": "Scenario: 'I made changes to a file but I hate them.'" } ] },
                        { "name": "git reset", "children": [ { "name": "Purpose: Moving the branch pointer, rewriting local history." }, { "name": "Scenario: 'I made a few commits on my local branch that are wrong and want to erase them.'" } ] },
                        { "name": "git revert", "children": [ { "name": "Purpose: Creating a new commit that is the opposite of a previous one." }, { "name": "Scenario: 'A commit already pushed to main introduced a bug. I need to safely undo it.'" } ] }
                    ]
                },
                {
                    "name": "submodule vs. subtree",
                     "children": [
                        { "name": "git submodule", "children": [ { "name": "How it works: Stores a link to another repository." }, { "name": "Use When: You want to keep a dependency's history completely separate." } ] },
                        { "name": "git subtree", "children": [ { "name": "How it works: Merges the dependency's code and history into your project." }, { "name": "Use When: You want to vendor a dependency and make cloning simple for others." } ] }
                    ]
                },
                {
                    "name": "HEAD^ vs. HEAD~",
                     "children": [
                        { "name": "HEAD~", "children": [ { "name": "Meaning: The first parent of the commit." }, { "name": "Use Case: Moving backwards in a linear line of commits. `HEAD~2` is the grandparent." } ] },
                        { "name": "HEAD^", "children": [ { "name": "Meaning: For merge commits, `HEAD^1` is the first parent, `HEAD^2` is the second (merged-in) parent." }, { "name": "Use Case: Navigating the different parents of a merge commit." } ] }
                    ]
                }
            ]
        },
         {
            "name": "Troubleshooting & Recovery",
            "children": [
                {"name": "Detached HEAD State", "children":[
                    {"name":"What it is: You have checked out a commit directly, instead of a branch."},
                    {"name":"How to Fix: `git switch -c new-branch-name` to save your work on a new branch."}
                ]},
                {"name": "Recovering Lost Work with reflog", "children":[
                    {"name":"Scenario: You accidentally hard-reset and lost commits."},
                    {"name":"1. `git reflog` to find the SHA of the commit you want to return to."},
                    {"name":"2. `git reset --hard <SHA>` to restore it."}
                ]},
                {"name": "Fixing a Commit Message (after push)", "children":[
                    {"name":"Scenario: Pushed a commit with a typo in the message."},
                    {"name":"1. `git commit --amend`"},
                    {"name":"2. `git push --force-with-lease` (Use with caution on shared branches!)"}
                ]}
            ]
        },
        {
            "name": "Git Utilities & Tips",
            "children": [
                {"name":"git archive", "children":[
                    {"name":"Scenario: You need to create a zip or tarball of your project source code without the `.git` directory."},
                    {"name":"git archive --format=zip --output=project.zip main"}
                ]},
                {"name":"git shortlog", "children":[
                    {"name":"Scenario: You want to generate a simple changelog or see who has contributed the most commits."},
                    {"name":"git shortlog -s -n"}
                ]},
                {"name":"git rev-parse", "children":[
                    {"name":"Scenario: You're writing a script and need to get the full SHA-1 hash for a reference like HEAD or a branch name."},
                    {"name":"git rev-parse HEAD"}
                ]},
                {"name":"Example .gitconfig", "children":[
                    {"name":"[user]", "children":[{"name":"name = Your Name"}, {"name":"email = your@email.com"}]},
                    {"name":"[alias]", "children":[{"name":"st = status"}, {"name":"lg = log --graph..."}]},
                    {"name":"[core]", "children":[{"name":"editor = code --wait"}]}
                ]}
            ]
        },
        {
            "name": "Git at Scale & The Ecosystem",
            "children": [
                {"name": "Monorepo vs. Polyrepo", "children": [
                    {"name":"Monorepo: One giant repository for all projects. (Google, Facebook)"},
                    {"name":"Polyrepo: A separate repository for each project/service. (Most common)"}
                ]},
                {"name": "GitOps", "children":[
                    {"name":"Idea: Use Git as the single source of truth for declarative infrastructure and applications."},
                    {"name":"Workflow: Changes to infrastructure are made via pull requests to a Git repo."}
                ]},
                {"name": "Semantic Versioning & Release", "children":[
                    {"name":"Scenario: Automate version bumps and changelog generation based on commit messages."},
                    {"name":"Tools like `semantic-release` analyze commits (e.g., `feat:`, `fix:`) to determine the next version number."}
                ]},
                {"name": "Advanced Platform Features", "children":[
                    {"name":"Code Owners: Automatically request reviews from specific teams based on which files are changed."},
                    {"name":"Protected Branches: Enforce rules like requiring status checks to pass before merging."},
                    {"name":"Merge Queues: Prevent broken builds by serializing merges into a busy main branch."}
                ]},
                {"name":"Git Hooks Frameworks (Husky)", "children":[
                    {"name":"Scenario: Simplify managing and sharing client-side hooks (like pre-commit) with your team."}
                ]}
            ]
        }
    ]
};
