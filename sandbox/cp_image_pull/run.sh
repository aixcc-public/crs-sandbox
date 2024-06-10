#! /bin/sh

set -e

echo "Starting CP image loader"

until docker version >/dev/null 2>/dev/null; do
	echo "Waiting for Docker daemon to start"
	sleep 5
done

docker login ghcr.io -u "${GITHUB_USER}" --password "${GITHUB_TOKEN}"

for cp in "${AIXCC_CP_ROOT}"/*; do
	echo "Fetching image for CP at ${cp}"
	cd "$cp" || exit 1
	make docker-pull
done
