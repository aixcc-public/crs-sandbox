# Sandbox

The `sandbox` folder contains all of the test data and infrastructure code needed to standup the common services within a `CRS Sandbox` execution environment both for local development during development and at competition time. 
dev
These services include both the `iAPI` and the `LiteLLM` proxy. We use Docker Compose Profiles to seperate `development` from `competition` which is how we disable the `LiteLLM` proxy container at competition time as this container wouldn't have internet access in the constrained environment anyway. 

## DO NOT MAKE CHANGES WITHIN THIS FOLDER

