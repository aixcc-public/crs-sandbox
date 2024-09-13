# Testing CRSs locally

## Semifinals CRS Infrastructure

For semifinals, each CRS ran in a Kubernetes cluster with 5 total nodes.  2 were reserved for system functionality and 3 were available to the CRS.  The CRS nodes were Azure `Standard_D64ads_v5` VMs with 64 vCPUs and 256 GiB of RAM.  The clusters provided a storage class that had `RWX` (read-write many) capabilities.

The portion of these resources that were actually used in practice varied by CRS, but this level of compute resources is recommended in order to achieve similar results in a similar amount of time (semifinals had a 4-hour runtime per challenge problem).  Allow for more time when running with fewer resources.

## Running

Before you start:

* Install Make
* Copy [sandbox/example.env](./sandbox/example.env) to `sandbox/env`
* Set `AIXCC_MOCK_MODE` to `false` in `sandbox/env`
* Set your `GITHUB_TOKEN` and `GITHUB_USER` in `sandbox/env`
* Set your LLM API credentials in `sandbox/env`
* If required, set your Google LLM API credentials by putting a `vertex_key.json` in `./litellm/vertex_key.json`.  Don't edit `GOOGLE_APPLICATION_CREDENTIALS`.
* Set up [the CP Config](./cp_config/cp_config.yaml) with the challenge problem you want to run

### Running on Ubuntu 22.04

Run the following.

```bash
make install
exec sudo su -l $USER # and cd to the repo again, or just restart your shell
make k8s
```

This will set up [k3s](https://k3s.io/) and [Longhorn](https://longhorn.io/) on your machine.  It will deploy your CRS and the cAPI onto the cluster, at which point your CRS will start working on the challenge problem you configured earlier.

#### Rerunning `make k8s`

If you ever have to rerun `make k8s` without resetting `k3s`, you will need to skip deploying Longhorn.  Set the Make variable `KUBE_DEPLOY_LONGHORN` to `false` to do this.

```bash
make k8s KUBE_DEPLOY_LONGHORN=false
```

### Running on my own cluster

`crs-sandbox` provides hooks for you to provide your own cluster instead if you prefer.  This route is unsupported; you are on your own if it does not work.

As mentioned above, you will need a storage class that supports the `RWX` access mode.  You can still use Longhorn for this.

Use the following Make variables to adjust the Makefile's behavior to your specific configuration.

* Set `KUBE_CONTEXT` to the context for the cluster you want to deploy on
* Set `KUBE_DEPLOY_LONGHORN` to `false` if you are also bringing your own `RWX`-capable storage class

Run the following to deploy your CRS onto your cluster.

```bash
make k8s KUBE_CONTEXT=my_context KUBE_DEPLOY_LONGHORN=boolean_value
```
