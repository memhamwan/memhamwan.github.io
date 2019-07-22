
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

const sites = {
    sco: {
        abbreviation: 'sco'
    },
    leb: {
        abbreviation: 'leb'
    },
    mno: {
        abbreviation: 'mno'
    },
    hil: {
        abbreviation: 'hil'
    },
    azo: {
        abbreviation: 'azo'
    },
    client: {
        abbreviation: 'clients'
    }
};
let ips = [
    {
        address: '44.34.129.49',
        name: 'ap1.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.40',
        name: 'leb.sco',
        site: sites.sco,
        asset: '5',
        cidr: 28
    },
    {
        address: '44.34.128.37',
        name: '60g.leb.sco',
        site: sites.sco,
        asset: '5',
        cidr: 28
    },
    {
        address: '44.34.128.34',
        name: 'sec1.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.35',
        name: 'sec2.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.36',
        name: 'sec3.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.39',
        name: 'vrrp.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.97',
        name: 'leb.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.110',
        name: 'mno.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.129.39',
        name: 'leb.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.129.35',
        name: 'r2.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.129.33',
        name: 'vrrp.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.129.34',
        name: 'r1.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.131.140',
        name: 'wlan.leb.mno',
        site: sites.mno,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.131.141',
        name: 'wlan.mno.leb',
        site: sites.leb,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.129.40',
        name: 'sec1.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.241',
        name: 'wlan.sec1.mno',
        site: sites.mno,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.129.41',
        name: 'sec2.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.129.1',
        name: 'wlan.sec2.mno',
        site: sites.mno,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.129.42',
        name: 'sec3.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.129.17',
        name: 'wlan.sec3.mno',
        site: sites.mno,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.131.139',
        name: 'wlan.mno.hil',
        site: sites.hil,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.131.138',
        name: 'wlan.hil.mno',
        site: sites.mno,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.129.38',
        name: 'hil.mno',
        site: sites.mno,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.99',
        name: 'sec1.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.113',
        name: 'wlan.sec1.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.100',
        name: 'sec2.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.101',
        name: 'sec3.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.145',
        name: 'wlan.sec3.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.102',
        name: 'vrrp.hil',
        site: sites.hil,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.222',
        name: 'k4sof',
        site: sites.leb,
        asset: null,
        cidr: null
    },
    {
        address: '44.34.128.175',
        name: 'hil.leb',
        site: sites.client,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.131.130',
        name: 'wlan.hil.leb',
        site: sites.leb,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.131.131',
        name: 'wlan.leb.hil',
        site: sites.hil,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.131.142',
        name: 'wlan.azo.leb',
        site: sites.leb,
        asset: null,
        cidr: 32,
    },
    {
        address: '44.34.131.143',
        name: 'wlan.leb.azo',
        site: sites.azo,
        asset: null,
        cidr: 32
    },
    {
        address: '44.34.128.65',
        name: 'wlan0.sec2.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.33',
        name: 'r1.sco',
        site: sites.sco,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.131.132',
        name: 'wlan0.sco.leb',
        site: sites.leb,
        asset: '6',
        cidr: 32
    },
    {
        address: '44.34.131.133',
        name: 'wlan0.leb.sco',
        site: sites.sco,
        asset: '5',
        cidr: 32
    },
    {
        address: '44.34.128.167',
        name: 'sco.leb',
        site: sites.leb,
        asset: '6',
        cidr: 27
    },
    {
        address: '44.34.128.162',
        name: 'r2.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.163',
        name: 'wlan.60g.leb.sco',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.164',
        name: 'esxi1.sco',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.166',
        name: 'ilo.papaya.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.168',
        name: 'crw.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.169',
        name: 'blueiris.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.170',
        name: 'ntp.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.171',
        name: 'nvr.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.172',
        name: 'idrac.esxi1.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.174',
        name: 'vrrp.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        name: 'papaya.leb',
        site: sites.leb,
        address: '44.34.128.165',
        cidr: 27,
        asset: null
    },
    {
        address: '44.34.128.175',
        name: 'hil.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.176',
        name: 'cloud.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.187',
        name: 'mno.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.184',
        name: 'azo.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.183',
        name: 'omn1.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.209',
        name: 'wlan.omn1.leb',
        site: sites.leb,
        asset: null,
        cidr: 28
    },
    {
        address: '44.34.128.161',
        name: 'r1.leb',
        site: sites.leb,
        asset: 10,
        cidr: 27
    }
].sort((a, b) => sortIps(a.address, b.address));

const getIpsForSite = (site) => ips.filter(ip => ip.site === site);

module.exports = { ips, getIpsForSite, sites, sortIps };
