# Contribution

## Branch name

Each developer has to create their own branch to work on their own user story, and does not allow to push their code directly to `dev`.

Each branch has to follow this naming convention: `<purpose-name>/action-you-going-to-do`.

The purpose of each branch has to be one of these values:

- `feature`: new feature.
- `fix`: fix bugs.

## Pull request name

Developers want to make change to `dev`, they need to create pull request to merge their work to the `dev` branch.

Each pull request **MUST** following this naming convention: `<purpose-name>: action you going to do.`
Example: `feat: add new documents to the beginning section`.

The **_user story number_** **MUST** be the same with the one the developer used to name their branch.

The description for the PR should be more detailed than the one in the branch's name, and should align with the description of the user story.

## Merging PRs

### Approvals

Each pull request needs to have **1 approvals** before merging into `dev`.

The number of approvals will be reset whenever the owner push a new commit to remote.

### Merging action

All PRs **MUST** `Squash and merge` to the `dev` branch. The commit messgae has to be the same as the PR's name.
