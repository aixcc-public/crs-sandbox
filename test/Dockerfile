# Use the official k6 image as the base image
FROM grafana/k6:0.50.0

# Copy your k6 test script to the container
COPY sandbox/script.js script.js
COPY sandbox/litellm litellm
COPY sandbox/iapi iapi
# Run the k6 test using the copied script
CMD ["run", "script.js"]
