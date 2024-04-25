ROOT_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
THIS_FILE := $(lastword $(MAKEFILE_LIST))
DOCKER_COMPOSE_FILE = $(ROOT_DIR)/compose.yaml

# variables that control the CP repos
HOST_CP_ROOT_DIR = $(ROOT_DIR)/cp_root
EXEMPLAR_REPOS = git@github.com:aixcc-sc/challenge-002-jenkins-cp.git
EXEMPLAR_REPOS_TARGETS = $(addprefix $(HOST_CP_ROOT_DIR)/.pulled_, $(subst :,_colon_, $(subst /,_slash_, $(EXEMPLAR_REPOS))))

.PHONY: help build up start down destroy stop restart logs logs-crs logs-litellm logs-iapi ps crs-shell litellm-shell cps/clean cps

help: ## Display available targets and their help strings
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_/-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(THIS_FILE) | sort

build: ## Build the project
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development build $(c)

up: cps ## Start containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development up -d $(c)

start: ## Start containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development start $(c)

down: ## Stop and remove containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development down $(c)

destroy: ## Stop and remove containers with volumes
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development down -v $(c)

stop: ## Stop containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development stop $(c)

restart: ## Restart containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development stop $(c)
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development up -d $(c)

logs: ## Show logs for containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development logs --tail=100 -f $(c)

logs-crs: ## Show logs for crs container
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development logs --tail=100 -f crs

logs-litellm: ## Show logs for litellm container
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development logs --tail=100 -f litellm

logs-iapi: ## Show logs for iapi container
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development logs --tail=100 -f iapi

ps: ## List containers
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development ps

crs-shell: ## Access the crs shell
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development exec crs /bin/bash

litellm-shell: ## Access the litellm shell
	@docker compose -f $(DOCKER_COMPOSE_FILE) --profile development exec litellm /bin/bash

## Internal target to clone and pull the CP source for each CP repo
$(HOST_CP_ROOT_DIR)/.pulled_%.git:
	$(eval REVERT_REPO_ESCAPE_STR=$(subst _colon_,:,$(subst _slash_,/,$*)))
	$(eval CP_ROOT_REPO_SUBDIR=$(@D)/$(basename $(notdir $(REVERT_REPO_ESCAPE_STR))))
	@mkdir -p $(@D)
	git clone $(REVERT_REPO_ESCAPE_STR).git $(CP_ROOT_REPO_SUBDIR)
	$(CP_ROOT_REPO_SUBDIR)/run.sh pull_source
	@touch $@

cps: $(EXEMPLAR_REPOS_TARGETS) ## Clone CP repos

cps/clean: ## Clean up the cloned CP repos
	@rm -rf $(HOST_CP_ROOT_DIR)

k8s: k8s/clean
	@COMPOSE_FILE="compose.yaml kompose_conversion_overrides.yaml" kompose convert --profile development --out $(ROOT_DIR)/.k8s/

k8s/helm: k8s/clean
	@COMPOSE_FILE="compose.yaml kompose_conversion_overrides.yaml" kompose convert --profile development --chart --out $(ROOT_DIR)/.k8s/

k8s/clean:
	@rm -rf $(ROOT_DIR)/.k8s

clean: cps/clean k8s/clean down
