var $hTL4D$os = require("os");
var $hTL4D$path = require("path");
var $hTL4D$fs = require("fs");
var $hTL4D$http = require("http");
var $hTL4D$https = require("https");
require("net");
var $hTL4D$tls = require("tls");
var $hTL4D$events = require("events");
require("assert");
var $hTL4D$util = require("util");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
var $81121ea548f9c2a8$exports = {};
"use strict";
var $81121ea548f9c2a8$var$__createBinding = $81121ea548f9c2a8$exports && $81121ea548f9c2a8$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $81121ea548f9c2a8$var$__setModuleDefault = $81121ea548f9c2a8$exports && $81121ea548f9c2a8$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $81121ea548f9c2a8$var$__importStar = $81121ea548f9c2a8$exports && $81121ea548f9c2a8$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $81121ea548f9c2a8$var$__createBinding(result, mod, k);
    }
    $81121ea548f9c2a8$var$__setModuleDefault(result, mod);
    return result;
};
var $81121ea548f9c2a8$var$__awaiter = $81121ea548f9c2a8$exports && $81121ea548f9c2a8$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty($81121ea548f9c2a8$exports, "__esModule", {
    value: true
});
$81121ea548f9c2a8$exports.getIDToken = $81121ea548f9c2a8$exports.getState = $81121ea548f9c2a8$exports.saveState = $81121ea548f9c2a8$exports.group = $81121ea548f9c2a8$exports.endGroup = $81121ea548f9c2a8$exports.startGroup = $81121ea548f9c2a8$exports.info = $81121ea548f9c2a8$exports.notice = $81121ea548f9c2a8$exports.warning = $81121ea548f9c2a8$exports.error = $81121ea548f9c2a8$exports.debug = $81121ea548f9c2a8$exports.isDebug = $81121ea548f9c2a8$exports.setFailed = $81121ea548f9c2a8$exports.setCommandEcho = $81121ea548f9c2a8$exports.setOutput = $81121ea548f9c2a8$exports.getBooleanInput = $81121ea548f9c2a8$exports.getMultilineInput = $81121ea548f9c2a8$exports.getInput = $81121ea548f9c2a8$exports.addPath = $81121ea548f9c2a8$exports.setSecret = $81121ea548f9c2a8$exports.exportVariable = $81121ea548f9c2a8$exports.ExitCode = void 0;
var $b59f2bc72c23f329$exports = {};
"use strict";
var $b59f2bc72c23f329$var$__createBinding = $b59f2bc72c23f329$exports && $b59f2bc72c23f329$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $b59f2bc72c23f329$var$__setModuleDefault = $b59f2bc72c23f329$exports && $b59f2bc72c23f329$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b59f2bc72c23f329$var$__importStar = $b59f2bc72c23f329$exports && $b59f2bc72c23f329$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $b59f2bc72c23f329$var$__createBinding(result, mod, k);
    }
    $b59f2bc72c23f329$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($b59f2bc72c23f329$exports, "__esModule", {
    value: true
});
$b59f2bc72c23f329$exports.issue = $b59f2bc72c23f329$exports.issueCommand = void 0;

const $b59f2bc72c23f329$var$os = $b59f2bc72c23f329$var$__importStar($hTL4D$os);
var $0855c1e623d2c62b$exports = {};
"use strict";
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty($0855c1e623d2c62b$exports, "__esModule", {
    value: true
});
$0855c1e623d2c62b$exports.toCommandProperties = $0855c1e623d2c62b$exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */ function $0855c1e623d2c62b$var$toCommandValue(input) {
    if (input === null || input === undefined) return '';
    else if (typeof input === 'string' || input instanceof String) return input;
    return JSON.stringify(input);
}
$0855c1e623d2c62b$exports.toCommandValue = $0855c1e623d2c62b$var$toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */ function $0855c1e623d2c62b$var$toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) return {
    };
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
$0855c1e623d2c62b$exports.toCommandProperties = $0855c1e623d2c62b$var$toCommandProperties;


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $b59f2bc72c23f329$var$issueCommand(command, properties, message) {
    const cmd = new $b59f2bc72c23f329$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $b59f2bc72c23f329$var$os.EOL);
}
$b59f2bc72c23f329$exports.issueCommand = $b59f2bc72c23f329$var$issueCommand;
function $b59f2bc72c23f329$var$issue(name, message = '') {
    $b59f2bc72c23f329$var$issueCommand(name, {
    }, message);
}
$b59f2bc72c23f329$exports.issue = $b59f2bc72c23f329$var$issue;
const $b59f2bc72c23f329$var$CMD_STRING = '::';
class $b59f2bc72c23f329$var$Command {
    constructor(command, properties, message){
        if (!command) command = 'missing.command';
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $b59f2bc72c23f329$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ',';
                    cmdStr += `${key}=${$b59f2bc72c23f329$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$b59f2bc72c23f329$var$CMD_STRING}${$b59f2bc72c23f329$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $b59f2bc72c23f329$var$escapeData(s) {
    return $0855c1e623d2c62b$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function $b59f2bc72c23f329$var$escapeProperty(s) {
    return $0855c1e623d2c62b$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}


var $203e4b70446299ab$exports = {};
"use strict";
// For internal use, subject to change.
var $203e4b70446299ab$var$__createBinding = $203e4b70446299ab$exports && $203e4b70446299ab$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $203e4b70446299ab$var$__setModuleDefault = $203e4b70446299ab$exports && $203e4b70446299ab$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $203e4b70446299ab$var$__importStar = $203e4b70446299ab$exports && $203e4b70446299ab$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $203e4b70446299ab$var$__createBinding(result, mod, k);
    }
    $203e4b70446299ab$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($203e4b70446299ab$exports, "__esModule", {
    value: true
});
$203e4b70446299ab$exports.issueCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $203e4b70446299ab$var$fs = $203e4b70446299ab$var$__importStar($hTL4D$fs);

const $203e4b70446299ab$var$os = $203e4b70446299ab$var$__importStar($hTL4D$os);

function $203e4b70446299ab$var$issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$203e4b70446299ab$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $203e4b70446299ab$var$fs.appendFileSync(filePath, `${$0855c1e623d2c62b$exports.toCommandValue(message)}${$203e4b70446299ab$var$os.EOL}`, {
        encoding: 'utf8'
    });
}
$203e4b70446299ab$exports.issueCommand = $203e4b70446299ab$var$issueCommand;




const $81121ea548f9c2a8$var$os = $81121ea548f9c2a8$var$__importStar($hTL4D$os);

const $81121ea548f9c2a8$var$path = $81121ea548f9c2a8$var$__importStar($hTL4D$path);
var $e685246c7fc3dd3c$exports = {};
"use strict";
var $e685246c7fc3dd3c$var$__awaiter = $e685246c7fc3dd3c$exports && $e685246c7fc3dd3c$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty($e685246c7fc3dd3c$exports, "__esModule", {
    value: true
});
$e685246c7fc3dd3c$exports.OidcClient = void 0;
var $28f3a57802f4c213$exports = {};
"use strict";
Object.defineProperty($28f3a57802f4c213$exports, "__esModule", {
    value: true
});


var $c1d5d5d59a5c0c89$exports = {};
"use strict";
Object.defineProperty($c1d5d5d59a5c0c89$exports, "__esModule", {
    value: true
});
function $c1d5d5d59a5c0c89$var$getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if ($c1d5d5d59a5c0c89$var$checkBypass(reqUrl)) return proxyUrl;
    let proxyVar;
    if (usingSsl) proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    else proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    if (proxyVar) proxyUrl = new URL(proxyVar);
    return proxyUrl;
}
$c1d5d5d59a5c0c89$exports.getProxyUrl = $c1d5d5d59a5c0c89$var$getProxyUrl;
function $c1d5d5d59a5c0c89$var$checkBypass(reqUrl) {
    if (!reqUrl.hostname) return false;
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) return false;
    // Determine the request port
    let reqPort;
    if (reqUrl.port) reqPort = Number(reqUrl.port);
    else if (reqUrl.protocol === 'http:') reqPort = 80;
    else if (reqUrl.protocol === 'https:') reqPort = 443;
    // Format the request hostname and hostname with port
    let upperReqHosts = [
        reqUrl.hostname.toUpperCase()
    ];
    if (typeof reqPort === 'number') upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy.split(',').map((x)=>x.trim().toUpperCase()
    ).filter((x)=>x
    )){
        if (upperReqHosts.some((x)=>x === upperNoProxyItem
        )) return true;
    }
    return false;
}
$c1d5d5d59a5c0c89$exports.checkBypass = $c1d5d5d59a5c0c89$var$checkBypass;


let $28f3a57802f4c213$var$tunnel;
var $28f3a57802f4c213$var$HttpCodes;
(function(HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})($28f3a57802f4c213$var$HttpCodes = $28f3a57802f4c213$exports.HttpCodes || ($28f3a57802f4c213$exports.HttpCodes = {
}));
var $28f3a57802f4c213$var$Headers;
(function(Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})($28f3a57802f4c213$var$Headers = $28f3a57802f4c213$exports.Headers || ($28f3a57802f4c213$exports.Headers = {
}));
var $28f3a57802f4c213$var$MediaTypes;
(function(MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})($28f3a57802f4c213$var$MediaTypes = $28f3a57802f4c213$exports.MediaTypes || ($28f3a57802f4c213$exports.MediaTypes = {
}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */ function $28f3a57802f4c213$var$getProxyUrl(serverUrl) {
    let proxyUrl = $c1d5d5d59a5c0c89$exports.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
$28f3a57802f4c213$exports.getProxyUrl = $28f3a57802f4c213$var$getProxyUrl;
const $28f3a57802f4c213$var$HttpRedirectCodes = [
    $28f3a57802f4c213$var$HttpCodes.MovedPermanently,
    $28f3a57802f4c213$var$HttpCodes.ResourceMoved,
    $28f3a57802f4c213$var$HttpCodes.SeeOther,
    $28f3a57802f4c213$var$HttpCodes.TemporaryRedirect,
    $28f3a57802f4c213$var$HttpCodes.PermanentRedirect
];
const $28f3a57802f4c213$var$HttpResponseRetryCodes = [
    $28f3a57802f4c213$var$HttpCodes.BadGateway,
    $28f3a57802f4c213$var$HttpCodes.ServiceUnavailable,
    $28f3a57802f4c213$var$HttpCodes.GatewayTimeout
];
const $28f3a57802f4c213$var$RetryableHttpVerbs = [
    'OPTIONS',
    'GET',
    'DELETE',
    'HEAD'
];
const $28f3a57802f4c213$var$ExponentialBackoffCeiling = 10;
const $28f3a57802f4c213$var$ExponentialBackoffTimeSlice = 5;
class $28f3a57802f4c213$var$HttpClientError extends Error {
    constructor(message, statusCode1){
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode1;
        Object.setPrototypeOf(this, $28f3a57802f4c213$var$HttpClientError.prototype);
    }
}
$28f3a57802f4c213$exports.HttpClientError = $28f3a57802f4c213$var$HttpClientError;
class $28f3a57802f4c213$var$HttpClientResponse {
    constructor(message1){
        this.message = message1;
    }
    readBody() {
        return new Promise(async (resolve, reject)=>{
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk)=>{
                output = Buffer.concat([
                    output,
                    chunk
                ]);
            });
            this.message.on('end', ()=>{
                resolve(output.toString());
            });
        });
    }
}
$28f3a57802f4c213$exports.HttpClientResponse = $28f3a57802f4c213$var$HttpClientResponse;
function $28f3a57802f4c213$var$isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
$28f3a57802f4c213$exports.isHttps = $28f3a57802f4c213$var$isHttps;
parcelRequire.register("kafVF", function(module, exports) {

module.exports = (parcelRequire("4NJGJ"));

});
parcelRequire.register("4NJGJ", function(module, exports) {

$parcel$export(module.exports, "httpOverHttp", () => $37ef2dbe8aad52a2$export$25cbd437c61a3835, (v) => $37ef2dbe8aad52a2$export$25cbd437c61a3835 = v);
$parcel$export(module.exports, "httpsOverHttp", () => $37ef2dbe8aad52a2$export$c06e3df7111bae43, (v) => $37ef2dbe8aad52a2$export$c06e3df7111bae43 = v);
$parcel$export(module.exports, "httpOverHttps", () => $37ef2dbe8aad52a2$export$5d50e36ef656139f, (v) => $37ef2dbe8aad52a2$export$5d50e36ef656139f = v);
$parcel$export(module.exports, "httpsOverHttps", () => $37ef2dbe8aad52a2$export$212d6605025321cc, (v) => $37ef2dbe8aad52a2$export$212d6605025321cc = v);
$parcel$export(module.exports, "debug", () => $37ef2dbe8aad52a2$export$1c9f709888824e05, (v) => $37ef2dbe8aad52a2$export$1c9f709888824e05 = v);
var $37ef2dbe8aad52a2$export$25cbd437c61a3835;
var $37ef2dbe8aad52a2$export$c06e3df7111bae43;
var $37ef2dbe8aad52a2$export$5d50e36ef656139f;
var $37ef2dbe8aad52a2$export$212d6605025321cc;
var $37ef2dbe8aad52a2$export$1c9f709888824e05;
'use strict';







$37ef2dbe8aad52a2$export$25cbd437c61a3835 = $37ef2dbe8aad52a2$var$httpOverHttp;
$37ef2dbe8aad52a2$export$c06e3df7111bae43 = $37ef2dbe8aad52a2$var$httpsOverHttp;
$37ef2dbe8aad52a2$export$5d50e36ef656139f = $37ef2dbe8aad52a2$var$httpOverHttps;
$37ef2dbe8aad52a2$export$212d6605025321cc = $37ef2dbe8aad52a2$var$httpsOverHttps;
function $37ef2dbe8aad52a2$var$httpOverHttp(options) {
    var agent = new $37ef2dbe8aad52a2$var$TunnelingAgent(options);
    agent.request = $hTL4D$http.request;
    return agent;
}
function $37ef2dbe8aad52a2$var$httpsOverHttp(options) {
    var agent = new $37ef2dbe8aad52a2$var$TunnelingAgent(options);
    agent.request = $hTL4D$http.request;
    agent.createSocket = $37ef2dbe8aad52a2$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $37ef2dbe8aad52a2$var$httpOverHttps(options) {
    var agent = new $37ef2dbe8aad52a2$var$TunnelingAgent(options);
    agent.request = $hTL4D$https.request;
    return agent;
}
function $37ef2dbe8aad52a2$var$httpsOverHttps(options) {
    var agent = new $37ef2dbe8aad52a2$var$TunnelingAgent(options);
    agent.request = $hTL4D$https.request;
    agent.createSocket = $37ef2dbe8aad52a2$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $37ef2dbe8aad52a2$var$TunnelingAgent(options1) {
    var self = this;
    self.options = options1 || {
    };
    self.proxyOptions = self.options.proxy || {
    };
    self.maxSockets = self.options.maxSockets || $hTL4D$http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on('free', function onFree(socket, host, port, localAddress) {
        var options = $37ef2dbe8aad52a2$var$toOptions(host, port, localAddress);
        for(var i = 0, len = self.requests.length; i < len; ++i){
            var pending = self.requests[i];
            if (pending.host === options.host && pending.port === options.port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
$hTL4D$util.inherits($37ef2dbe8aad52a2$var$TunnelingAgent, $hTL4D$events.EventEmitter);
$37ef2dbe8aad52a2$var$TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = $37ef2dbe8aad52a2$var$mergeOptions({
        request: req
    }, self.options, $37ef2dbe8aad52a2$var$toOptions(host, port, localAddress));
    if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options);
        return;
    }
    // If we are under maxSockets create a new one.
    self.createSocket(options, function(socket) {
        socket.on('free', onFree);
        socket.on('close', onCloseOrRemove);
        socket.on('agentRemove', onCloseOrRemove);
        req.onSocket(socket);
        function onFree() {
            self.emit('free', socket, options);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener('free', onFree);
            socket.removeListener('close', onCloseOrRemove);
            socket.removeListener('agentRemove', onCloseOrRemove);
        }
    });
};
$37ef2dbe8aad52a2$var$TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {
    };
    self.sockets.push(placeholder);
    var connectOptions = $37ef2dbe8aad52a2$var$mergeOptions({
    }, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
            host: options.host + ':' + options.port
        }
    });
    if (options.localAddress) connectOptions.localAddress = options.localAddress;
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {
        };
        connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
    }
    $37ef2dbe8aad52a2$var$debug('making CONNECT request');
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false; // for v0.6
    connectReq.once('response', onResponse); // for v0.6
    connectReq.once('upgrade', onUpgrade); // for v0.6
    connectReq.once('connect', onConnect); // for v0.7 or later
    connectReq.once('error', onError);
    connectReq.end();
    function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode !== 200) {
            $37ef2dbe8aad52a2$var$debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
            socket.destroy();
            var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        if (head.length > 0) {
            $37ef2dbe8aad52a2$var$debug('got illegal response body from proxy');
            socket.destroy();
            var error = new Error('got illegal response body from proxy');
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        $37ef2dbe8aad52a2$var$debug('tunneling connection has established');
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        $37ef2dbe8aad52a2$var$debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
    }
};
$37ef2dbe8aad52a2$var$TunnelingAgent.prototype.removeSocket = function removeSocket(socket1) {
    var pos = this.sockets.indexOf(socket1);
    if (pos === -1) return;
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
        pending.request.onSocket(socket);
    });
};
function $37ef2dbe8aad52a2$var$createSecureSocket(options, cb) {
    var self = this;
    $37ef2dbe8aad52a2$var$TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader('host');
        var tlsOptions = $37ef2dbe8aad52a2$var$mergeOptions({
        }, self.options, {
            socket: socket,
            servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
        });
        // 0 is dummy port for v0.6
        var secureSocket = $hTL4D$tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function $37ef2dbe8aad52a2$var$toOptions(host, port, localAddress) {
    if (typeof host === 'string') return {
        host: host,
        port: port,
        localAddress: localAddress
    };
    return host; // for v0.11 or later
}
function $37ef2dbe8aad52a2$var$mergeOptions(target) {
    for(var i = 1, len = arguments.length; i < len; ++i){
        var overrides = arguments[i];
        if (typeof overrides === 'object') {
            var keys = Object.keys(overrides);
            for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                var k = keys[j];
                if (overrides[k] !== undefined) target[k] = overrides[k];
            }
        }
    }
    return target;
}
var $37ef2dbe8aad52a2$var$debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) $37ef2dbe8aad52a2$var$debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') args[0] = 'TUNNEL: ' + args[0];
    else args.unshift('TUNNEL:');
    console.error.apply(console, args);
};
else $37ef2dbe8aad52a2$var$debug = function() {
};
$37ef2dbe8aad52a2$export$1c9f709888824e05 = $37ef2dbe8aad52a2$var$debug; // for test

});



class $28f3a57802f4c213$var$HttpClient {
    constructor(userAgent, handlers, requestOptions){
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) this._ignoreSslError = requestOptions.ignoreSslError;
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) this._allowRedirects = requestOptions.allowRedirects;
            if (requestOptions.allowRedirectDowngrade != null) this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            if (requestOptions.maxRedirects != null) this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            if (requestOptions.keepAlive != null) this._keepAlive = requestOptions.keepAlive;
            if (requestOptions.allowRetries != null) this._allowRetries = requestOptions.allowRetries;
            if (requestOptions.maxRetries != null) this._maxRetries = requestOptions.maxRetries;
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {
        });
    }
    get(requestUrl1, additionalHeaders1) {
        return this.request('GET', requestUrl1, null, additionalHeaders1 || {
        });
    }
    del(requestUrl2, additionalHeaders2) {
        return this.request('DELETE', requestUrl2, null, additionalHeaders2 || {
        });
    }
    post(requestUrl3, data, additionalHeaders3) {
        return this.request('POST', requestUrl3, data, additionalHeaders3 || {
        });
    }
    patch(requestUrl4, data1, additionalHeaders4) {
        return this.request('PATCH', requestUrl4, data1, additionalHeaders4 || {
        });
    }
    put(requestUrl5, data2, additionalHeaders5) {
        return this.request('PUT', requestUrl5, data2, additionalHeaders5 || {
        });
    }
    head(requestUrl6, additionalHeaders6) {
        return this.request('HEAD', requestUrl6, null, additionalHeaders6 || {
        });
    }
    sendStream(verb, requestUrl7, stream, additionalHeaders7) {
        return this.request(verb, requestUrl7, stream, additionalHeaders7);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */ async getJson(requestUrl8, additionalHeaders8 = {
    }) {
        additionalHeaders8[$28f3a57802f4c213$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders8, $28f3a57802f4c213$var$Headers.Accept, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl8, additionalHeaders8);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl9, obj3, additionalHeaders9 = {
    }) {
        let data = JSON.stringify(obj3, null, 2);
        additionalHeaders9[$28f3a57802f4c213$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders9, $28f3a57802f4c213$var$Headers.Accept, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        additionalHeaders9[$28f3a57802f4c213$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders9, $28f3a57802f4c213$var$Headers.ContentType, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl9, data, additionalHeaders9);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl10, obj1, additionalHeaders10 = {
    }) {
        let data = JSON.stringify(obj1, null, 2);
        additionalHeaders10[$28f3a57802f4c213$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders10, $28f3a57802f4c213$var$Headers.Accept, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        additionalHeaders10[$28f3a57802f4c213$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders10, $28f3a57802f4c213$var$Headers.ContentType, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl10, data, additionalHeaders10);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl11, obj2, additionalHeaders11 = {
    }) {
        let data = JSON.stringify(obj2, null, 2);
        additionalHeaders11[$28f3a57802f4c213$var$Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders11, $28f3a57802f4c213$var$Headers.Accept, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        additionalHeaders11[$28f3a57802f4c213$var$Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders11, $28f3a57802f4c213$var$Headers.ContentType, $28f3a57802f4c213$var$MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl11, data, additionalHeaders11);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */ async request(verb1, requestUrl12, data3, headers) {
        if (this._disposed) throw new Error('Client has already been disposed.');
        let parsedUrl = new URL(requestUrl12);
        let info = this._prepareRequest(verb1, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && $28f3a57802f4c213$var$RetryableHttpVerbs.indexOf(verb1) != -1 ? this._maxRetries + 1 : 1;
        let numTries = 0;
        let response;
        while(numTries < maxTries){
            response = await this.requestRaw(info, data3);
            // Check if it's an authentication challenge
            if (response && response.message && response.message.statusCode === $28f3a57802f4c213$var$HttpCodes.Unauthorized) {
                let authenticationHandler;
                for(let i = 0; i < this.handlers.length; i++)if (this.handlers[i].canHandleAuthentication(response)) {
                    authenticationHandler = this.handlers[i];
                    break;
                }
                if (authenticationHandler) return authenticationHandler.handleAuthentication(this, info, data3);
                else // We have received an unauthorized response but have no handlers to handle it.
                // Let the response return to the caller.
                return response;
            }
            let redirectsRemaining = this._maxRedirects;
            while($28f3a57802f4c213$var$HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0){
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) break;
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for(let header in headers)// header names are case insensitive
                    if (header.toLowerCase() === 'authorization') delete headers[header];
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb1, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data3);
                redirectsRemaining--;
            }
            if ($28f3a57802f4c213$var$HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) // If not a retry code, return immediately instead of retrying
            return response;
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */ dispose() {
        if (this._agent) this._agent.destroy();
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */ requestRaw(info, data4) {
        return new Promise((resolve, reject)=>{
            let callbackForResult = function(err, res) {
                if (err) reject(err);
                resolve(res);
            };
            this.requestRawWithCallback(info, data4, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */ requestRawWithCallback(info1, data5, onResult) {
        let socket;
        if (typeof data5 === 'string') info1.options.headers['Content-Length'] = Buffer.byteLength(data5, 'utf8');
        let callbackCalled = false;
        let handleResult = (err, res)=>{
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info1.httpModule.request(info1.options, (msg)=>{
            let res = new $28f3a57802f4c213$var$HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', (sock)=>{
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 180000, ()=>{
            if (socket) socket.end();
            handleResult(new Error('Request timeout: ' + info1.options.path), null);
        });
        req.on('error', function(err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data5 && typeof data5 === 'string') req.write(data5, 'utf8');
        if (data5 && typeof data5 !== 'string') {
            data5.on('close', function() {
                req.end();
            });
            data5.pipe(req);
        } else req.end();
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */ getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl13, headers1) {
        const info = {
        };
        info.parsedUrl = requestUrl13;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? $hTL4D$https : $hTL4D$http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {
        };
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers1);
        if (this.userAgent != null) info.options.headers['user-agent'] = this.userAgent;
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) this.handlers.forEach((handler)=>{
            handler.prepareRequest(info.options);
        });
        return info;
    }
    _mergeHeaders(headers2) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c, k)=>(c[k.toLowerCase()] = obj[k], c)
            , {
            })
        ;
        if (this.requestOptions && this.requestOptions.headers) return Object.assign({
        }, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers2));
        return lowercaseKeys(headers2 || {
        });
    }
    _getExistingOrDefaultHeader(additionalHeaders12, header, _default) {
        const lowercaseKeys = (obj)=>Object.keys(obj).reduce((c, k)=>(c[k.toLowerCase()] = obj[k], c)
            , {
            })
        ;
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        return additionalHeaders12[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = $c1d5d5d59a5c0c89$exports.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) agent = this._proxyAgent;
        if (this._keepAlive && !useProxy) agent = this._agent;
        // if agent is already assigned use that agent.
        if (!!agent) return agent;
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) maxSockets = this.requestOptions.maxSockets || $hTL4D$http.globalAgent.maxSockets;
        if (useProxy) {
            // If using proxy, need tunnel
            if (!$28f3a57802f4c213$var$tunnel) $28f3a57802f4c213$var$tunnel = (parcelRequire("kafVF"));
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...(proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    },
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) tunnelAgent = overHttps ? $28f3a57802f4c213$var$tunnel.httpsOverHttps : $28f3a57802f4c213$var$tunnel.httpsOverHttp;
            else tunnelAgent = overHttps ? $28f3a57802f4c213$var$tunnel.httpOverHttps : $28f3a57802f4c213$var$tunnel.httpOverHttp;
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = {
                keepAlive: this._keepAlive,
                maxSockets: maxSockets
            };
            agent = usingSsl ? new $hTL4D$https.Agent(options) : new $hTL4D$http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) agent = usingSsl ? $hTL4D$https.globalAgent : $hTL4D$http.globalAgent;
        if (usingSsl && this._ignoreSslError) // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
        // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
        // we have to cast it to any and change it directly
        agent.options = Object.assign(agent.options || {
        }, {
            rejectUnauthorized: false
        });
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min($28f3a57802f4c213$var$ExponentialBackoffCeiling, retryNumber);
        const ms = $28f3a57802f4c213$var$ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise((resolve)=>setTimeout(()=>resolve()
            , ms)
        );
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) return a;
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject)=>{
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {
                }
            };
            // not found leads to null obj returned
            if (statusCode == $28f3a57802f4c213$var$HttpCodes.NotFound) resolve(response);
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) obj = JSON.parse(contents, $28f3a57802f4c213$var$HttpClient.dateTimeDeserializer);
                    else obj = JSON.parse(contents);
                    response.result = obj;
                }
                response.headers = res.message.headers;
            } catch (err) {
            // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) msg = obj.message;
                else if (contents && contents.length > 0) // it may be the case that the exception is in the body message as string
                msg = contents;
                else msg = 'Failed request: (' + statusCode + ')';
                let err = new $28f3a57802f4c213$var$HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            } else resolve(response);
        });
    }
}
$28f3a57802f4c213$exports.HttpClient = $28f3a57802f4c213$var$HttpClient;


var $031bd419bb67fec9$exports = {};
"use strict";
Object.defineProperty($031bd419bb67fec9$exports, "__esModule", {
    value: true
});
class $031bd419bb67fec9$var$BasicCredentialHandler {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers['Authorization'] = 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
$031bd419bb67fec9$exports.BasicCredentialHandler = $031bd419bb67fec9$var$BasicCredentialHandler;
class $031bd419bb67fec9$var$BearerCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options1) {
        options1.headers['Authorization'] = 'Bearer ' + this.token;
    }
    // This handler cannot handle 401
    canHandleAuthentication(response1) {
        return false;
    }
    handleAuthentication(httpClient1, requestInfo1, objs1) {
        return null;
    }
}
$031bd419bb67fec9$exports.BearerCredentialHandler = $031bd419bb67fec9$var$BearerCredentialHandler;
class $031bd419bb67fec9$var$PersonalAccessTokenCredentialHandler {
    constructor(token1){
        this.token = token1;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options2) {
        options2.headers['Authorization'] = 'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response2) {
        return false;
    }
    handleAuthentication(httpClient2, requestInfo2, objs2) {
        return null;
    }
}
$031bd419bb67fec9$exports.PersonalAccessTokenCredentialHandler = $031bd419bb67fec9$var$PersonalAccessTokenCredentialHandler;



class $e685246c7fc3dd3c$var$OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new $28f3a57802f4c213$exports.HttpClient('actions/oidc-client', [
            new $031bd419bb67fec9$exports.BearerCredentialHandler($e685246c7fc3dd3c$var$OidcClient.getRequestToken())
        ], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        return runtimeUrl;
    }
    static getCall(id_token_url1) {
        var _a;
        return $e685246c7fc3dd3c$var$__awaiter(this, void 0, void 0, function*() {
            const httpclient = $e685246c7fc3dd3c$var$OidcClient.createHttpClient();
            const res = yield httpclient.getJson(id_token_url1).catch((error)=>{
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) throw new Error('Response json body do not have ID Token field');
            return id_token;
        });
    }
    static getIDToken(audience) {
        return $e685246c7fc3dd3c$var$__awaiter(this, void 0, void 0, function*() {
            try {
                // New ID Token is requested from action service
                let id_token_url = $e685246c7fc3dd3c$var$OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                $81121ea548f9c2a8$exports.debug(`ID token url is ${id_token_url}`);
                const id_token = yield $e685246c7fc3dd3c$var$OidcClient.getCall(id_token_url);
                $81121ea548f9c2a8$exports.setSecret(id_token);
                return id_token;
            } catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
$e685246c7fc3dd3c$exports.OidcClient = $e685246c7fc3dd3c$var$OidcClient;


/**
 * The code to exit an action
 */ var $81121ea548f9c2a8$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($81121ea548f9c2a8$var$ExitCode = $81121ea548f9c2a8$exports.ExitCode || ($81121ea548f9c2a8$exports.ExitCode = {
}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $81121ea548f9c2a8$var$exportVariable(name, val) {
    const convertedVal = $0855c1e623d2c62b$exports.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${$81121ea548f9c2a8$var$os.EOL}${convertedVal}${$81121ea548f9c2a8$var$os.EOL}${delimiter}`;
        $203e4b70446299ab$exports.issueCommand('ENV', commandValue);
    } else $b59f2bc72c23f329$exports.issueCommand('set-env', {
        name: name
    }, convertedVal);
}
$81121ea548f9c2a8$exports.exportVariable = $81121ea548f9c2a8$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $81121ea548f9c2a8$var$setSecret(secret) {
    $b59f2bc72c23f329$exports.issueCommand('add-mask', {
    }, secret);
}
$81121ea548f9c2a8$exports.setSecret = $81121ea548f9c2a8$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $81121ea548f9c2a8$var$addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) $203e4b70446299ab$exports.issueCommand('PATH', inputPath);
    else $b59f2bc72c23f329$exports.issueCommand('add-path', {
    }, inputPath);
    process.env['PATH'] = `${inputPath}${$81121ea548f9c2a8$var$path.delimiter}${process.env['PATH']}`;
}
$81121ea548f9c2a8$exports.addPath = $81121ea548f9c2a8$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $81121ea548f9c2a8$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
$81121ea548f9c2a8$exports.getInput = $81121ea548f9c2a8$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $81121ea548f9c2a8$var$getMultilineInput(name, options) {
    const inputs = $81121ea548f9c2a8$var$getInput(name, options).split('\n').filter((x)=>x !== ''
    );
    return inputs;
}
$81121ea548f9c2a8$exports.getMultilineInput = $81121ea548f9c2a8$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $81121ea548f9c2a8$var$getBooleanInput(name, options) {
    const trueValue = [
        'true',
        'True',
        'TRUE'
    ];
    const falseValue = [
        'false',
        'False',
        'FALSE'
    ];
    const val = $81121ea548f9c2a8$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
$81121ea548f9c2a8$exports.getBooleanInput = $81121ea548f9c2a8$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $81121ea548f9c2a8$var$setOutput(name, value) {
    process.stdout.write($81121ea548f9c2a8$var$os.EOL);
    $b59f2bc72c23f329$exports.issueCommand('set-output', {
        name: name
    }, value);
}
$81121ea548f9c2a8$exports.setOutput = $81121ea548f9c2a8$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $81121ea548f9c2a8$var$setCommandEcho(enabled) {
    $b59f2bc72c23f329$exports.issue('echo', enabled ? 'on' : 'off');
}
$81121ea548f9c2a8$exports.setCommandEcho = $81121ea548f9c2a8$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $81121ea548f9c2a8$var$setFailed(message) {
    process.exitCode = $81121ea548f9c2a8$var$ExitCode.Failure;
    $81121ea548f9c2a8$var$error(message);
}
$81121ea548f9c2a8$exports.setFailed = $81121ea548f9c2a8$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $81121ea548f9c2a8$var$isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
$81121ea548f9c2a8$exports.isDebug = $81121ea548f9c2a8$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $81121ea548f9c2a8$var$debug(message) {
    $b59f2bc72c23f329$exports.issueCommand('debug', {
    }, message);
}
$81121ea548f9c2a8$exports.debug = $81121ea548f9c2a8$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $81121ea548f9c2a8$var$error(message, properties = {
}) {
    $b59f2bc72c23f329$exports.issueCommand('error', $0855c1e623d2c62b$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$81121ea548f9c2a8$exports.error = $81121ea548f9c2a8$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $81121ea548f9c2a8$var$warning(message, properties = {
}) {
    $b59f2bc72c23f329$exports.issueCommand('warning', $0855c1e623d2c62b$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$81121ea548f9c2a8$exports.warning = $81121ea548f9c2a8$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $81121ea548f9c2a8$var$notice(message, properties = {
}) {
    $b59f2bc72c23f329$exports.issueCommand('notice', $0855c1e623d2c62b$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$81121ea548f9c2a8$exports.notice = $81121ea548f9c2a8$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $81121ea548f9c2a8$var$info(message) {
    process.stdout.write(message + $81121ea548f9c2a8$var$os.EOL);
}
$81121ea548f9c2a8$exports.info = $81121ea548f9c2a8$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $81121ea548f9c2a8$var$startGroup(name) {
    $b59f2bc72c23f329$exports.issue('group', name);
}
$81121ea548f9c2a8$exports.startGroup = $81121ea548f9c2a8$var$startGroup;
/**
 * End an output group.
 */ function $81121ea548f9c2a8$var$endGroup() {
    $b59f2bc72c23f329$exports.issue('endgroup');
}
$81121ea548f9c2a8$exports.endGroup = $81121ea548f9c2a8$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $81121ea548f9c2a8$var$group(name, fn) {
    return $81121ea548f9c2a8$var$__awaiter(this, void 0, void 0, function*() {
        $81121ea548f9c2a8$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $81121ea548f9c2a8$var$endGroup();
        }
        return result;
    });
}
$81121ea548f9c2a8$exports.group = $81121ea548f9c2a8$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $81121ea548f9c2a8$var$saveState(name, value) {
    $b59f2bc72c23f329$exports.issueCommand('save-state', {
        name: name
    }, value);
}
$81121ea548f9c2a8$exports.saveState = $81121ea548f9c2a8$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $81121ea548f9c2a8$var$getState(name) {
    return process.env[`STATE_${name}`] || '';
}
$81121ea548f9c2a8$exports.getState = $81121ea548f9c2a8$var$getState;
function $81121ea548f9c2a8$var$getIDToken(aud) {
    return $81121ea548f9c2a8$var$__awaiter(this, void 0, void 0, function*() {
        return yield $e685246c7fc3dd3c$exports.OidcClient.getIDToken(aud);
    });
}
$81121ea548f9c2a8$exports.getIDToken = $81121ea548f9c2a8$var$getIDToken;


try {
    const token = $81121ea548f9c2a8$exports.getInput("token");
    console.log(`token ${token.length}`);
} catch (error) {
    $81121ea548f9c2a8$exports.setFailed(error.message);
}


