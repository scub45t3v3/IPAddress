(function() {
  var IP, IP4Address, IP6Address, isIP;

  ({isIP} = require('net'));

  IP4Address = require('./IP4Address');

  IP6Address = require('./IP6Address');

  IP = function(value) {
    switch (isIP(value)) {
      case 4:
      case '4':
        return new IP4Address(value);
      case 6:
      case '6':
        return new IP6Address(value);
      default:
        throw new TypeError(`${value} must be an IPv4 or IPv6 address`);
    }
  };

  exports.IP = IP;

  exports.IP4Address = IP4Address;

  exports.IP6Address = IP6Address;

}).call(this);
