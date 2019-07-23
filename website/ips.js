
const sortIps = (a, b) => {
    const aOctets = a.split('.');
    const bOctets = b.split('.');
    if(aOctets.length != 4 || bOctets.length != 4) throw new Error("must be a valid IPv4 address");
    for(let n = 0; n < 4; n++) {
        x = Number(aOctets[n]);
        y = Number(bOctets[n]);
        if(x == NaN || y == NaN) throw new Error("must be a valid IPv4 address");
        if(x > y) return 1;
        if(x < y) return -1;
    }
    return 0;
};

module.exports = { sortIps };
