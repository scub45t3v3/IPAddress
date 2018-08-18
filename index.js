'use strict';

(() => {
  // include dependencies
  const {isIP} = require('net');
  const IP4Address = require('./IP4Address');
  const IP6Address = require('./IP6Address');

  // IP factory
  const IP = (value) => {
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

  // export as commonjs module
  exports.IP = IP;
  exports.IP4Address = IP4Address;
  exports.IP6Address = IP6Address;
})(); // end IIFE