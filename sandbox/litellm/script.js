/*
 * LiteLLM API
 * Proxy Server to call 100+ LLMs in the OpenAI format  👉 [```LiteLLM Admin Panel on /ui```](/ui/). Create, Edit Keys with SSO
 *
 * OpenAPI spec version: 1.27.4
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 7.4.0-SNAPSHOT
 */

// TODO: Fix test coverage, currently only 11% of the tests passing


import http from "k6/http";
import { group, check, sleep } from "k6";

function makeTestId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return "test-" + result;
}


const BASE_URL = "http://litellm";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
let authorization = `Bearer ${__ENV.LITELLM_KEY}`;
var models_list = ["gpt-4", "gpt-4-turbo", "claude-3-opus"];


export default function() {
   // Good Tests
   group("/health/liveliness", () => {

        // Request No. 1: health_liveliness_health_liveliness_get
        {
            let url = BASE_URL + `/health/liveliness`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/test", () => {

        // Request No. 1: test_endpoint_test_get
        {
            let url = BASE_URL + `/test`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/", () => {

        // Request No. 1: home__get
        {
            let url = BASE_URL + `/`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/health", () => {
        let model = 'gpt-4-turbo'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: health_endpoint_health_get
        {
            let url = BASE_URL + `/health?model=${model}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/models", () => {

        // Request No. 1: model_list_models_get
        {
            let url = BASE_URL + `/models`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/sso/key/generate", () => {

        // Request No. 1: google_login_sso_key_generate_get
        {
            let url = BASE_URL + `/sso/key/generate`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/health/readiness", () => {

        // Request No. 1: health_readiness_health_readiness_get
        {
            let url = BASE_URL + `/health/readiness`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/routes", () => {

        // Request No. 1: get_routes_routes_get
        {
            let url = BASE_URL + `/routes`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//REMOVED: /config/update

    group("/team/info", () => {
        let teamId = '1'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: team_info_team_info_get
        {
            let url = BASE_URL + `/team/info?team_id=${teamId}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });



    // Bad Tests
    group("/key/delete", () => {

        // Request No. 1: delete_key_fn_key_delete_post
        {
            let url = BASE_URL + `/key/delete`;
            // TODO: edit the parameters of the request body.
            let body = {"keys": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });




    group("/key/update", () => {

        // Request No. 1: update_key_fn_key_update_post
        {
            let url = BASE_URL + `/key/update`;
            // TODO: edit the parameters of the request body.
            let body = {"models": {}, "spend": {}, "maxBudget": {}, "userId": {}, "teamId": {}, "maxParallelRequests": {}, "metadata": {}, "tpmLimit": {}, "rpmLimit": {}, "budgetDuration": {}, "allowedCacheControls": {}, "keyAlias": {}, "duration": {}, "aliases": {}, "config": {}, "permissions": {}, "modelMaxBudget": {}, "key": "string"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/spend/users", () => {
        let userId = '1'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: spend_user_fn_spend_users_get
        {
            let url = BASE_URL + `/spend/users?user_id=${userId}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });



    group("/model/info", () => {

        // Request No. 1: model_info_v1_model_info_get
        {
            let url = BASE_URL + `/model/info`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/embeddings", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: embeddings_embeddings_post
        {
            let url = BASE_URL + `/embeddings?model=${model}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/user/new", () => {

        // Request No. 1: new_user_user_new_post
        {
            let url = BASE_URL + `/user/new`;
            // TODO: edit the parameters of the request body.
            let body = {"models": {}, "spend": {}, "maxBudget": {}, "userId": {}, "teamId": {}, "maxParallelRequests": {}, "metadata": {}, "tpmLimit": {}, "rpmLimit": {}, "budgetDuration": {}, "allowedCacheControls": {}, "keyAlias": {}, "duration": {}, "aliases": {}, "config": {}, "permissions": {}, "modelMaxBudget": {}, "userEmail": {}, "userRole": {}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/user/auth", () => {

        // Request No. 1: user_auth_user_auth_post
        {
            let url = BASE_URL + `/user/auth`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/team/new", () => {

        // Request No. 1: new_team_team_new_post
        {
            let url = BASE_URL + `/team/new`;
            let teamName = makeTestId(10);
            // TODO: edit the parameters of the request body.
            let body = {"teamAlias": teamName, "teamId": {}, "admins": "list", "members": "list", "membersWithRoles": "list", "metadata": {}, "tpmLimit": {}, "rpmLimit": {}, "maxBudget": {}, "models": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });



    group("/v1/models", () => {

        // Request No. 1: model_list_v1_models_get
        {
            let url = BASE_URL + `/v1/models`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/openai/deployments/{model}/embeddings", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: embeddings_openai_deployments__model__embeddings_post
        {
            let url = BASE_URL + `/openai/deployments/${model}/embeddings`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/v2/key/info", () => {

        // Request No. 1: info_key_fn_v2_v2_key_info_post
        {
            let url = BASE_URL + `/v2/key/info`;
            // TODO: edit the parameters of the request body.
            let body = {"keys": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/user/info", () => {
        let userId = '1'; // specify value as there is no example value for this parameter in OpenAPI spec
        let viewAll = 'false'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: user_info_user_info_get
        {
            let url = BASE_URL + `/user/info?user_id=${userId}&view_all=${viewAll}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/spend/logs", () => {
        let apiKey = 'sk-1234'; // specify value as there is no example value for this parameter in OpenAPI spec
        let endDate = '2024-03-30'; // specify value as there is no example value for this parameter in OpenAPI spec
        let requestId = '1'; // specify value as there is no example value for this parameter in OpenAPI spec
        let userId = '1'; // specify value as there is no example value for this parameter in OpenAPI spec
        let startDate = '2024-02-30'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: view_spend_logs_spend_logs_get
        {
            let url = BASE_URL + `/spend/logs?api_key=${apiKey}&user_id=${userId}&request_id=${requestId}&start_date=${startDate}&end_date=${endDate}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/user/unblock", () => {

        // Request No. 1: unblock_user_user_unblock_post
        {
            let url = BASE_URL + `/user/unblock`;
            // TODO: edit the parameters of the request body.
            let body = {"userIds": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/model/delete", () => {

        // Request No. 1: delete_model_model_delete_post
        {
            let url = BASE_URL + `/model/delete`;
            // TODO: edit the parameters of the request body.
            let body = {"id": {}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/spend/tags", () => {
        let endDate = '2024-03-30'; // specify value as there is no example value for this parameter in OpenAPI spec
        let startDate = '2024-02-30'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: view_spend_tags_spend_tags_get
        {
            let url = BASE_URL + `/spend/tags?start_date=${startDate}&end_date=${endDate}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/team/delete", () => {

        // Request No. 1: delete_team_team_delete_post
        {
            let url = BASE_URL + `/team/delete`;
            // TODO: edit the parameters of the request body.
            let body = {"teamIds": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/config/yaml", () => {

        // Request No. 1: config_yaml_endpoint_config_yaml_get
        {
            let url = BASE_URL + `/config/yaml`;
            // TODO: edit the parameters of the request body.
            let body = {"environmentVariables": {}, "modelList": {}, "litellmSettings": {}, "generalSettings": {"completionModel": "completion_model", "keyManagementSystem": "configgeneralsettings_key_management_system", "useGoogleKms": "use_google_kms", "useAzureKeyVault": "use_azure_key_vault", "masterKey": "master_key", "databaseUrl": "database_url", "databaseConnectionPoolLimit": "database_connection_pool_limit", "databaseConnectionTimeout": "database_connection_timeout", "databaseType": "database_type", "databaseArgs": "configgeneralsettings_database_args", "otel": "otel", "customAuth": "custom_auth", "maxParallelRequests": "max_parallel_requests", "inferModelFromKeys": "infer_model_from_keys", "backgroundHealthChecks": "background_health_checks", "healthCheckInterval": "oas_any_type_not_mapped", "alerting": "alerting", "alertingThreshold": "alerting_threshold"}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/user/get_requests", () => {

        // Request No. 1: user_get_requests_user_get_requests_get
        {
            let url = BASE_URL + `/user/get_requests`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/sso/callback", () => {

        // Request No. 1: auth_callback_sso_callback_get
        {
            let url = BASE_URL + `/sso/callback`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/key/info", () => {
        let key = 'sk-1234'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: info_key_fn_key_info_get
        {
            let url = BASE_URL + `/key/info?key=${key}`;
            let request = http.get(url);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/user/block", () => {

        // Request No. 1: block_user_user_block_post
        {
            let url = BASE_URL + `/user/block`;
            // TODO: edit the parameters of the request body.
            let body = {"userIds": "list"};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });


    group("/team/member_add", () => {

        // Request No. 1: team_member_add_team_member_add_post
        {
            let url = BASE_URL + `/team/member_add`;
            // TODO: edit the parameters of the request body.
            let body = {"teamId": "string", "member": {"role": "oas_any_type_not_mapped", "userId": "user_id_3", "userEmail": "user_email"}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//REMOVED: /v1/images/generation

    group("/user/update", () => {

        // Request No. 1: user_update_user_update_post
        {
            let url = BASE_URL + `/user/update`;
            // TODO: edit the parameters of the request body.
            let body = {"models": {}, "spend": {}, "maxBudget": {}, "userId": "string", "teamId": {}, "maxParallelRequests": {}, "metadata": {}, "tpmLimit": {}, "rpmLimit": {}, "budgetDuration": {}, "allowedCacheControls": {}, "userRole": {}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/v1/embeddings", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: embeddings_v1_embeddings_post
        {
            let url = BASE_URL + `/v1/embeddings?model=${model}`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//REMOVED: /user/request_model

    group("/key/generate", () => {

        // Request No. 1: generate_key_fn_key_generate_post
        {
            let url = BASE_URL + `/key/generate`;
            // TODO: edit the parameters of the request body.
            let body = {"models": {}, "spend": {}, "maxBudget": {}, "userId": {}, "teamId": {}, "maxParallelRequests": {}, "metadata": {}, "tpmLimit": {}, "rpmLimit": {}, "budgetDuration": {}, "allowedCacheControls": {}, "keyAlias": {}, "duration": {}, "aliases": {}, "config": {}, "permissions": {}, "modelMaxBudget": {}};
            let params = {headers: {"Content-Type": "application/json", "Authorization": `${authorization}`, "Accept": "application/json"}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/v2/model/info", () => {

        // Request No. 1: model_info_v2_v2_model_info_get
        {
            let url = BASE_URL + `/v2/model/info`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//REMOVED: /images/generations

    group("/team/update", () => {

        // Request No. 1: update_team_team_update_post
        {
            let url = BASE_URL + `/team/update`;
            // TODO: edit the parameters of the request body.
            let body = {"teamId": "string", "teamAlias": {}, "admins": {}, "members": {}, "membersWithRoles": {}, "metadata": {}};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/spend/keys", () => {

        // Request No. 1: spend_key_fn_spend_keys_get
        {
            let url = BASE_URL + `/spend/keys`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/v1/model/info", () => {

        // Request No. 1: model_info_v1_v1_model_info_get
        {
            let url = BASE_URL + `/v1/model/info`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/ollama_logs", () => {

        // Request No. 1: retrieve_server_log_ollama_logs_get
        {
            let url = BASE_URL + `/ollama_logs`;
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.get(url, params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//all chat completions go here for easy viewing/testing 
    group("/v1/chat/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: chat_completion_v1_chat_completions_post
        {
            let url = BASE_URL + `/v1/chat/completions?model=${model}`;
            let body = {"model": model, "messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });
    
    group("/openai/deployments/{model}/chat/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: chat_completion_openai_deployments__model__chat_completions_post
        {
            let url = BASE_URL + `/openai/deployments/${model}/chat/completions`;
            let body = {"model": model, "messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/chat/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: chat_completion_chat_completions_post
        {
            let url = BASE_URL + `/chat/completions?model=${model}`;
            let body = {"messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/v1/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: completion_v1_completions_post
        {
            let url = BASE_URL + `/v1/completions?model=${model}`;
            let body = {"messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/engines/{model}/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: completion_engines__model__completions_post
        {
            let url = BASE_URL + `/engines/${model}/completions`;
            let body = {"messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/queue/chat/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: async_queue_request_queue_chat_completions_post
        {
            let url = BASE_URL + `/queue/chat/completions?model=${model}`;
            let body = {"messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

    group("/completions", () => {
        let model = 'gpt-4'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: completion_completions_post
        {
            let url = BASE_URL + `/completions?model=${model}`;
            let body = {"messages": [{"role": "user", "content": "What is 2 + 2?"}]};
            let params = {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `${authorization}`}};
            let request = http.post(url, JSON.stringify(body), params);

            check(request, {
                "Successful Response": (r) => r.status === 200
            });
        }
    });

//REMOVED: /moderations
//REMOVED: /v1/moderations
}
