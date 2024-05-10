# CRS Sandbox

This repository, the `CRS Sandbox` includes a `compose.yaml` file.
This file is the only resource competitors will have for infrastructure automation at competition time.
Environment variables and secrets will be injected into the `compose.yaml` from each competitors private copy of the `CRS Sandbox`.

Competitor SSO accounts to Github will be limited to a basic set of actions for making modifications and merging PRs within the Github repo.

# CRS Constraints on Docker and Virtualization
At competition time a specific subset of secrets and environment variables will be wiped from all of the private repos and competitors will no longer have access to change these at competition time. This is so the AIxCC infrastructure team can replace the LiteLLM instance and credentials used to access the LiteLLM API in order to track individual competitor LLM usage at competition time.

In the competition environment, a CRS is expected to use Docker (via `run.sh`)
to exercise the CPs that are packaged and configured to be built, tested, and
patched using the provided Docker container.

One CP (the public Linux kernel CP) includes `virtme-ng` in its CP-specific
Docker container for the purposes of testing the built kernel. 

This is the only form of nested virtualization or nested containerization that
will be supported by the competition environment. A CRS **MUST NOT** assume that 
nested containers or another virtualization/hypervisor technology will be
compatible with the competition environment.

# Environment Variables & Github Secrets

Each competitors CRS will come pre-packaged with a list of Github secrets and environment variables. Teams may change the values of these secrets, however they must not change the name of the pre-existing secrets or variables and must ensure their application code uses the core variables related to the iAPI and LiteLLM connections.

This is so the AIxCC infrastructure team can override the per-competitor secrets and variables at competition time, yet competitors can use these secrets for connecting to their cloud vendor and/or LLM APIs as needed.

There are currently 4 LLM Provider environment variables declared but not populated in example.env, which will be populated at competition time:
- OPENAI\_API\_KEY
- AZUREML\_API\_KEY
- GOOGLE_APPLICATION_CREDENTIAL
- ANTHROPIC\_API\_KEY
Note: For local development the example.env file should be renamed to env.

*TBD* - These variables and the LiteLLM configuration file are not yet complete. This will be released in a CRS sandbox update. We will continue iterating on the CRS sandbox as we grow closer to the competition in order to support newer versions of components in order to stay compatible with the latest LLM models and tech as this changes almost daily.

Please see the competition rules and technical release as the cut off dates for changes will be descibed there.

# LiteLLM Models Supported

| Provider  | Model                  | Pinned Version              |
| --------- | ---------------------- | --------------------------- |
| OpenAI    | gpt-3.5-turbo          | gpt-3.5-turbo-0125          |
| OpenAI    | gpt-4                  | gpt-4-0613                  |
| OpenAI    | gpt-4-turbo            | gpt-4-turbo-2024-04-09      |
| OpenAI    | text-embedding-3-large | text-embedding-3-large      |
| OpenAI    | text-embedding-3-small | text-embedding-3-small      |
| Anthropic | claude-3-sonnet        | claude-3-sonnet-20240229    |
| Anthropic | claude-3-opus          | claude-3-opus-20240229      |
| Anthropic | claude-3-haiku         | claude-3-haiku-20240307     |
| Google    | gemini-pro             | gemini-1.0-pro-001          |
| Google    | gemini-1.5-pro         | gemini-1.5-pro-preview-0409 |
Note: Embedding models have not currently been released in more than a single version.

These are utilized by hitting the LiteLLM /chat/completions endpoint, specifying model and message using the OpenAI JSON request format.
Note that further models will be supported in subsequent iterations.

# Local Development

## Github Personal Access Token (PAT)
In order to work with the CRS Sandbox you must setup your Github personal access token or PAT following these steps.
1. Configure a personal access token (PAT) with `read:packages` permission by following this [guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic)
2. Authorize the generated PAT for the `aixcc-sc` organization by this [guide](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)
3. Run `echo "example-token-1234" | docker login ghcr.io -u USERNAME --password-stdin` replacing example-token-1234 with your generated PAT
4. Confirm that you see `> Login Succeeded` in your output from step #3.

## Github SSH Key
1. Generate an SSH key by following this [guide](https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. Upload the generated SSH key to your AIxCC Github account by following this [guide](https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
3. Follow this [guide](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) to authorize the SSH key for the `aixcc-sc` organization

## Dependencies
Most dependencies in this repo can be automatically managed by `mise`, but you'll have to install the following yourself:

- docker >= 24.0.5
- docker-compose >= 2.24.7
- GNU make >= 4.3

## Local Kubernetes Testing Dependencies
These are only needed if you wish to test the generated helm charts
- kind >= 0.22.0
- kubectl >= 1.29.2
- helm >= 3.14.4

### Dependencies managed using mise
This repo defines its dependencies in a [`.tool-versions`](./.tool-versions) file.  [`mise`](https://mise.jdx.dev/getting-started.html#quickstart) can read this file and automatically install the tools at the required versions.  Install `mise`, set it up in your shell, and then run `mise install`.  `mise` will then manage your `PATH` variable to make the tools available whenever you `cd` into this repo.

We've included a Makefile with helpful targets to make working with the CRS Sandbox easier. However, you can copy any commands and run them on your own. Please note the use of `--profile` with all `docker compose` commands. This is so we can easily swap `--profile development` with `--profile competition` at competition time, but competitors can use the `--profile development` to run the local copy of emulated resources.

## Using Make
A Makefile has been provided with a number of a commands to make it easy to clone the exemplar repos, stand up the environment, and a variety of other actions.

Copy `sandbox/example.env` to `sandbox/.env` and replace the variables with your own for local development

```bash
cp sandbox/example.env sandbox/.env
```

`make cps` - clones the exemplar challenges into `./cp_root` folder
`make up` - brings up the development CRS Sandbox, you can visit http://127.0.0.1:8080/docs to see the iAPI OpenAPI spec.

The CRS Sandbox currently uses Grafana/K6 as a placeholder for the CRS solution itself and is used to validate that the sandbox can reach the proper HTTP endpoints within the iAPI and LiteLLM containers.

`make down` - tears down the development CRS Sandbox

See [Makefile](./Makefile) for more commands

`make force-reset` - performs a full Docker system prune of all local docker containers, images, networks, and volumes. This can be useful if you accidentally orphaned some docker process or other resources. 

## Kubernetes
The Makefile includes endpoints for `make k8s` and `make k8s/competition` which will generate a helm chart in a `./.k8s/` folder which can be applied to your own Kubernetes clusters for testing. This uses a component called [Kompose](https://kompose.io/conversion/) for translating the Docker Compose file into resources. The CRS Sandbox will include a CI/CD action which the private repos must also use which will generate and push the container images to the respective per-competitor private Github repos as well as the Helm chart as an OCI compliant chart. 

## Architecture Diagram

This diagram depicts the CRS Sandbox during the `development` phase with `--profile development` and during the `competition` phase with `--profile competition`.
As you can see the iAPI remains as part of the CRS Sanbox but can communicate with the upstream API. However, the LiteLLM component moves to a centralized component that does not run within the CRS Sandbox at competition.

![arch diagram](./architecture.png)
