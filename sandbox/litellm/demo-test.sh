#!/bin/bash
# Script to demonstrate basic LLM forwarding for the models we currently have API keys and configs for.
#

MODELS=("gpt-4" "gpt-4-turbo" "claude-3-opus" "claude-3-sonnet" "gemini-pro" "gemini-1.5-pro")

for model in ${MODELS[@]}; do
  echo "Output for $model:"
  echo ""
  curl --location 'http://localhost:8081/chat/completions'\
    --header 'Content-Type: application/json'\
    --header 'Authorization: Bearer sk-1234'\
    --data '{
      "model": "'$model'",
      "messages": [
        {                
          "role": "user",
          "content": "What is the result of adding two and two together?"
        }
      ]
    }' | jq '.choices[0].message.content, .model'

done
