(function (_0xf94834, _0x219d5e) {
    if (typeof exports === 'object' && typeof module !== 'undefined')
        module['exports'] = _0x219d5e();
    else {
        if (typeof define === 'function' && define['amd'])
            define(_0x219d5e);
        else
            _0xf94834['H265'] = _0x219d5e();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    const _0x3ca680 = 'video/mp4;\x20codecs=\x22avc1.640028\x22', _0x18c449 = 'application/vnd.apple.mpegurl', _0x1a2926 = [
            'video/mp4;\x20codecs=\x22hvc1.1.6.L120.90\x22',
            'video/mp4;\x20codecs=\x22hev1.1.6.L120.90\x22',
            'video/mp4;\x20codecs=\x22hvc1.2.4.L120.90\x22',
            'video/mp4;\x20codecs=\x22hev1.2.4.L120.90\x22'
        ], _0x5388aa = [
            {
                'test': /\bquark\b/i,
                'reason': '夸克浏览器：HEVC\x20解码不稳定，强制降级\x20H.264'
            },
            {
                'test': /\bm?qqbrowser\b/i,
                'reason': 'QQ\x20浏览器：HEVC\x20解码不稳定，强制降级\x20H.264'
            }
        ];
    function _0x440883(_0x146cb3) {
        const _0x2cda0d = _0x146cb3 || typeof navigator !== 'undefined' && navigator['userAgent'] || '', _0x16a1ba = _0x5388aa['find'](_0x1e8dfe => _0x1e8dfe['test']['test'](_0x2cda0d));
        return _0x16a1ba ? _0x16a1ba['reason'] : null;
    }
    function _0x36ded3(_0x3ca442) {
        const _0x18f59e = _0x3ca442 || typeof navigator !== 'undefined' && navigator['userAgent'] || '', _0x48b770 = typeof navigator !== 'undefined' && navigator['maxTouchPoints'] > 0x1, _0x570c27 = /Macintosh/i['test'](_0x18f59e), _0x2e25c6 = /iPad|iPhone|iPod/i['test'](_0x18f59e) || _0x570c27 && _0x48b770, _0x2ab4b8 = /Safari/i['test'](_0x18f59e) && !/Chrome|Chromium|Android|Edg\//i['test'](_0x18f59e);
        return _0x2e25c6 || _0x570c27 && _0x2ab4b8;
    }
    async function _0x2a68c9(_0x4f7907, _0x37833b) {
        const _0xe9b9ef = _0x37833b || (() => {
        });
        if (!_0x4f7907)
            return null;
        const _0x17d749 = async _0x3ed394 => (await fetch(_0x3ed394, { 'cache': 'no-store' }))['text']();
        try {
            const _0xe1c516 = await _0x17d749(_0x4f7907), _0x293e3c = _0xe1c516['match'](/CODECS="([^"]*)"/i), _0x3c42cf = /#EXT-X-STREAM-INF/i['test'](_0xe1c516) ? _0x43105d(_0xe1c516, _0x4f7907) : [], _0x5319a5 = _0x3c42cf['find'](_0x55ab43 => _0x55ab43['type'] === 'hevc') || _0x3c42cf[0x0] || null, _0x4228e4 = _0x5319a5 ? _0x5319a5['codecs'] : _0x293e3c ? _0x293e3c[0x1] : null, _0x1ed019 = _0x5319a5 ? await _0x17d749(_0x5319a5['url']) : _0xe1c516, _0x4606da = /#EXT-X-MAP/i['test'](_0x1ed019) || /\.m4s|\.mp4/i['test'](_0x1ed019) ? 'fmp4' : /\.ts/i['test'](_0x1ed019) ? 'ts' : 'unknown', _0x29560b = (_0x1ed019['match'](/#EXT-X-VERSION:\s*(\d+)/i) || [])[0x1], _0x2a48d2 = /#EXT-X-MAP/i['test'](_0x1ed019) && !/#EXT-X-I-FRAMES-ONLY/i['test'](_0x1ed019) && Number(_0x29560b || 0x0) < 0x6, _0xd23799 = {
                    'codecs': _0x4228e4,
                    'vodFormat': _0x4606da,
                    'isVersion': _0x2a48d2,
                    'mainVariants': _0x3c42cf
                };
            return _0xe9b9ef({
                'phase': 'manifest',
                'ok': !![],
                'manifest': _0xd23799
            }), _0xd23799;
        } catch (_0xe90896) {
            return console['error']('[player.h265]\x20清单失败', _0xe90896['message']), _0xe9b9ef({
                'phase': 'manifest',
                'ok': ![],
                'reason': _0xe90896['message']
            }), null;
        }
    }
    async function _0x1b0a9c(_0x199030, _0x3c5b8c) {
        const _0x38eade = _0x3c5b8c || (() => {
            }), _0x5cdb0d = _0xf6008a(_0x199030 && _0x199030['codecs']), _0x2dc46e = _0x5cdb0d ? []['concat'](_0x5cdb0d) : _0x1a2926, _0x443745 = document['createElement']('video'), _0xde082a = _0x553518 => _0x443745['canPlayType'](_0x553518) !== '', _0x151b6f = window['ManagedMediaSource'] || window['MediaSource'], _0x553be9 = _0x448330 => !!(_0x151b6f && _0x151b6f['isTypeSupported'] && _0x151b6f['isTypeSupported'](_0x448330)), _0x4b4950 = _0x2dc46e['find'](_0x3f1d26 => _0xde082a(_0x3f1d26) || _0x553be9(_0x3f1d26)) || _0x2dc46e[0x0], _0x1eba41 = {
                'nativeHls': _0xde082a(_0x18c449),
                'nativeAvc': _0xde082a(_0x3ca680),
                'nativeHevc': _0x2dc46e['some'](_0xde082a),
                'mseHevc': _0x2dc46e['some'](_0x553be9),
                'mseAvc': _0x553be9(_0x3ca680),
                'mse': !!_0x151b6f,
                'hlsjs': !!(window['Hls'] && window['Hls']['isSupported'] && window['Hls']['isSupported']()),
                'hevcDeny': _0x440883(),
                'isApple': _0x36ded3(),
                'mime': _0x4b4950,
                'isHardware': null,
                'isSmooth': null
            };
        if (navigator['mediaCapabilities'] && navigator['mediaCapabilities']['decodingInfo'])
            try {
                const _0x30d035 = await navigator['mediaCapabilities']['decodingInfo']({
                    'type': _0x1eba41['nativeHls'] ? 'file' : 'media-source',
                    'video': {
                        'contentType': _0x4b4950,
                        'width': 0x780,
                        'height': 0x438,
                        'bitrate': 0x2dc6c0,
                        'framerate': 0x1e
                    }
                });
                _0x1eba41['isHardware'] = _0x30d035['supported'] ? _0x30d035['powerEfficient'] : ![], _0x1eba41['isSmooth'] = _0x30d035['supported'] ? _0x30d035['smooth'] : ![];
            } catch (_0x3ff79c) {
            }
        return _0x38eade({
            'phase': 'capabilities',
            'capables': _0x1eba41,
            'mime': _0x1eba41['mime']
        }), _0x1eba41;
    }
    function _0xf03e37(_0x5b378f, _0x453d4e, {
        timeout: timeout = 0x1388
    } = {}) {
        const _0x4f39e7 = _0xe68514 => {
            if (_0xe68514['getVideoPlaybackQuality'])
                return _0xe68514['getVideoPlaybackQuality']()['totalVideoFrames'];
            return _0xe68514['webkitDecodedFrameCount'] || 0x0;
        };
        return new Promise(_0x3c6afc => {
            const _0x572efb = document['createElement']('video');
            _0x572efb['muted'] = !![], _0x572efb['volume'] = 0x0, _0x572efb['playsInline'] = !![], _0x572efb['preload'] = 'auto', _0x572efb['setAttribute']('muted', ''), _0x572efb['setAttribute']('playsinline', ''), _0x572efb['setAttribute']('webkit-playsinline', ''), _0x572efb['setAttribute']('x5-playsinline', ''), _0x572efb['setAttribute']('x5-video-player-type', 'h5-page'), _0x572efb['setAttribute']('x5-video-player-fullscreen', 'false'), _0x572efb['setAttribute']('t7-video-player-type', 'inline'), _0x572efb['setAttribute']('style', 'position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;pointer-events:none'), document['body']['appendChild'](_0x572efb);
            let _0x300542 = null, _0x4a4336 = null, _0x5dbaa5 = null, _0x1fd9bc = ![];
            const _0x2075f8 = () => {
                    if (_0x4a4336)
                        clearInterval(_0x4a4336);
                    if (_0x300542)
                        try {
                            _0x300542['destroy']();
                        } catch (_0x313d4a) {
                        }
                    _0x572efb['removeAttribute']('src');
                    try {
                        _0x572efb['load']();
                    } catch (_0xf442d1) {
                    }
                    if (_0x572efb['parentNode'])
                        _0x572efb['parentNode']['removeChild'](_0x572efb);
                }, _0x1241d1 = (_0x493cd3, _0x1d8c58) => {
                    if (_0x1fd9bc)
                        return;
                    _0x1fd9bc = !![];
                    const {
                            videoWidth: _0x3f6d27,
                            videoHeight: _0x392814
                        } = _0x572efb, _0x9b4d31 = Date['now']() - _0x1cb4f5;
                    _0x2075f8(), console['log']('[player.h265]\x20播放探测', _0x1d8c58, _0x3f6d27 + '×' + _0x392814, _0x9b4d31 + 'ms'), _0x3c6afc({
                        'ok': _0x493cd3,
                        'reason': _0x1d8c58,
                        'width': _0x3f6d27,
                        'height': _0x392814,
                        'cost': _0x9b4d31
                    });
                }, _0x1cb4f5 = Date['now']();
            _0x4a4336 = setInterval(() => {
                if (_0x5dbaa5)
                    return _0x1241d1(![], _0x5dbaa5);
                if (_0x572efb['error'])
                    return _0x1241d1(![], 'MediaError\x20code=' + _0x572efb['error']['code']);
                if (_0x572efb['videoWidth'] > 0x0 && (_0x4f39e7(_0x572efb) > 0x0 || _0x572efb['readyState'] >= 0x3))
                    return _0x1241d1(!![], '画面解析');
                if (_0x572efb['currentTime'] > 0x1 && _0x572efb['videoWidth'] === 0x0)
                    return _0x1241d1(![], '切片异常');
                Date['now']() - _0x1cb4f5 > timeout && _0x1241d1(![], '切片异常（' + _0x572efb['readyState'] + '）' + timeout / 0x3e8 + 's');
            }, 0xc8);
            if (_0x5b378f === 'native') {
                _0x572efb['src'] = _0x453d4e, _0x572efb['play']()['catch'](() => {
                });
                return;
            }
            const _0x41523b = window['Hls'];
            if (!_0x41523b) {
                _0x5dbaa5 = '缺失HLS';
                return;
            }
            _0x300542 = new _0x41523b({ 'enableWorker': !![] }), _0x300542['on'](_0x41523b['Events']['ERROR'], (_0x43c8b3, _0x6a6b74) => {
                if (_0x6a6b74['fatal'])
                    _0x5dbaa5 = 'hls.js\x20' + _0x6a6b74['type'] + '/' + _0x6a6b74['details'];
            }), _0x300542['on'](_0x41523b['Events']['MANIFEST_PARSED'], () => {
                _0x572efb['play']()['catch'](() => {
                });
            }), _0x300542['loadSource'](_0x453d4e), _0x300542['attachMedia'](_0x572efb);
        });
    }
    function _0x43105d(_0x354b4d, _0x4339d2) {
        const _0x3eb599 = [];
        let _0x4b5410 = null;
        for (const _0x134fd4 of _0x354b4d['split']('\x0a')) {
            const _0x1ffbc5 = _0x134fd4['trim']();
            if (/^#EXT-X-STREAM-INF:/i['test'](_0x1ffbc5)) {
                const _0x5d9cca = _0x1ffbc5['match'](/CODECS="([^"]*)"/i);
                _0x4b5410 = _0x5d9cca ? _0x5d9cca[0x1] : '';
                continue;
            }
            if (_0x4b5410 === null || !_0x1ffbc5 || _0x1ffbc5['charAt'](0x0) === '#')
                continue;
            _0x3eb599['push']({
                'url': new URL(_0x1ffbc5, _0x4339d2)['href'],
                'codecs': _0x4b5410,
                'type': /hvc1|hev1/i['test'](_0x4b5410) ? 'hevc' : /avc1|avc3/i['test'](_0x4b5410) ? 'avc' : 'other'
            }), _0x4b5410 = null;
        }
        return _0x3eb599;
    }
    function _0xf6008a(_0x16f705) {
        if (!_0x16f705)
            return null;
        const _0x456f13 = _0x16f705['split'](',')['map'](_0x3cff65 => _0x3cff65['trim']())['find'](_0x115fa4 => /^(hvc1|hev1|avc1|avc3)\./i['test'](_0x115fa4));
        return _0x456f13 ? 'video/mp4;\x20codecs=\x22' + _0x456f13 + '\x22' : null;
    }
    function _0x5b8328(_0x3822b4, _0x4c34a2, _0xe6e60a, _0x450958) {
        const _0x3479cd = [], _0x5b4791 = _0x4c34a2 && _0x4c34a2['vodFormat'] === 'ts', _0x2a5d5d = !!(_0x4c34a2 && _0x4c34a2['isVersion']), _0x331eb7 = _0x4c34a2 && _0x4c34a2['mainVariants']['find'](_0x4452c5 => _0x4452c5['type'] === 'avc'), _0x596549 = _0x450958 || _0x331eb7 && _0x331eb7['url'] || null, _0x13fc1e = _0x596549 ? _0x3822b4['hevcDeny'] : null, _0x411593 = (_0x1286f5, _0x2d491d, _0x28fce4, _0x27cb15, _0x35d594) => {
                _0x3479cd['push']({
                    'tier': _0x1286f5,
                    'engine': _0x2d491d,
                    'codec': _0x28fce4,
                    'url': _0x27cb15,
                    'status': _0x35d594 ? 'blocked' : 'pending',
                    'reason': _0x35d594 || null
                });
            };
        _0xe6e60a && (_0x411593('HEVC原生解码', 'native', 'h265', _0xe6e60a, _0x13fc1e ? _0x13fc1e : !_0x3822b4['nativeHls'] ? '浏览器不支持原生HLS' : !_0x3822b4['nativeHevc'] ? '支持原生HLS，但无HEVC解码器' : _0x5b4791 ? 'M3U8非FMP4封装，原生解画面异常' : _0x2a5d5d ? '清单版本非法' : null), _0x411593('HLS转封装解码', 'hlsjs', 'h265', _0xe6e60a, _0x13fc1e ? _0x13fc1e : !_0x3822b4['hlsjs'] ? '引入寄生HLS' : !_0x3822b4['mse'] ? '浏览器无MSE' : !_0x3822b4['mseHevc'] ? '不支持HEVC,\x20缺少硬件解码器' : null));
        if (_0x596549) {
            const _0x4b5cd9 = _0x3822b4['nativeHls'], _0x53fa25 = _0x3822b4['hlsjs'] && _0x3822b4['mse'] && _0x3822b4['mseAvc'], _0x3e6b21 = _0x4b5cd9 && _0x3822b4['isApple'] ? [
                    'native',
                    'hlsjs'
                ] : [
                    'hlsjs',
                    'native'
                ];
            for (const _0x591755 of _0x3e6b21) {
                _0x591755 === 'native' && _0x4b5cd9 && _0x411593('HLS原生H264解码', 'native', 'h264', _0x596549, null), _0x591755 === 'hlsjs' && _0x53fa25 && _0x411593('HLS.MSE降级H264', 'hlsjs', 'h264', _0x596549, null);
            }
            !_0x4b5cd9 && !_0x53fa25 && _0x411593('降级H264', 'native', 'h264', _0x596549, '不支持原生HLS，不支持寄生HLS');
        }
        return _0x3479cd;
    }
    async function _0x246205({
        h265: _0x5cc219,
        h264: _0xcc039d,
        playerProbe: playerProbe = ![],
        probeTimeout: _0x8bb57a,
        onProgress: _0x17a72f
    } = {}) {
        console['log']('[player.h265]\x20', {
            'h265': _0x5cc219,
            'h264': _0xcc039d,
            'playerProbe': playerProbe
        });
        const _0x5966b7 = _0x17a72f || (() => {
            }), _0xf28d97 = _0x24651e => {
                return console['log']('[player.h265]\x20异常结果', _0x24651e), _0x5966b7({
                    'phase': 'error',
                    'ok': ![],
                    'reason': _0x24651e
                }), {
                    'codec': null,
                    'engine': null,
                    'url': null,
                    'tier': null,
                    'hardware': null,
                    'capables': null,
                    'manifest': null,
                    'chains': [],
                    'error': _0x24651e
                };
            };
        if (!_0x5cc219 && !_0xcc039d)
            return _0xf28d97('缺少地址h265、h264');
        try {
            const _0x613331 = await _0x2a68c9(_0x5cc219, _0x5966b7), _0x27db94 = await _0x1b0a9c(_0x613331, _0x5966b7), _0x323e5f = _0x5b8328(_0x27db94, _0x613331, _0x5cc219, _0xcc039d);
            console['log']('[player.h265]\x20清单结果', _0x613331), console['log']('[player.h265]\x20能力结果', _0x27db94), console['log']('[player.h265]\x20候链结果', _0x323e5f);
            const _0x306ca3 = {
                    'codec': null,
                    'engine': null,
                    'url': null,
                    'tier': null,
                    'hardware': _0x27db94['isHardware'],
                    'capables': _0x27db94,
                    'manifest': _0x613331,
                    'chains': _0x323e5f
                }, _0x3fc8b6 = ({
                    codec: _0x3fc584,
                    engine: _0x41ff45,
                    url: _0x29615a,
                    tier: _0x8df1f7
                }) => {
                    Object['assign'](_0x306ca3, {
                        'codec': _0x3fc584,
                        'engine': _0x41ff45,
                        'url': _0x29615a,
                        'tier': _0x8df1f7
                    });
                }, _0xbbac4f = (_0x312c9f, _0x32a86b, _0x2049ff) => {
                    _0x312c9f['status'] = _0x32a86b, _0x312c9f['reason'] = _0x2049ff, _0x5966b7({
                        'phase': 'tier',
                        'resource': _0x312c9f
                    });
                };
            for (const _0x11d59d of _0x323e5f) {
                if (_0x11d59d['status'] === 'blocked') {
                    _0x5966b7({
                        'phase': 'tier',
                        'resource': _0x11d59d
                    });
                    continue;
                }
                if (!playerProbe)
                    return _0xbbac4f(_0x11d59d, 'ok', '判定通过（不做出帧校验）'), _0x3fc8b6(_0x11d59d), console['log']('[player.h265]\x20命中静态', _0x11d59d['tier'], _0x11d59d['engine'], _0x11d59d['url']), _0x306ca3;
                if (_0x27db94['hevcDeny'])
                    return _0xbbac4f(_0x11d59d, 'ok', '代理通过（不做出帧校验）'), _0x3fc8b6(_0x11d59d), console['log']('[player.h265]\x20命中静态', _0x11d59d['tier'], _0x11d59d['engine'], _0x11d59d['url']), _0x306ca3;
                _0xbbac4f(_0x11d59d, 'trying', null);
                const _0x352091 = await _0xf03e37(_0x11d59d['engine'], _0x11d59d['url'], { 'timeout': _0x8bb57a });
                if (!_0x352091['ok']) {
                    _0xbbac4f(_0x11d59d, 'failed', _0x352091['reason'] + '（耗时' + _0x352091['cost'] + 'ms）');
                    continue;
                }
                return _0xbbac4f(_0x11d59d, 'ok', '画面校验\x20' + _0x352091['width'] + '×' + _0x352091['height'] + '（耗时' + _0x352091['cost'] + 'ms）'), _0x3fc8b6(_0x11d59d), console['log']('[player.h265]\x20命中出帧', _0x11d59d['tier'], _0x11d59d['engine'], _0x11d59d['url']), _0x11d59d['codec'] === 'h265' && _0x11d59d['engine'] === 'native' && _0x27db94['isHardware'] === null && (_0x306ca3['hardware'] = !![]), _0x306ca3;
            }
            return console['log']('[player.h265]\x20全不可用'), _0x306ca3;
        } catch (_0x2a9921) {
            return _0xf28d97(_0x2a9921['message']);
        }
    }
    return {
        'support': _0x246205,
        'surveyCapables': _0x1b0a9c
    };
}));