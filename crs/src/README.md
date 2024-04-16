# CRS

Competitors should place all source code unless instructed otherwise under this folder.

The existing [Dockerfile](./Dockerfile) is using Grafana's K6 to run LiteLLM and iAPI tests which are generated
from the respective openapi.yaml specifications for each service. 

We may build this component out as more of a MockCRS in future iterations. 

However it is intended that competitors will completely replace all code within this folder with their solutions.

The only additional changes to this repo should be to the 
- `.github/workflows/crs.yaml`
- `README.md` to assist your team with development.
