import CryptoJS from "crypto-js"
const common = {}
common.KEY = window.localStorage.KEY || 'sadfasasdf_fasdfas-_fadsfasdf-asdfasd'
common.SID = window.localStorage.SID || 'sadfasasdf_fasdfas-_fadsfasdf-asdfasd'
common.version = 1
common.difTime = 0
common.apiUrl = {
    login: '/account/erpLogin.do',
    code_login: '/account/verifiLogin.do',
    getDate: '/system/date.do',
    most: '/handle/control.do'
}

common.addSID = function addSID(url) {
    if (this.SID && this.SID !== undefined) {
        return url + ';jsessionid=' + this.SID
    } else {
        return url
    }
}
common.getDate = function getDate(cb) {
    var _self = this
    if (_self.difTime && cb) {
        return cb()
    } else if (_self.difTime) {
        return
    } else {
        this.commonGet(this.urlCommon + this.apiUrl.getDate).then(function (response) {
            if (response.code === '1c01') {
                var timestamp = Date.parse(new Date())
                window.localStorage.difTime = response.biz_result.time - timestamp;
                _self.difTime = response.biz_result.time - timestamp;
                if (cb) cb()
            } else {

            }
        }, function (err) {

        });
    }
}

common.getSign = function getSign(str) {
    var _self = this;
    if (!_self.KEY) {
        _self.KEY = 'test'
    }
    if (!str) {
        str = 'test'
    }
    var signStr = CryptoJS.HmacSHA1(str, _self.KEY).toString(CryptoJS.enc.Base64)
    return signStr
}

common.commonPost = function (url, data) {
    url = this.addSID(url);
    if (data || typeof data === 'object') {
        data.version = this.version
        let localTime = new Date().getTime()
        data.time = localTime + this.difTime
        data.sign = this.getSign('biz_module=' + data.biz_module + '&biz_method=' + data.biz_method + '&time=' + data.time)
    }
    var req = new Request(url, {method: "POST", cache: 'reload', body: data})
    return new Promise((resolve, reject) => {
        fetch(req).then(response => {
            if (response.ok) {
                response.json().then((result) => {
                    resolve(result)
                })
            } else {
                console.log('请求失败，状态码为', response.status);
            }
        }, error => {
            reject(error)
        })
    });
}

common.commonGet = function commonGet(url) {
    var req = new Request(url, {method: "GET", cache: 'reload'})
    return new Promise((resolve, reject) => {
        fetch(req).then(response => {
            if (response.ok) {
                response.json().then((data) => {
                    resolve(data)
                })
            } else {
                console.log('请求失败，状态码为', response.status);
            }
        }, error => {
            reject(error)
        })
    });
}
export default common