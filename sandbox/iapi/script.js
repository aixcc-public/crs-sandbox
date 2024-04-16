
import http from "k6/http";

export default function () {
  const response = http.get("http://iapi");
}

// TEST PLAN
// Execute all iAPI endpoints
// Execute all LiteLLM health endpoints
// Execute all LiteLLM model endpoints with sample tasking
