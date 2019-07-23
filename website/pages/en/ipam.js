// eslint-disable-next-line import/no-extraneous-dependencies
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const { ips, sites } = require(process.cwd() + '/ipam.json');
const { sortIps } = require(process.cwd() + '/ips.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Ipam extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { site: null };
    }

    _renderIpAddressTable() {
    return ips.sort((a, b) => sortIps(a.address, b.address)).map((ip) => 
        <tr key={ip.address}>
            <td>{ip.address}</td>
            <td>{ip.cidr}</td>
            <td><a href={"http://" + ip.name + ".memhamwan.net"}>{ip.name}</a></td>
            <td><a href={"docs/" + ip.site}>{ip.site}</a></td>
            <td><a href={"https://github.com/memhamwan/inventory/issues/" + ip.asset}>{ip.asset}</a></td>
        </tr>
    );
  };

  render() {
      return (
            <div className="docMainWrapper wrapper">
            <Container className="mainContainer documentContainer postContainer">
                <div className="post">
                <header className="postHeader">
                    <h1>Ipam</h1>
                </header>
                </div>
                <table>
                    <thead>
                        <th>IP</th>
                        <th>CIDR</th>
                        <th>Domain name</th>
                        <th>Site</th>
                        <th>Asset</th>
                    </thead>
                    <tbody>
                    {this._renderIpAddressTable()}
                    </tbody>
                </table>
                Notice something wrong or missing? Update it in the <a href="https://github.com/memhamwan/memhamwan.github.io/blob/source/website/ipam.json">database</a>.
            </Container>
            </div>
        );
    }
}

module.exports = Ipam;
