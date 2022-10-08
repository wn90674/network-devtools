type ContentType = "application/json" | 'application/text' | 'application/www-form-urlencoded' | 'text/html'

export type DevtoolsNetworkInfo = {
    _initiator: {
        // todo
        type: string,
        stack: {
            callFrames: Array<{
                functionName: string,
                scriptId: string,
                url: string,
                lineNumber: number,
                columnNumber: number
            }>
        }
    },
    // todo
    _priority: 'High' | 'low',
    // todo
    _resourceType: 'xhr' | 'fetch',
    // todo
    cache: object,
    connection: string,
    request: {
        // todo
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD',
        url: string,
        httpVersion: string,
        // todo
        headers: Array<{
            name: string,
            value: string
        }>,
        queryString: Array<{
            name: string,
            value: string
        }>,
        // todo
        cookies: Array<{
            name: string,
            value: string
        }>,
        headersSize: number,
        bodySize: number,
        postData: {
            // todo
            mimeType: ContentType,
            text: string
        }
    },
    response: {
        status: number,
        statusText: string,
        httpVersion: string,
        // todo
        headers: Array<{
            name: string,
            value: string
        }>,
        // todo
        cookies: Array<{
            name: string,
            value:string
        }>,
        content: {
            size: number,
            mimeType: ContentType,
            compression: number
        },
        redirectURL: string,
        headersSize: number,
        bodySize: number,
        _transferSize: number,
        _error: any
    },
    serverIPAddress: string,
    startedDateTime: string,
    time: number,
    timings: {
        blocked: number,
        dns: number,
        ssl: 0 | -1,
        connect: number,
        send: number,
        wait: number,
        receive: number,
        _blocked_queueing: number
    },
    /**
     * hack 暂时不知晓如何给prototype上添加类型声明
     */
    getContent?:(cb: (s: string) => any)=> void
}

export const networkInfo: DevtoolsNetworkInfo = {
    "_initiator": {
        "type": "script",
        "stack": {
            "callFrames": [
                {
                    "functionName": "dispatchXhrRequest",
                    "scriptId": "8419",
                    "url": "webpack-internal:///./node_modules/axios/lib/adapters/xhr.js",
                    "lineNumber": 258,
                    "columnNumber": 12
                },
                {
                    "functionName": "xhrAdapter",
                    "scriptId": "8419",
                    "url": "webpack-internal:///./node_modules/axios/lib/adapters/xhr.js",
                    "lineNumber": 60,
                    "columnNumber": 9
                },
                {
                    "functionName": "dispatchRequest",
                    "scriptId": "8407",
                    "url": "webpack-internal:///./node_modules/axios/lib/core/dispatchRequest.js",
                    "lineNumber": 52,
                    "columnNumber": 9
                },
                {
                    "functionName": "request",
                    "scriptId": "8395",
                    "url": "webpack-internal:///./node_modules/axios/lib/core/Axios.js",
                    "lineNumber": 141,
                    "columnNumber": 76
                },
                {
                    "functionName": "httpMethod",
                    "scriptId": "8395",
                    "url": "webpack-internal:///./node_modules/axios/lib/core/Axios.js",
                    "lineNumber": 180,
                    "columnNumber": 18
                },
                {
                    "functionName": "wrap",
                    "scriptId": "8394",
                    "url": "webpack-internal:///./node_modules/axios/lib/helpers/bind.js",
                    "lineNumber": 6,
                    "columnNumber": 14
                },
                {
                    "functionName": "onDialog",
                    "scriptId": "8510",
                    "url": "webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&",
                    "lineNumber": 19,
                    "columnNumber": 54
                },
                {
                    "functionName": "invokeWithErrorHandling",
                    "scriptId": "8372",
                    "url": "webpack-internal:///./node_modules/vue/dist/vue.runtime.esm.js",
                    "lineNumber": 3025,
                    "columnNumber": 29
                },
                {
                    "functionName": "invoker",
                    "scriptId": "8372",
                    "url": "webpack-internal:///./node_modules/vue/dist/vue.runtime.esm.js",
                    "lineNumber": 1826,
                    "columnNumber": 19
                },
                {
                    "functionName": "original_1._wrapper",
                    "scriptId": "8372",
                    "url": "webpack-internal:///./node_modules/vue/dist/vue.runtime.esm.js",
                    "lineNumber": 7460,
                    "columnNumber": 34
                }
            ]
        }
    },
    "_priority": "High",
    "_resourceType": "xhr",
    "cache": {},
    "connection": "231025",
    "request": {
        "method": "POST",
        "url": "http://127.0.0.1:8080/test",
        "httpVersion": "HTTP/1.1",
        "headers": [
            {
                "name": "Accept",
                "value": "application/json, text/plain, */*"
            },
            {
                "name": "Accept-Encoding",
                "value": "gzip, deflate, br"
            },
            {
                "name": "Accept-Language",
                "value": "zh-CN,zh;q=0.9"
            },
            {
                "name": "Connection",
                "value": "keep-alive"
            },
            {
                "name": "Content-Length",
                "value": "13"
            },
            {
                "name": "Content-Type",
                "value": "application/json"
            },
            {
                "name": "Host",
                "value": "127.0.0.1:8080"
            },
            {
                "name": "Origin",
                "value": "http://127.0.0.1:8080"
            },
            {
                "name": "Referer",
                "value": "http://127.0.0.1:8080/"
            },
            {
                "name": "Sec-Fetch-Dest",
                "value": "empty"
            },
            {
                "name": "Sec-Fetch-Mode",
                "value": "cors"
            },
            {
                "name": "Sec-Fetch-Site",
                "value": "same-origin"
            },
            {
                "name": "User-Agent",
                "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
            },
            {
                "name": "sec-ch-ua",
                "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
            },
            {
                "name": "sec-ch-ua-mobile",
                "value": "?0"
            },
            {
                "name": "sec-ch-ua-platform",
                "value": "\"macOS\""
            }
        ],
        "queryString": [
            {
                name: 'username',
                value: 'user123'
            },
            {
                name: 'password',
                value: '****'
            }
        ],
        "cookies": [],
        "headersSize": 629,
        "bodySize": 13,
        "postData": {
            "mimeType": "application/json",
            "text": "{\"b\":1,\"c\":2}"
        }
    },
    "response": {
        "status": 404,
        "statusText": "Not Found",
        "httpVersion": "HTTP/1.1",
        "headers": [
            {
                "name": "Connection",
                "value": "keep-alive"
            },
            {
                "name": "Content-Length",
                "value": "144"
            },
            {
                "name": "Content-Security-Policy",
                "value": "default-src 'none'"
            },
            {
                "name": "Content-Type",
                "value": "text/html; charset=utf-8"
            },
            {
                "name": "Date",
                "value": "Wed, 05 Oct 2022 07:24:59 GMT"
            },
            {
                "name": "Keep-Alive",
                "value": "timeout=5"
            },
            {
                "name": "X-Content-Type-Options",
                "value": "nosniff"
            },
            {
                "name": "X-Powered-By",
                "value": "Express"
            }
        ],
        "cookies": [],
        "content": {
            "size": 144,
            "mimeType": "text/html",
            "compression": 0
        },
        "redirectURL": "",
        "headersSize": 272,
        "bodySize": 144,
        "_transferSize": 416,
        "_error": null
    },
    "serverIPAddress": "127.0.0.1",
    "startedDateTime": "2022-10-05T07:24:59.338Z",
    "time": 6.3290000017685815,
    "timings": {
        "blocked": 2.8700000034952535,
        "dns": 0.0050000000000000044,
        "ssl": -1,
        "connect": 0.5910000000000001,
        "send": 0.1529999999999998,
        "wait": 2.3259999992428346,
        "receive": 0.3839999990304932,
        "_blocked_queueing": 2.3530000034952536
    }
}
