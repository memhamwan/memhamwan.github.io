const sites = {
    sco: {
        abbreviation: 'sco'
    },
    leb: {
        abbreviation: 'leb'
    }
};
let ips = [
    {
        address: '44.34.128.37',
        name: 'leb.sco',
        site: sites.sco,
        asset: '5',
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
        name: '60g-leb.sco',
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
        address: '44.34.128.165',
        name: null,
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.166',
        name: null,
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
        name: 'mno.leb',
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: 'papaya.leb',
        site: sites.leb,
        address: '44.34.128.165',
        cidy: 27,
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
        name: null,
        site: sites.leb,
        asset: null,
        cidr: 27
    },
    {
        address: '44.34.128.161',
        name: 'r1.leb',
        sites: sites.leb,
        asset: 10,
        cidr: 27
    }
].sort((a, b) => {
    const aOctets = a.address.split('.');
    const bOctets = b.address.split('.');
    for(let n = 0; n < 4; n++) {
        if(aOctets[n] > bOctets[n]) return true;
        if(aOctets[n] < bOctets[n]) return false;
    }
    return false;
});

const getIpsForSite = (site) => ips.filter(ip => ip.site === site);

module.exports = { ips, getIpsForSite, sites };