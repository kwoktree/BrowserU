function regExpMatch(url, pattern) {
	try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*goo|t.co|gfw|facebook|twitter|wikipedia|mitbbs*")) return 'PROXY 127.0.0.1:1998';
	if (shExpMatch(url, "*weibo|sina|douban|qq|xunlei|quantserve|renren|360|baidu|youdao|cnzz*")) return 'DIRECT';
	if (shExpMatch(url, "*ycombinator*")) return 'DIRECT';
	if(shExpMatch(host, 'localhost')) return 'DIRECT';
	if(shExpMatch(host, '127.0.0.1')) return 'DIRECT';
	if(shExpMatch(host, '<local>')) return 'DIRECT';
	return 'PROXY 127.0.0.1:1998';
}