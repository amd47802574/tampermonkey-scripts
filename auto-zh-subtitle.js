// ==UserScript==
// @name         B站自动打开字幕(适应AI字幕)
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  bilibili b站 哔哩哔哩 播放视频时自动打开网站字幕
// @author       Hungry Shark
// @match        https://www.bilibili.com/video/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @downloadURL https://raw.githubusercontent.com/amd47802574/tampermonkey-scripts/refs/heads/main/auto-zh-subtitle.js
// @updateURL https://raw.githubusercontent.com/amd47802574/tampermonkey-scripts/refs/heads/main/auto-zh-subtitle.js
// ==/UserScript==

(function() {
    'use strict';

    let queryValue = '';
    // 定时检测URL是否发生变化
    let timer = setInterval(function() {
        // 获取URL中的查询字符串部分
        const queryString = window.location.search;
        // 解析查询字符串，将参数以对象的形式存储
        const params = new URLSearchParams(queryString);
        // 获取特定参数的值
        const value = params.get('p');
        if (queryValue !== value) {
            openSubtitle();
            queryValue = value;
        }
    }, 2000);

    window.addEventListener('unload', function(_event) {
        clearInterval(timer)
    });

    function openSubtitle(){
        setTimeout(() => {
            document.querySelector('.bpx-player-ctrl-subtitle-language-item-text').click();
            document.querySelector('[data-lan="ai-zh"]').click();
        }, 1000)
    }
})();
