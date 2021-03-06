'use strict';

(() => {
  // require dependencies
  const unit = require('unit.js');
  const {
    IP,
    IP4Address,
    IP6Address,
  } = require('../index');

  // describe IP
  describe('IP', () => {
    it('should be a function', () => {
      unit
        .function(IP);
    }); // end it

    it('should return an instance of IP4Address when given a version 4 ip string', () => {
      unit
        .object(IP('127.0.0.1'))
        .isInstanceOf(IP4Address)
        .object(IP('192.168.0.1'))
        .isInstanceOf(IP4Address);
    }); // end it

    it('should return an instance of IP6Address when given a version 6 ip string', () => {
      unit
        .object(IP('::1'))
        .isInstanceOf(IP6Address)
        .object(IP('2001:db8::ff00:42:8329'))
        .isInstanceOf(IP6Address);
    }); // end it

    it('should throw an Error when given an invalid ip address', () => {
      unit
        .error(() => {
          IP('a');
        })
        .error(() => {
          IP(5);
        })
        .error(() => {
          IP([]);
        })
        .error(() => {
          IP({});
        });
    }); // end it
  }); // end describe IP
})(); // end IIFE