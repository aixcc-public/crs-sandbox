ARG IMAGE_NAME=ubuntu
ARG IMAGE_VERSION=sha256:aa772c98400ef833586d1d517d3e8de670f7e712bf581ce6053165081773259d
ARG PARENT_IMAGE=$IMAGE_NAME@$IMAGE_VERSION
FROM $PARENT_IMAGE as crs-base-image

# global environment variables
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV TZ America/New_York
ENV USER root

# install basic dependencies
RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        7zip \
        autoconf \
        automake \
        autotools-dev \
        bash \
        build-essential \
        binutils \
        curl \
        file \
        gnupg2 \
        git \
        gzip \
        jq \
        libcap2 \
        ltrace \
        make \
        openssl \
        patch \
        perl-base \
        python3 \
        python3-dev \
        python3-pip \
        python3-setuptools \
        python3-wheel \
        rsync \
        software-properties-common \
        strace \
        tar \
        tzdata \
        unzip \
        vim-tiny \
        wget \
        xz-utils \
        zip && \
        apt-get autoremove -y && \
        rm -rf /var/lib/apt/lists/*

ARG YQ_VERSION=4.43.1
ARG YQ_BINARY=yq_linux_amd64
RUN wget https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/${YQ_BINARY} -O /usr/bin/yq && chmod +x /usr/bin/yq

# Create working directory
ENV WORK=/root/work
RUN mkdir -p $WORK && chmod -R 0755 $WORK

# Create CRS directories
ENV CRS_HOME=/root/crs
ENV CRS_SRC=/root/crs/src
ENV CRS_LIB=/root/crs/src/scripts
ENV CRS_TEST=/root/crs/test
RUN mkdir -p $CRS_HOME && chmod -R 0755 $CRS_HOME
WORKDIR $CRS_HOME
COPY --chmod=0755 ./crs/ .

WORKDIR $WORK
