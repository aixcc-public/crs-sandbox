/*
 * iAPI v1.0 - AIXCC Competition API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * Generator version: 7.4.0
 */

import http from 'k6/http'
import { group, check } from 'k6'

const BASE_URL = __ENV.AIXCC_API_HOSTNAME; // eslint-disable-line

export default function () {
  group('/submission/vds/', () => {
    const url = BASE_URL + '/submission/vds/'
    const body = {
      cp_name: 'linux kernel',
      pou: {
        commit_sha1: '2923ffa6e0572ee6572245f980acfcfb872fcf74',
        sanitizer: 'id_1'
      },
      pov: {
        harness: 'id_1',
        data: 'LS0tIGhlbGxvLmMJMjAxNC0xMC0wNyAxODoxNzo0OS4wMDAwMDAwMDAgKzA1MzANCisrKyBoZWxsb19uZXcuYwkyMDE0LTEwLTA3IDE4OjE3OjU0LjAwMDAwMDAwMCArMDUzMA0KQEAgLTEsNSArMSw2IEBADQogI2luY2x1ZGUgPHN0ZGlvLmg+DQogDQotaW50IG1haW4oKSB7DQoraW50IG1haW4oaW50IGFyZ2MsIGNoYXIgKmFyZ3ZbXSkgew0KIAlwcmludGYoIkhlbGxvIFdvcmxkXG4iKTsNCisJcmV0dXJuIDA7DQogfQ=='
      }
    }
    const params = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
    const request = http.post(url, JSON.stringify(body), params)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })

  group('/submission/vds/{vd_uuid}', () => {
    const vd_uuid = '81299570-b629-4638-a90d-5ed313126e6d'
    const url = BASE_URL + `/submission/vds/${vd_uuid}`
    const request = http.get(url)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })

  group('/health/', () => {
    const url = BASE_URL + '/health/'
    const request = http.get(url)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })

  group('/submission/gp/{gp_uuid}', () => {
    const gp_uuid = '81299570-b629-4638-a90d-5ed313126e6d'
    const url = BASE_URL + `/submission/gp/${gp_uuid}`
    const request = http.get(url)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })

  group('/submission/gp/', () => {
    const url = BASE_URL + '/submission/gp/'
    const body = {
      cpv_uuid: '282faae9-7462-41f2-b387-977b4451f54c',
      data: 'LS0tIGhlbGxvLmMJMjAxNC0xMC0wNyAxODoxNzo0OS4wMDAwMDAwMDAgKzA1MzANCisrKyBoZWxsb19uZXcuYwkyMDE0LTEwLTA3IDE4OjE3OjU0LjAwMDAwMDAwMCArMDUzMA0KQEAgLTEsNSArMSw2IEBADQogI2luY2x1ZGUgPHN0ZGlvLmg+DQogDQotaW50IG1haW4oKSB7DQoraW50IG1haW4oaW50IGFyZ2MsIGNoYXIgKmFyZ3ZbXSkgew0KIAlwcmludGYoIkhlbGxvIFdvcmxkXG4iKTsNCisJcmV0dXJuIDA7DQogfQ=='
    }
    const params = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
    const request = http.post(url, JSON.stringify(body), params)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })

  group('/', () => {
    const url = BASE_URL + '/'
    const request = http.get(url)

    check(request, {
      'Successful Response': (r) => r.status === 200
    })
  })
}
