# Ecommerce kubernetes application

## How to setup

Requirement:
- Nodejs 22 LTS
- Java 21 LTS

For **Nodejs** packages, only need to run `yarn` at the root folder.

## How to start

To start the project in development mode, you can use this commands on root folder:

```bash
yarn dev
```

## Infomation

The list of services and their corresponding ports are listed below:

| Service     | Port |
| ----------- | ---- |
| frontend  | 3000 |
| user   | 8000 |
| product    | 8001 |

**Database Management Service**

| Database | Port |
| -------- | ---- |
| user  | 5435 |
| product   | 5436 |

## Git convention

### Branch name

Each developer has to create their own branch to work on their own user story, and does not allow to push their code directly to `dev`.

Each branch has to follow this naming convention: `<purpose-name>/action-you-going-to-do`.

The purpose of each branch has to be one of these values:

- `feature`: new feature.
- `fix`: fix bugs.

### Pull request name

Developers want to make change to `dev`, they need to create pull request to merge their work to the `dev` branch.

Each pull request **MUST** following this naming convention: `<purpose-name>: action you going to do.`
Example: `feat: add new documents to the beginning section`.

The **_user story number_** **MUST** be the same with the one the developer used to name their branch.

The description for the PR should be more detailed than the one in the branch's name, and should align with the description of the user story.

### Merging PRs

#### Approvals

Each pull request needs to have **1 approvals** before merging into `dev`.

The number of approvals will be reset whenever the owner push a new commit to remote.

#### Merging action

All PRs **MUST** `Squash and merge` to the `dev` branch. The commit messgae has to be the same as the PR's name.
