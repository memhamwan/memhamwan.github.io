const { ips, getIpsForSite, sites, sortIps } = require('./ips');

test('sortIps can handle last-octet a < b', () => {
  expect(sortIps('192.168.0.1', '192.168.0.2')).toBe(-1);
});
test('sortIps can handle last-octet a == b', () => {
  expect(sortIps('192.168.0.1', '192.168.0.1')).toBe(0);
});
test('sortIps can handle last-octet a > b', () => {
  expect(sortIps('192.168.0.2', '192.168.0.1')).toBe(1);
});
test('sortIps can handle first-octet a > b', () => {
  expect(sortIps('10.0.0.1', '8.8.8.8')).toBe(1);
});
test('sortIps can handle first-octet a < b', () => {
  expect(sortIps('192.168.0.1', '255.255.255.255')).toBe(-1);
});