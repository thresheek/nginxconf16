function handler(s) {
    if (s.fromUpstream) {
        return;
    }

    //  '() { '
    var ss = /\(\s*\)\s+{/;

    if (ss.exec(s.buffer)) {
        s.log('shell shock detected!');
    }

    var httpoxyre = /Proxy:\s+/i;
    if (httpoxyre.exec(s.buffer)) {
        s.abort('HTTPoxy prevented!');
    }
}
