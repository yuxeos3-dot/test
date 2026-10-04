(function (_0x145ab2) {
    'use strict';
    const _0x5880a0 = _0x145ab2['tjDataLayer'] || [], _0x21635a = new URLSearchParams(window['location']['search']), _0x38a018 = [
            'event_id',
            'event',
            'channel',
            'app_id',
            'uid',
            'sid',
            'client_ts',
            'device',
            'device_id',
            'user_agent',
            'User-Agent',
            'device_brand',
            'device_model',
            'payload'
        ], _0x559dfe = [
            'wj_branch',
            'elIgnore',
            'seen',
            'src',
            'uri',
            'config',
            'router',
            'mttIgnore',
            'fullscreenContainer',
            'art-id',
            'artId',
            /^v[A-F0-9-][A-Fa-f0-9]*$/,
            /^[sS]wiper/,
            /^[iI]mg/
        ], _0x407522 = {
            'config': {
                'apiEndpoint': 'https://api.shuifeng.cc/api/eventTracking/report.json',
                'version': '3.1.0',
                'channel': _0x21635a['get']('channel') || _0x21635a['get']('channel_id') || '',
                'appid': '',
                'aff': _0x21635a['get']('aff_code') || _0x21635a['get']('aff') || _0x21635a['get']('code') || '',
                'trace_id': '',
                'batchEnabled': !![],
                'batchSize': 0xa,
                'batchInterval': 0x1388,
                'start': new Date()['getTime'](),
                'vip': 0x0,
                'region': '',
                'user_life_type': '',
                'routers': [{
                        'router': '/',
                        'page_key': 'home',
                        'page_name': '首页'
                    }],
                'encryptedConfig': null,
                'testConfig': null
            },
            'uuidKey': 'tjtag_uuid',
            'uuid': null,
            'link': null,
            'traceId': null,
            'eventQueue': [],
            'flushTimer': null,
            'impressionObserver': null,
            'nodeScanTimer': null,
            'lifecycleBound': ![],
            '_webSdkReady': ![],
            '_landingSdkReady': ![],
            'fingerprintId': null,
            'ab': null
        };
    function _0x22c4f0(_0x28f28e) {
        if (!_0x28f28e || typeof _0x28f28e !== 'object')
            return _0x28f28e;
        if (Array['isArray'](_0x28f28e))
            return _0x28f28e['forEach'](function (_0x4b40bd) {
                _0x22c4f0(_0x4b40bd);
            }), _0x28f28e;
        return Object['keys'](_0x28f28e)['forEach'](function (_0x357fb8) {
            if (_0x559dfe['some'](function (_0x321389) {
                    return _0x321389 instanceof RegExp ? _0x321389['test'](_0x357fb8) : _0x321389 === _0x357fb8;
                }))
                delete _0x28f28e[_0x357fb8];
            else
                _0x28f28e[_0x357fb8] && typeof _0x28f28e[_0x357fb8] === 'object' && _0x22c4f0(_0x28f28e[_0x357fb8]);
        }), _0x28f28e;
    }
    function _0x1751b9(_0x20a7ee) {
        const _0xd7f699 = Number(_0x20a7ee && _0x20a7ee['duration']), _0xb0f124 = Number(_0x20a7ee && _0x20a7ee['currentTime']), _0x117522 = isFinite(_0xd7f699) && !isNaN(_0xd7f699) && _0xd7f699 > 0x0, _0x1ab57b = isFinite(_0xb0f124) && !isNaN(_0xb0f124) ? Math['max'](0x0, _0xb0f124) : 0x0, _0x2348de = _0x117522 ? Math['min'](_0x1ab57b, _0xd7f699) : _0x1ab57b, _0x48585e = _0x117522 ? Math['min'](0x64, Math['max'](0x0, _0x2348de / _0xd7f699 * 0x64)) : 0x0;
        return {
            'duration': _0x117522 ? Math['round'](_0xd7f699) : 0x0,
            'currentTime': Math['round'](_0x2348de),
            'progress': Math['round'](_0x48585e)
        };
    }
    function _0x1e0042() {
        return 'xxxxxxxyxxxxxxxyxxxxxxxyxxxxxxxy'['replace'](/[xy]/g, function (_0x2c5e15) {
            const _0x8d74bf = Math['random']() * 0x10 | 0x0, _0x275858 = _0x2c5e15 === 'x' ? _0x8d74bf : _0x8d74bf & 0x3 | 0x8;
            return _0x275858['toString'](0x10);
        });
    }
    function _0x36c7e5() {
        try {
            const _0x40a03f = _0x145ab2['localStorage']['getItem'](_0x407522['uuidKey']);
            if (_0x40a03f)
                return _0x40a03f;
            const _0x24691a = _0x1e0042();
            return _0x145ab2['localStorage']['setItem'](_0x407522['uuidKey'], _0x24691a), _0x24691a;
        } catch (_0x3df85a) {
            return _0x1e0042();
        }
    }
    _0x407522['uuid'] = _0x36c7e5();
    function _0x1ffc08(_0x36acc2, _0x38136f = 'secretkey') {
        let _0x4fdc6f = '';
        for (let _0x9e7366 = 0x0; _0x9e7366 < _0x36acc2['length']; _0x9e7366++) {
            const _0x59c581 = _0x36acc2['charCodeAt'](_0x9e7366), _0x53f77d = _0x38136f['charCodeAt'](_0x9e7366 % _0x38136f['length']), _0x39f43c = _0x59c581 ^ _0x53f77d;
            _0x4fdc6f += ('0' + _0x39f43c['toString'](0x10))['slice'](-0x2);
        }
        return _0x4fdc6f;
    }
    function _0x5c2ff7(_0x565bb9, _0x4c0c4b = 'secretkey') {
        let _0x45d7ba = '';
        for (let _0x25fdaf = 0x0; _0x25fdaf < _0x565bb9['length']; _0x25fdaf += 0x2) {
            const _0x121c47 = _0x565bb9['substr'](_0x25fdaf, 0x2), _0x2e5b1e = parseInt(_0x121c47, 0x10), _0x5b5f9d = _0x4c0c4b['charCodeAt'](_0x25fdaf / 0x2 % _0x4c0c4b['length']), _0x4822b3 = _0x2e5b1e ^ _0x5b5f9d;
            _0x45d7ba += String['fromCharCode'](_0x4822b3);
        }
        return _0x45d7ba;
    }
    function _0x1a821f(_0x248a9d) {
        function _0x590178(_0x19257e, _0x21aa7f) {
            if (_0x19257e === null)
                return null;
            const _0x428523 = typeof _0x19257e;
            if (_0x428523 === 'bigint')
                return String(_0x19257e);
            if (_0x428523 !== 'object')
                return _0x19257e;
            if (typeof _0x19257e['toJSON'] === 'function')
                return _0x590178(_0x19257e['toJSON'](), _0x21aa7f);
            if (_0x21aa7f['indexOf'](_0x19257e) !== -0x1)
                return '[Circular]';
            _0x21aa7f['push'](_0x19257e);
            let _0x122907;
            return Array['isArray'](_0x19257e) ? _0x122907 = _0x19257e['map'](function (_0xdbe793) {
                const _0x5a17c0 = _0x590178(_0xdbe793, _0x21aa7f);
                return _0x5a17c0 === undefined ? null : _0x5a17c0;
            }) : (_0x122907 = {}, Object['keys'](_0x19257e)['sort']()['forEach'](function (_0x931a4c) {
                const _0x3eef72 = _0x590178(_0x19257e[_0x931a4c], _0x21aa7f);
                _0x3eef72 !== undefined && (_0x122907[_0x931a4c] = _0x3eef72);
            })), _0x21aa7f['pop'](), _0x122907;
        }
        const _0x4ed5f9 = _0x590178(_0x248a9d, []);
        return _0x4ed5f9 === undefined ? '' : JSON['stringify'](_0x4ed5f9);
    }
    function _0x24f326(_0x165acb, _0x1d3970) {
        return Object['prototype']['hasOwnProperty']['call'](_0x165acb, _0x1d3970);
    }
    function _0x2f5f3a(_0x28f367, _0x460967) {
        if (typeof _0x28f367 !== 'string' || !_0x28f367)
            return _0x460967;
        try {
            return JSON['parse'](_0x28f367);
        } catch (_0xac9736) {
            return _0x460967;
        }
    }
    function _0x337e06(_0x2521af, _0x5a79c7) {
        try {
            const _0x5881a9 = sessionStorage['getItem'](_0x2521af);
            return _0x5881a9 == null ? _0x5a79c7 : _0x5881a9;
        } catch (_0x8447ea) {
            return _0x5a79c7;
        }
    }
    function _0x379985(_0x409f5d, _0x5548cf) {
        try {
            return sessionStorage['setItem'](_0x409f5d, _0x5548cf), !![];
        } catch (_0x58678e) {
            return ![];
        }
    }
    function _0x9a081d(_0x5b6789) {
        const {
            event_id: _0x3d7f88,
            ..._0x3ea44e
        } = _0x5b6789;
        let _0x2fb1e5 = Math['random']() + '|' + Date['now']() + '|' + _0x1a821f(_0x3ea44e);
        if (_0x2fb1e5['length'] > 0x1388)
            _0x2fb1e5 = _0x2fb1e5['slice'](0x0, 0x1388);
        let _0x4deb60 = 0x811c9dc5, _0x4a3b85 = 0x1505, _0x35e1f8 = 0xdeadbeef;
        for (let _0x4b9636 = 0x0; _0x4b9636 < _0x2fb1e5['length']; _0x4b9636++) {
            const _0x5252fc = _0x2fb1e5['charCodeAt'](_0x4b9636);
            _0x4deb60 = (_0x4deb60 ^ _0x5252fc) * 0x1000193, _0x4a3b85 = _0x4a3b85 * 0x21 ^ _0x5252fc, _0x35e1f8 = (_0x35e1f8 << 0x5) - _0x35e1f8 ^ _0x5252fc;
        }
        const _0x5ac1a5 = (_0x4deb60 >>> 0x0)['toString'](0x10)['padStart'](0x8, '0'), _0x5bddbe = (_0x4a3b85 >>> 0x0)['toString'](0x10)['padStart'](0x8, '0'), _0x14fdfb = (_0x35e1f8 >>> 0x0)['toString'](0x10)['padStart'](0x8, '0'), _0x5f3bac = ((_0x4deb60 ^ _0x4a3b85 ^ _0x35e1f8) >>> 0x0)['toString'](0x10)['padStart'](0x8, '0');
        return _0x5ac1a5 + _0x5bddbe + _0x14fdfb + _0x5f3bac;
    }
    function _0x133bfb() {
        const _0x1ed774 = 'tjtag_sid';
        try {
            let _0x222ce6 = sessionStorage['getItem'](_0x1ed774);
            return !_0x222ce6 && (_0x222ce6 = _0x1e0042(), sessionStorage['setItem'](_0x1ed774, _0x222ce6)), _0x222ce6;
        } catch (_0x9fb481) {
            return _0x1e0042();
        }
    }
    function _0x172811() {
        const _0x241c3b = 'tjtag_affid';
        try {
            let _0x1a5393 = _0x407522['config']['aff'];
            if (_0x1a5393)
                return localStorage['setItem'](_0x241c3b, _0x1a5393), _0x1a5393;
            return _0x1a5393 = localStorage['getItem'](_0x241c3b), _0x1a5393 || '';
        } catch (_0x2abb85) {
            return '';
        }
    }
    function _0x5c15d() {
        const _0x565acc = 'tjtag_ab';
        try {
            let _0x5e714 = _0x407522['ab'];
            if (_0x5e714)
                return localStorage['setItem'](_0x565acc, JSON['stringify'](_0x5e714)), _0x5e714;
            _0x5e714 = localStorage['getItem'](_0x565acc);
            if (_0x5e714)
                return _0x407522['ab'] = JSON['parse'](_0x5e714), _0x407522['ab'];
            return null;
        } catch (_0xcc5a39) {
            return null;
        }
    }
    function _0x2c5ae4(_0x489c8c) {
        _0x489c8c = (_0x489c8c || '')['toLowerCase']();
        if (_0x489c8c['includes']('android'))
            return 'Android';
        if (_0x489c8c['includes']('iphone') || _0x489c8c['includes']('ipad') || _0x489c8c['includes']('ipod'))
            return 'iOS';
        return 'PC';
    }
    function _0x3759d3(_0x11f9f6) {
        return new Promise(function (_0x50f5ec, _0x138470) {
            if (!_0x11f9f6) {
                _0x138470(new Error('没有文本内容'));
                return;
            }
            if (navigator['clipboard'] && window['isSecureContext']) {
                navigator['clipboard']['writeText'](_0x11f9f6)['then'](() => _0x50f5ec(!![]))['catch'](() => _0x3207c3(_0x11f9f6, _0x50f5ec, _0x138470));
                return;
            }
            _0x3207c3(_0x11f9f6, _0x50f5ec, _0x138470);
        });
        function _0x3207c3(_0x4d7ea2, _0x2350fb, _0x53f2fe) {
            try {
                const _0x3ac1ac = document['createElement']('textarea');
                _0x3ac1ac['style']['cssText'] = 'position:fixed;top:0;left:0;opacity:0;', _0x3ac1ac['value'] = _0x4d7ea2, document['body']['appendChild'](_0x3ac1ac), _0x3ac1ac['select'](), _0x3ac1ac['setSelectionRange'](0x0, _0x4d7ea2['length']);
                const _0x7f2be0 = document['execCommand']('copy');
                document['body']['removeChild'](_0x3ac1ac), _0x7f2be0 ? _0x2350fb(!![]) : _0x53f2fe(new Error('复制失败'));
            } catch (_0x136848) {
                _0x53f2fe(_0x136848);
            }
        }
    }
    function _0x3fd2f1(_0x4c3c4a, _0x2b7d00) {
        if (!_0x4c3c4a || !_0x2b7d00)
            return;
        try {
            let _0x109a1c = _0x2b7d00;
            (!_0x109a1c['tagName'] || _0x109a1c['tagName']['toLowerCase']() !== 'a') && (_0x109a1c = _0x2b7d00['querySelector']('a[id*=\x22ios\x22\x20i],\x20a[class*=\x22ios\x22\x20i],\x20a[href*=\x22mobileConfig\x22\x20i]'));
            if (_0x109a1c) {
                const _0x5d30cd = _0x109a1c['getAttribute']('href');
                if (typeof _0x5d30cd !== 'string' || !_0x5d30cd)
                    return;
                !_0x5d30cd['includes']('content=') && (_0x5d30cd['includes']('?') ? _0x109a1c['setAttribute']('href', _0x5d30cd + ('&' + _0x4c3c4a)) : _0x109a1c['setAttribute']('href', _0x5d30cd + ('?' + _0x4c3c4a)));
            }
        } catch (_0x31fdbb) {
            console['error']('[tjtag]\x20构建超链失败', _0x31fdbb);
        }
    }
    function _0xb9cfb2() {
        const _0x1921a6 = window['location']['href'];
        _0x407522['traceId'] = _0x407522['config']['trace_id'] || _0x407522['config']['appid'] + '_' + 'landing_page_click' + Date['now']() + Math['random']()['toString'](0x24)['substr'](0x2, 0x9), _0x407522['link'] = Object['entries']({
            'trace_id': _0x407522['traceId'],
            'aff': _0x172811(),
            'appcode': _0x407522['config']['appid'],
            'channel': _0x407522['config']['channel'],
            'content': _0x1ffc08(_0x1921a6, _0x407522['config']['appid'])
        })['map'](([_0x548324, _0x4a4672]) => encodeURIComponent(_0x548324) + '=' + encodeURIComponent(_0x4a4672))['join']('&'), _0x145ab2['$TJTAG'] = {
            'link': _0x407522['link'],
            'traceId': _0x407522['traceId']
        };
    }
    function _0x551b9d(_0x5c31df, _0x194611, _0x5ed642) {
        const _0x4492c4 = _0x5ed642 || Math['floor'](Date['now']() / 0x3e8), _0x2e8fc0 = _0x145ab2['navigator'] || {}, _0x1412e9 = (_0x2e8fc0['userAgent'] || '') + (_0x407522['config']['version'] ? '\x20Ver=' + _0x407522['config']['version'] : ''), _0x3434ca = _0x2c5ae4(_0x1412e9);
        var _0x15658e = {
                'event_id': '',
                'event': _0x5c31df,
                'channel': _0x194611 && _0x194611['channel'] || _0x407522['config']['channel'] || '',
                'app_id': _0x407522['config']['appid'] || 0x0,
                'uid': _0x194611 && _0x194611['uid'] || _0x407522['config']['uid'] || 0x0,
                'sid': _0x133bfb(),
                'client_ts': _0x4492c4,
                'device': _0x3434ca,
                'device_id': _0x407522['fingerprintId'] || _0x407522['uuid'],
                'user_agent': _0x1412e9,
                'device_brand': '',
                'device_model': '',
                'app_version': _0x407522['config']['version'],
                'region': _0x194611 && _0x194611['region'] || _0x407522['config']['region'] || '',
                'user_life_type': _0x194611 && _0x194611['user_life_type'] || _0x407522['config']['user_life_type'] || ''
            }, _0x42b01a = {};
        return Object['keys'](_0x194611 || {})['forEach'](function (_0x49cc9a) {
            _0x38a018['indexOf'](_0x49cc9a) === -0x1 && (_0x42b01a[_0x49cc9a] = _0x194611[_0x49cc9a]);
        }), _0x15658e['payload'] = _0x42b01a, _0x15658e['event_id'] = _0x9a081d(_0x15658e), _0x15658e;
    }
    function _0x31cd80(_0x1a9667) {
        if (Array['isArray'](_0x1a9667))
            return {
                'eventType': _0x1a9667[0x0],
                'params': _0x1a9667[0x1] && typeof _0x1a9667[0x1] === 'object' ? _0x1a9667[0x1] : {}
            };
        if (!_0x1a9667 || typeof _0x1a9667 !== 'object')
            return null;
        var _0x5862cf = typeof _0x1a9667['event'] === 'string' ? _0x1a9667['event'] : _0x1a9667['eventType'];
        if (!_0x5862cf)
            return null;
        if (_0x1a9667['params'] && typeof _0x1a9667['params'] === 'object' && !Array['isArray'](_0x1a9667['params']))
            return {
                'eventType': _0x5862cf,
                'params': _0x1a9667['params']
            };
        var _0x4c4614 = {};
        return Object['keys'](_0x1a9667)['forEach'](function (_0x2beed8) {
            if (_0x2beed8 === 'event' || _0x2beed8 === 'eventType' || _0x2beed8 === 'params')
                return;
            _0x4c4614[_0x2beed8] = _0x1a9667[_0x2beed8];
        }), {
            'eventType': _0x5862cf,
            'params': _0x4c4614
        };
    }
    function _0x2ea854() {
        const _0x571a19 = '/' + new URL(window['location']['href'])['pathname']['split']('/')['filter'](Boolean)['join']('/'), _0x1b862a = _0x407522['config']['routers']['find'](_0x15ec26 => _0x15ec26['router'] !== '/' && _0x571a19['startsWith'](_0x15ec26['router'])) || (_0x571a19 === '/' ? {
                'router': '/',
                'page_key': 'home',
                'page_name': '首页'
            } : null);
        if (_0x1b862a) {
            const _0x5e7c05 = _0x2f5f3a(_0x337e06('tjtag_page_route', '{}')['replace'](/^\[object Object\]$/, '{}'), {});
            _0x379985('tjtag_page_route', JSON['stringify'](_0x1b862a)), _0x145ab2['tjtag']('event', 'app_page_view', {
                'user_type': _0x407522['config']['vip'] ? 'vip' : 'normal',
                'page_key': _0x1b862a['page_key'],
                'page_name': _0x1b862a['page_name'],
                'referrer_page_key': _0x5e7c05['page_key'] || 'unknown',
                'referrer_page_name': _0x5e7c05['page_name'] || '第三方',
                'current_page_key': _0x1b862a['page_key'],
                'current_page_name': _0x1b862a['page_name'],
                'page_load_time': Math['max'](0x0, Math['round'](Date['now']() - _0x407522['config']['start'])),
                'recommend_trace_id': '',
                'wj_branch': 'both'
            }), _0x5e7c05 && _0x1b862a?.['page_key'] && _0x5e7c05?.['page_key'] && _0x1b862a['page_key'] !== _0x5e7c05['page_key'] && _0x145ab2['tjtag']('event', 'navigation', {
                'navigation_key': _0x5e7c05['page_key'] || 'unknown',
                'navigation_name': _0x5e7c05['page_name'] || '第三方'
            });
        }
    }
    function _0x1ce258() {
        const _0x16fe31 = _0x145ab2['screen']['width'], _0x2185ac = _0x145ab2['screen']['height'], _0x342db5 = document['querySelectorAll']('.tjtagmanager');
        Array['prototype']['forEach']['call'](_0x342db5, function (_0x58b1ac) {
            if (_0x58b1ac['__tjtag_bound__'])
                return;
            _0x58b1ac['__tjtag_bound__'] = !![];
            let _0x5e1620 = _0x58b1ac['dataset'] || {}, _0x3720c4 = _0x5e1620['event'];
            _0x58b1ac['addEventListener']('click', function (_0x3e18cf) {
                const _0x3d05fb = _0x58b1ac['dataset'] || {}, _0x2be256 = _0x3e18cf['clientX'], _0x331549 = _0x3e18cf['clientY'], _0x228f56 = Math['round'](_0x2be256 / _0x16fe31 * 0x64), _0xb405ae = Math['round'](_0x331549 / _0x2185ac * 0x64);
                let _0x4f9d19 = {};
                if ('landing_page_click' == _0x3720c4)
                    _0x4f9d19 = {
                        'click_coordinates_x': Math['round'](_0x2be256),
                        'click_coordinates_y': Math['round'](_0x331549),
                        'click_x_percent': Math['min'](0x64, Math['max'](0x0, _0x228f56)),
                        'click_y_percent': Math['min'](0x64, Math['max'](0x0, _0xb405ae)),
                        'screen_width': _0x16fe31,
                        'screen_height': _0x2185ac
                    }, _0x145ab2['tjtag']('event', _0x3720c4, Object['assign']({}, _0x3d05fb, _0x4f9d19, {
                        'channel': _0x3d05fb['channel'] || _0x407522['config']['channel'] || '',
                        'uid': _0x3d05fb['uid'] || 0x0,
                        'trace_id': _0x407522['traceId'] || 0x0
                    })), _0x3fd2f1(_0x407522['link'], _0x58b1ac), _0x3759d3(_0x407522['link'])['catch'](function (_0x364efa) {
                        console['warn']('[tjtag]\x20复制失败', _0x364efa);
                    });
                else {
                    if ('ad_click' == _0x3720c4)
                        !_0x58b1ac['dataset']['seen'] && (_0x58b1ac['dataset']['seen'] = 'true', _0x145ab2['tjtag']('event', 'ad_impression', Object['assign']({}, _0x3d05fb, {
                            'channel': _0x3d05fb['channel'] || _0x407522['config']['channel'] || '',
                            'uid': _0x3d05fb['uid'] || 0x0
                        }))), _0x145ab2['tjtag']('event', _0x3720c4, Object['assign']({}, _0x3d05fb, {
                            'channel': _0x3d05fb['channel'] || _0x407522['config']['channel'] || '',
                            'uid': _0x3d05fb['uid'] || 0x0
                        }));
                    else {
                        if ('keyword_click' == _0x3720c4)
                            try {
                                const _0x31d628 = (document['querySelector'](_0x3d05fb['keyword'])?.['value']?.['trim']() || '未输入关键词')['slice'](0x0, 0x32), _0x5c2876 = Object['assign']({}, _0x3d05fb, {
                                        'channel': _0x407522['config']['channel'] || '',
                                        'keyword': _0x31d628,
                                        'search_trace_id': ''
                                    });
                                _0x5c2876['click_position'] && Object['assign'](_0x5c2876, { 'click_position': Number(_0x5c2876['click_position']) }), _0x145ab2['tjtag']('event', _0x3720c4, _0x5c2876);
                            } catch (_0x27e399) {
                                console['warn']('[tjtag]\x20搜索点击异常:', _0x27e399);
                            }
                        else
                            console['warn']('[tjtag]\x20未知事件:', _0x3720c4);
                    }
                }
            });
        });
    }
    function _0x3799f3() {
        const _0x1d422f = new IntersectionObserver(_0x2a0c78 => {
            _0x2a0c78['forEach'](_0x54f480 => {
                if (_0x54f480['isIntersecting']) {
                    const _0x4a2833 = _0x54f480['target'], _0x58a613 = _0x4a2833['dataset'] || {};
                    !_0x4a2833['dataset']['seen'] && (_0x4a2833['dataset']['seen'] = 'true', _0x145ab2['tjtag']('event', 'ad_impression', Object['assign']({}, _0x58a613, {
                        'channel': _0x58a613['channel'] || _0x407522['config']['channel'] || '',
                        'uid': _0x58a613['uid'] || 0x0
                    })));
                }
            });
        }, {
            'threshold': 0.1,
            'rootMargin': '0px'
        });
        return document['querySelectorAll']('.tjtagmanager[data-event=\x22ad_click\x22]')['forEach'](_0x1277b1 => _0x1d422f['observe'](_0x1277b1)), _0x1d422f;
    }
    function _0x500eaf() {
        document['addEventListener']('play', function (_0x465f4a) {
            if (_0x465f4a['target']['tagName'] === 'VIDEO' && _0x145ab2['tjtag']) {
                const {
                        duration: _0x155f52,
                        currentTime: _0x489a9c,
                        progress: _0x363abe
                    } = _0x1751b9(_0x465f4a['target']), _0x2330e4 = _0x465f4a['target']['closest']('.dplayer');
                if (_0x2330e4) {
                    const {
                        config: _0x3b4e26,
                        ..._0x593f84
                    } = _0x2330e4['dataset'] || {};
                    _0x145ab2['tjtag']('event', 'video_event', Object['assign']({}, _0x593f84, {
                        'channel': _0x593f84['channel'] || _0x407522['config']['channel'] || '',
                        'uid': _0x593f84['uid'] || 0x0,
                        'video_duration': _0x155f52,
                        'play_duration': _0x489a9c,
                        'play_progress': _0x363abe,
                        'video_behavior_key': 'video_play',
                        'video_behavior_name': '播放'
                    }));
                }
            }
        }, !![]), document['addEventListener']('pause', function (_0x3774f3) {
            if (_0x3774f3['target']['tagName'] === 'VIDEO' && _0x145ab2['tjtag']) {
                const {
                        duration: _0x5a17af,
                        currentTime: _0x1943d9,
                        progress: _0x21f17e
                    } = _0x1751b9(_0x3774f3['target']), _0x5ab813 = _0x3774f3['target']['closest']('.dplayer');
                if (_0x5ab813) {
                    const {
                        config: _0x649c3,
                        ..._0x39efec
                    } = _0x5ab813['dataset'] || {};
                    parseFloat(_0x5a17af) !== parseFloat(_0x1943d9) && _0x145ab2['tjtag']('event', 'video_event', Object['assign']({}, _0x39efec, {
                        'channel': _0x39efec['channel'] || _0x407522['config']['channel'] || '',
                        'uid': _0x39efec['uid'] || 0x0,
                        'video_duration': _0x5a17af,
                        'play_duration': _0x1943d9,
                        'play_progress': _0x21f17e,
                        'video_behavior_key': 'video_pause',
                        'video_behavior_name': '暂停'
                    }));
                }
            }
        }, !![]), document['addEventListener']('ended', function (_0x1fd42f) {
            if (_0x1fd42f['target']['tagName'] === 'VIDEO' && _0x145ab2['tjtag']) {
                const {
                        duration: _0x47e648,
                        currentTime: _0x137cc8,
                        progress: _0x1e4a97
                    } = _0x1751b9(_0x1fd42f['target']), _0x3c7f41 = _0x1fd42f['target']['closest']('.dplayer');
                if (_0x3c7f41) {
                    const {
                        config: _0xa0fe63,
                        ..._0x509987
                    } = _0x3c7f41['dataset'] || {};
                    _0x145ab2['tjtag']('event', 'video_event', Object['assign']({}, _0x509987, {
                        'channel': _0x509987['channel'] || _0x407522['config']['channel'] || '',
                        'uid': _0x509987['uid'] || 0x0,
                        'video_duration': _0x47e648,
                        'play_duration': _0x137cc8,
                        'play_progress': _0x1e4a97,
                        'video_behavior_key': 'video_complete',
                        'video_behavior_name': '播放完成'
                    }));
                }
            }
        }, !![]);
    }
    function _0x5a59fe() {
        const _0x597e62 = new IntersectionObserver(_0x2596d3 => {
            _0x2596d3['forEach'](_0x2abf61 => {
                if (_0x2abf61['isIntersecting']) {
                    const _0x49c96d = _0x2abf61['target'];
                    if (!_0x49c96d['dataset']['seen']) {
                        _0x49c96d['dataset']['seen'] = 'true';
                        const {
                            config: _0x5c41f0,
                            ..._0x18a11e
                        } = _0x49c96d['dataset'] || {};
                        _0x145ab2['tjtag']('event', 'video_event', Object['assign']({}, _0x18a11e, {
                            'channel': _0x18a11e['channel'] || _0x407522['config']['channel'] || '',
                            'uid': _0x18a11e['uid'] || 0x0,
                            'video_duration': 0x0,
                            'play_duration': 0x0,
                            'play_progress': 0x0,
                            'video_behavior_key': 'video_view',
                            'video_behavior_name': '展示'
                        }));
                    }
                }
            });
        }, {
            'threshold': 0.1,
            'rootMargin': '0px'
        });
        return document['querySelectorAll']('.dplayer')['forEach'](_0x65d2d9 => _0x597e62['observe'](_0x65d2d9)), _0x597e62;
    }
    function _0x25694a() {
        _0x1ce258(), _0x3799f3(), _0x5a59fe();
        if (typeof _0x145ab2['MutationObserver'] === 'function') {
            const _0x24c452 = new _0x145ab2['MutationObserver'](function () {
                if (_0x407522['nodeScanTimer'])
                    return;
                _0x407522['nodeScanTimer'] = setTimeout(function () {
                    _0x407522['nodeScanTimer'] = null, _0x1ce258(), _0x3799f3(), _0x5a59fe();
                }, 0x64);
            });
            _0x24c452['observe'](document['body'], {
                'childList': !![],
                'subtree': !![]
            });
        } else
            console['warn']('[tjtag]\x20当前环境不支持\x20MutationObserver，跳过动态节点扫描');
        document['addEventListener']('click', _0x1810df => {
            const _0x44d6dc = _0x145ab2['screen']['width'], _0x4db219 = _0x145ab2['screen']['height'], _0x18e870 = _0x145ab2['location']['pathname'], _0x145027 = _0x407522['config']['routers']['find'](_0x2fe4e8 => _0x2fe4e8['router'] !== '/' && _0x18e870['startsWith'](_0x2fe4e8['router'])) || (_0x18e870 === '/' ? {
                    'router': '/',
                    'page_key': 'home',
                    'page_name': '首页'
                } : null);
            if (_0x145027) {
                const {
                        router: _0x1edbcf,
                        ..._0x238267
                    } = _0x145027, _0x5b2d1f = _0x1810df['clientX'], _0x5f38c3 = _0x1810df['clientY'], _0x2350a8 = Math['round'](_0x5b2d1f / _0x44d6dc * 0x64), _0xd6bd08 = Math['round'](_0x5f38c3 / _0x4db219 * 0x64);
                let _0x3e2eba = {
                    'click_page_x': Math['max'](0x0, Math['round'](_0x5b2d1f)),
                    'click_page_y': Math['max'](0x0, Math['round'](_0x5f38c3)),
                    'click_x_percent': Math['min'](0x64, Math['max'](0x0, _0x2350a8)),
                    'click_y_percent': Math['min'](0x64, Math['max'](0x0, _0xd6bd08)),
                    'screen_width': _0x44d6dc,
                    'screen_height': _0x4db219
                };
                _0x145ab2['tjtag']('event', 'page_click', Object['assign']({}, _0x238267, _0x3e2eba, {
                    'channel': _0x407522['config']['channel'] || '',
                    'uid': _0x407522['config']['uid'] || 0x0
                }));
            }
        });
    }
    function _0x3b649c(_0x4f4959, _0x11899e) {
        const _0x48a480 = _0x407522['config']['apiEndpoint'];
        if (!_0x48a480) {
            console['warn']('[tjtag]\x20接口失效，无法上报事件');
            return;
        }
        const _0x5b70d7 = Math['floor'](Date['now']() / 0x3e8), _0x5754a9 = _0x145ab2['navigator'] || {}, _0x4c911d = _0x5754a9['userAgent'] || '', _0x7c0005 = _0x2c5ae4(_0x4c911d), _0x68688a = Object['assign']({}, _0x11899e, {
                'event_id': '',
                'event': _0x4f4959,
                'channel': _0x11899e && _0x11899e['channel'] || _0x407522['config']['channel'] || '',
                'app_id': _0x407522['config']['appid'] || 0x0,
                'uid': _0x11899e && _0x11899e['uid'] || _0x407522['config']['uid'] || 0x0,
                'sid': _0x133bfb(),
                'client_ts': _0x5b70d7,
                'device': _0x7c0005,
                'device_id': _0x407522['fingerprintId'] || _0x407522['uuid'],
                'user_agent': _0x4c911d,
                'device_brand': '',
                'device_model': ''
            });
        _0x68688a['event_id'] = _0x9a081d(_0x68688a);
        if (typeof _0x48a480 !== 'string') {
            _0x48a480(_0x68688a);
            return;
        }
        const _0x15d5ab = Object['keys'](_0x68688a)['map'](function (_0x56fd4c) {
            const _0x193e67 = _0x68688a[_0x56fd4c], _0x1a2b51 = _0x193e67 != null && typeof _0x193e67 === 'object' ? _0x1a821f(_0x193e67) : _0x193e67 == null ? '' : String(_0x193e67);
            return encodeURIComponent(_0x56fd4c) + '=' + encodeURIComponent(_0x1a2b51);
        })['join']('&');
        if (navigator['sendBeacon'])
            try {
                const _0x5371f8 = new Blob([_0x15d5ab], { 'type': 'application/x-www-form-urlencoded;charset=UTF-8' }), _0x1571d9 = navigator['sendBeacon'](_0x48a480, _0x5371f8);
                if (_0x1571d9)
                    return;
            } catch (_0x28e26e) {
            }
        try {
            fetch(_0x48a480, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                'body': _0x15d5ab,
                'keepalive': !![]
            })['then'](function (_0x59b907) {
                if (_0x59b907 && typeof _0x59b907['ok'] === 'boolean' && !_0x59b907['ok']) {
                    console['warn']('[tjtag]\x20上报响应异常', _0x59b907['status'], _0x68688a['event_id']);
                    return;
                }
            })['catch'](function (_0x4eab7d) {
                console['warn']('[tjtag]\x20上报失败2', _0x4eab7d);
            });
            return;
        } catch (_0x13854b) {
            console['warn']('[tjtag]\x20上报失败3', _0x13854b);
        }
        try {
            const _0x47ddf4 = new Image(), _0x2839ed = encodeURIComponent(_0x15d5ab);
            _0x47ddf4['src'] = _0x48a480 + '?d=' + _0x2839ed + '&t=' + Date['now']();
            return;
        } catch (_0x2032b9) {
            console['warn']('[log]\x20上报失败3', _0x2032b9);
            return;
        }
    }
    function _0x21a378(_0x24e77d) {
        _0x407522['flushTimer'] && (clearTimeout(_0x407522['flushTimer']), _0x407522['flushTimer'] = null);
        if (!_0x407522['eventQueue']['length'])
            return 0x0;
        var _0x4506da = Math['max'](0x1, Number(_0x407522['config']['batchSize']) || 0x1), _0x5051bb = 0x0;
        do {
            var _0x4b0888 = _0x407522['eventQueue']['splice'](0x0, _0x4506da);
            _0x5051bb += _0x5b5238(_0x4b0888) || 0x0;
        } while (_0x24e77d && _0x407522['eventQueue']['length']);
        return _0x5051bb;
    }
    function _0x5b5238(_0x117199) {
        const _0x450234 = _0x407522['config']['apiEndpoint'];
        if (!_0x450234)
            return console['warn']('[tjtag]\x20接口失效，无法批量上传事件'), 0x0;
        if (!Array['isArray'](_0x117199) || !_0x117199['length'])
            return console['warn']('[tjtag]\x20批量上传参数无效', _0x117199), 0x0;
        var _0x219024 = _0x407522['config']['testConfig'] && _0x407522['config']['testConfig']['configApi'];
        if (_0x219024 && !_0x407522['___abOff__']) {
            var _0x4cfac6 = [];
            _0x117199['forEach'](function (_0x1b44ae) {
                var _0xa2bf16 = _0x551b9d(_0x1b44ae[0x0], _0x1b44ae[0x1], _0x1b44ae[0x2]), _0x202e52 = _0xa2bf16['payload'] && _0xa2bf16['payload']['wj_branch'] || (_0x407522['ab'] ? 'both' : 'sdk');
                (_0x202e52 === 'ab' || _0x202e52 === 'both') && (_0x22c4f0(_0xa2bf16), _0x4cfac6['push'](_0xa2bf16));
            });
            if (_0x4cfac6['length'])
                try {
                    fetch(_0x219024, {
                        'method': 'POST',
                        'headers': { 'Content-Type': 'application/json;charset=UTF-8' },
                        'body': JSON['stringify'](_0x4cfac6),
                        'keepalive': !![]
                    })['catch'](function (_0x2cf95b) {
                        console['warn']('[tjtag]\x20接口上报失败', _0x2cf95b);
                    });
                } catch (_0x2ea9e0) {
                    console['warn']('[tjtag]\x20接口上报失败', _0x2ea9e0);
                }
        }
        if (_0x407522['_webSdkReady'] && _0x145ab2['WebSDK'] && _0x145ab2['WebSDK']['track'])
            return _0x117199['forEach'](function (_0x46b481) {
                var _0x33d31a = _0x551b9d(_0x46b481[0x0], _0x46b481[0x1], _0x46b481[0x2]), _0x5c8c3b = _0x33d31a['payload'] && _0x33d31a['payload']['wj_branch'] || (_0x407522['ab'] ? 'both' : 'sdk');
                if (_0x5c8c3b === 'ab')
                    return;
                delete _0x33d31a['event_id'], _0x22c4f0(_0x33d31a);
                try {
                    const _0x4c8aca = _0x145ab2['WebSDK']['track'], _0x42a559 = {
                            'app_page_view': _0x4c8aca['appPageView'],
                            'ad_impression': _0x4c8aca['adImpression'],
                            'ad_click': _0x4c8aca['adClick'],
                            'page_click': _0x4c8aca['pageClick'],
                            'navigation': _0x4c8aca['navigation'],
                            'recommend_list_view': _0x4c8aca['recommendListView'],
                            'recommend_list_click': _0x4c8aca['recommendListClick'],
                            'advertising': _0x4c8aca['advertising'],
                            'video_event': _0x4c8aca['videoEvent'],
                            'novel_event': _0x4c8aca['novelEvent'],
                            'comic_event': _0x4c8aca['comicEvent'],
                            'keyword_search': _0x4c8aca['keywordSearch'],
                            'keyword_click': _0x4c8aca['keywordClick'],
                            'landing_page_view': _0x4c8aca['landingPageView'],
                            'landing_page_click': _0x4c8aca['landingPageClick']
                        }[_0x33d31a['event']];
                    if (_0x33d31a['event'] === 'ad_click' || _0x33d31a['event'] === 'ad_impression') {
                        if (!_0x33d31a['payload']['ad_id'])
                            return;
                    }
                    if (!_0x42a559) {
                        console['warn']('[tjtag]\x20WebSDK\x20未知事件', _0x33d31a['event']);
                        return;
                    }
                    var _0x521672 = _0x42a559(_0x33d31a['payload']);
                    _0x521672 && typeof _0x521672['catch'] === 'function' && _0x521672['catch'](function (_0x758114) {
                        console['error']('[tjtag]\x20WebSDK.track\x20rejected', _0x758114);
                    });
                } catch (_0x1d1c1d) {
                    console['error']('[tjtag]\x20WebSDK\x20异常', _0x1d1c1d);
                }
            }), _0x117199['length'];
        if (_0x407522['_landingSdkReady'] && _0x145ab2['LandingSDK'] && _0x145ab2['LandingSDK']['track'])
            return _0x117199['forEach'](function (_0x233758) {
                var _0x4e5f4b = _0x551b9d(_0x233758[0x0], _0x233758[0x1], _0x233758[0x2]), _0x3bcd5e = _0x4e5f4b['payload'] && _0x4e5f4b['payload']['wj_branch'] || (_0x407522['ab'] ? 'both' : 'sdk');
                if (_0x3bcd5e === 'ab')
                    return;
                delete _0x4e5f4b['event_id'], _0x22c4f0(_0x4e5f4b);
                try {
                    const _0x530689 = _0x145ab2['LandingSDK']['track'], _0x425cc6 = {
                            'landing_page_view': _0x530689['landingPageView'],
                            'landing_page_click': _0x530689['landingPageClick']
                        }[_0x4e5f4b['event']];
                    if (!_0x425cc6) {
                        console['warn']('[tjtag]\x20LandingSDK\x20未知事件', _0x4e5f4b['event']);
                        return;
                    }
                    var _0x137c60 = _0x425cc6(_0x4e5f4b['payload']);
                    _0x137c60 && typeof _0x137c60['catch'] === 'function' && _0x137c60['catch'](function (_0x44ac8c) {
                        console['error']('[tjtag]\x20LandingSDK.track\x20rejected', _0x44ac8c);
                    });
                } catch (_0x1013f3) {
                    console['error']('[tjtag]\x20LandingSDK\x20异常', _0x1013f3);
                }
            }), _0x117199['length'];
        var _0x4f019d = [];
        _0x117199['forEach'](function (_0x50b92e, _0x58f3d7) {
            var _0x36d145 = _0x31cd80(_0x50b92e);
            if (!_0x36d145 || !_0x36d145['eventType']) {
                console['warn']('[tjtag]\x20批量上传第' + (_0x58f3d7 + 0x1) + '条事件无效', _0x50b92e);
                return;
            }
            try {
                _0x4f019d['push'](_0x551b9d(_0x36d145['eventType'], _0x36d145['params'] || {}));
            } catch (_0x536e3a) {
                console['warn']('[tjtag]\x20批量上传构建失败', _0x536e3a, _0x50b92e);
            }
        });
        if (!_0x4f019d['length'])
            return console['warn']('[tjtag]\x20批量上传没有可用事件'), 0x0;
        if (typeof _0x450234 !== 'string')
            return _0x450234(_0x4f019d), _0x4f019d['length'];
        _0x22c4f0(_0x4f019d);
        const _0x50f0bd = JSON['stringify'](_0x4f019d);
        try {
            return fetch(_0x450234, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json;charset=UTF-8' },
                'body': _0x50f0bd,
                'keepalive': !![]
            })['then'](function (_0x13db14) {
                if (_0x13db14 && typeof _0x13db14['ok'] === 'boolean' && !_0x13db14['ok']) {
                    console['warn']('[tjtag]\x20批量上传响应异常', _0x13db14['status'], _0x4f019d['map'](function (_0x5147af) {
                        return _0x5147af['event_id'];
                    }));
                    return;
                }
            })['catch'](function (_0x56700c) {
                console['warn']('[tjtag]\x20批量上传失败', _0x56700c);
            }), _0x4f019d['length'];
        } catch (_0x2dcf49) {
            return console['warn']('[tjtag]\x20批量上传失败2', _0x2dcf49), 0x0;
        }
    }
    function _0x3513d6() {
        if (_0x407522['lifecycleBound'])
            return;
        _0x407522['lifecycleBound'] = !![];
        let _0x59efff = ![];
        const _0x3f2b80 = function () {
            if (_0x59efff)
                return 0x0;
            _0x59efff = !![];
            try {
                if (!_0x407522['config']['batchEnabled'])
                    return 0x0;
                return _0x21a378(!![]);
            } finally {
                setTimeout(function () {
                    _0x59efff = ![];
                }, 0x0);
            }
        };
        _0x145ab2['addEventListener']('pagehide', _0x3f2b80), _0x145ab2['addEventListener']('beforeunload', _0x3f2b80), document['addEventListener']('visibilitychange', function () {
            document['visibilityState'] === 'hidden' && _0x3f2b80();
        });
    }
    function _0x5d64c4() {
        var _0x3be304 = _0x407522['config']['encryptedConfig'];
        if (!_0x3be304 || typeof _0x145ab2['WebSDK'] === 'undefined')
            return;
        if (_0x3be304['configApi'])
            fetch(_0x3be304['configApi'])['then'](function (_0xee4905) {
                return _0xee4905['json']();
            })['then'](function (_0x1196ab) {
                _0x7a7005(_0x1196ab['data']);
            })['catch'](function () {
                _0x7a7005('');
            });
        else
            _0x3be304['encryptedData'] ? _0x7a7005(_0x3be304['encryptedData']) : _0x7a7005('');
    }
    function _0x7a7005(_0x4eae95) {
        try {
            _0x145ab2['WebSDK']['init']({
                'appId': _0x407522['config']['appid'],
                'uid': _0x407522['config']['uid'] || '',
                'channel': _0x407522['config']['channel'] || '',
                'batchIntervalMs': 0x1388,
                'batchMaxSize': 0x14,
                'encryptedConfig': _0x4eae95 || '',
                'appVersion': _0x407522['config']['version']
            }), _0x407522['_webSdkReady'] = !![];
        } catch (_0x6a5681) {
            _0x407522['_webSdkReady'] = ![], console['warn']('[tjtag]\x20WebSDK\x20初始化失败', _0x6a5681);
        }
    }
    function _0x2d15f3() {
        var _0x22f45f = _0x407522['config']['encryptedConfig'];
        if (!_0x22f45f || typeof _0x145ab2['LandingSDK'] === 'undefined')
            return;
        _0x5d927(_0x22f45f['landConfigApi']);
    }
    function _0x5d927(_0x31c0a5) {
        try {
            _0x31c0a5 ? _0x145ab2['LandingSDK']['init']({
                'appId': _0x407522['config']['appid'],
                'channel': _0x407522['config']['channel'] || '',
                'endpoint': _0x31c0a5
            }) : _0x145ab2['LandingSDK']['init']({
                'appId': _0x407522['config']['appid'],
                'channel': _0x407522['config']['channel'] || ''
            }), _0x407522['_landingSdkReady'] = !![];
        } catch (_0x2f2548) {
            _0x407522['_landingSdkReady'] = ![], console['warn']('[tjtag]\x20WebSDK\x20初始化失败', _0x2f2548);
        }
    }
    function _0x416040() {
        if (!_0x407522['ab'])
            _0x407522['ab'] = _0x5c15d();
        const _0x1bece0 = _0x407522['config']['testConfig'];
        if (!_0x1bece0 || !_0x1bece0['initConfigApi'])
            return;
        const _0x155c66 = _0x407522['_fpReady'] || Promise['resolve']();
        _0x155c66['then'](function () {
            const _0x37e031 = new URLSearchParams({
                'device_id': _0x407522['fingerprintId'] || _0x407522['uuid'],
                'app_id': _0x407522['config']['appid']
            });
            fetch(_0x1bece0['initConfigApi'] + '?' + _0x37e031['toString']())['then'](function (_0x3d1514) {
                return _0x3d1514['ok'] ? _0x3d1514['json']() : null;
            })['then'](function (_0x4dc896) {
                if (!_0x4dc896)
                    return;
                if (_0x4dc896['data'] && String(_0x4dc896['data']['status'])['trim']() === '0') {
                    _0x407522['___abOff__'] = !![], _0x407522['ab'] = null;
                    try {
                        localStorage['removeItem']('tjtag_ab');
                    } catch (_0x5d4909) {
                    }
                    return;
                }
                _0x407522['___abOff__'] = ![];
                if (_0x4dc896['data'])
                    _0x407522['ab'] = _0x4dc896['data'];
            })['finally'](_0x5c15d);
        });
    }
    function _0x10e633() {
        if (typeof _0x145ab2['FingerprintJS'] === 'undefined') {
            console['warn']('[tjtag]\x20设备指纹\x20未加载，降级使用\x20uuid'), _0x407522['fingerprintId'] = null, _0x407522['_fpReady'] = Promise['resolve']();
            return;
        }
        _0x407522['_fpReady'] = new Promise(function (_0x2a5e3b) {
            var _0x2cc547 = ![], _0x2a1edb = setTimeout(function () {
                    _0x2cc547 = !![], _0x407522['fingerprintId'] = null, console['warn']('[tjtag]\x20设备指纹\x20获取超时，降级为\x20uuid'), _0x2a5e3b();
                }, 0xbb8);
            try {
                _0x145ab2['FingerprintJS']['load']()['then'](function (_0x155bb1) {
                    return _0x155bb1['get']();
                })['then'](function (_0x3335a8) {
                    !_0x2cc547 && (_0x407522['fingerprintId'] = _0x3335a8['visitorId'] || null);
                })['catch'](function (_0x5e8c6f) {
                    _0x407522['fingerprintId'] = null, console['warn']('[tjtag]\x20设备指纹\x20获取失败，降级使用\x20uuid', _0x5e8c6f);
                })['finally'](function () {
                    clearTimeout(_0x2a1edb), _0x2a5e3b();
                });
            } catch (_0xc2e37a) {
                clearTimeout(_0x2a1edb), _0x407522['fingerprintId'] = null, console['warn']('[tjtag]\x20设备指纹\x20获取失败，降级使用\x20uuid', _0xc2e37a), _0x2a5e3b();
            }
        });
    }
    function _0x1c8f91() {
        var _0x5d2226 = Array['prototype']['slice']['call'](arguments), _0x4d01b5 = _0x5d2226[0x0];
        if (_0x4d01b5 === 'config') {
            var _0x2bff18 = _0x5d2226[0x1] || {};
            Array['isArray'](_0x2bff18['excludePayloadFields']) && (_0x559dfe['push']['apply'](_0x559dfe, _0x2bff18['excludePayloadFields']), delete _0x2bff18['excludePayloadFields']);
            _0x407522['config'] = Object['assign']({}, _0x407522['config'], _0x2bff18);
            return;
        }
        if (_0x4d01b5 === 'event') {
            var _0x3e3395 = _0x5d2226[0x1], _0x339ced = _0x5d2226[0x2] || {};
            !_0x407522['config']['batchEnabled'] ? _0x3b649c(_0x3e3395, _0x339ced) : (_0x407522['eventQueue']['push']([
                _0x3e3395,
                _0x339ced,
                Math['floor'](Date['now']() / 0x3e8)
            ]), _0x407522['config']['batchEnabled'] && _0x407522['eventQueue']['length'] >= _0x407522['config']['batchSize'] && _0x21a378(), _0x407522['config']['batchEnabled'] && !_0x407522['flushTimer'] && _0x407522['config']['batchInterval'] > 0x0 && (_0x407522['flushTimer'] = setTimeout(function () {
                _0x407522['flushTimer'] = null, _0x21a378();
            }, _0x407522['config']['batchInterval'])));
            return;
        }
        console['warn']('[tjtag]\x20未知命令:', _0x4d01b5);
    }
    function _0x177019() {
        const _0xc6709 = this;
        _0x145ab2['tjtag'] = function () {
            _0x1c8f91['apply'](_0xc6709, arguments);
        }, _0x145ab2['tjtag']['batchUpload'] = _0x5b5238, _0x145ab2['tjtagBatchUpload'] = _0x5b5238, Array['isArray'](_0x5880a0) && _0x5880a0['length'] && (_0x5880a0['forEach'](function (_0x5cf0af) {
            try {
                _0x1c8f91['apply'](_0xc6709, _0x5cf0af);
            } catch (_0x49bf4c) {
                console['warn']('[tjtag]\x20排队命令执行失败', _0x49bf4c, _0x5cf0af);
            }
        }), _0x5880a0['length'] = 0x0), _0x5d64c4(), _0x2d15f3(), _0x10e633(), _0x416040();
    }
    function _0x1723a5() {
        var _0x16fe2a = _0x407522['_fpReady'] || Promise['resolve']();
        _0x16fe2a['then'](function () {
            _0xb9cfb2(), _0x2ea854(), _0x25694a(), _0x500eaf(), _0x3513d6();
        });
    }
    function _0x96601c(_0x1a500e) {
        document['readyState'] === 'complete' || document['readyState'] === 'interactive' ? _0x1a500e() : document['addEventListener']('DOMContentLoaded', _0x1a500e), window['addEventListener']('routechange', _0x2ea854);
    }
    _0x177019(), _0x96601c(_0x1723a5);
}(window), (function () {
    if (window['__routeChangePatched__'])
        return;
    window['__routeChangePatched__'] = !![];
    const _0x33f84e = () => window['dispatchEvent'](new Event('routechange')), _0x11af64 = _0x2e1c95 => {
            const _0x32380b = history[_0x2e1c95];
            return function (..._0x145cb9) {
                const _0xcfc9c = _0x32380b['apply'](this, _0x145cb9);
                return _0x33f84e(), _0xcfc9c;
            };
        };
    history['pushState'] = _0x11af64('pushState'), history['replaceState'] = _0x11af64('replaceState'), window['addEventListener']('popstate', _0x33f84e), window['addEventListener']('hashchange', _0x33f84e);
}()));