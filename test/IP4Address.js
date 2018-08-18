'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const IP4Address = require('../IP4Address');
  const {version} = require('../package');

  // describe IP4Address
  describe('IP4Address', () => {
    it('should be a function', () => {
      unit
        .function(IP4Address);
    }); // end it

    it('should return an instance of IP4Address', () => {
      unit
        .object(new IP4Address())
        .isInstanceOf(IP4Address)
        .isEnumerable('address')
        .isNotEnumerable('public')
        .isNotEnumerable('private')
        .isNotEnumerable('loopback')
        .isNotEnumerable('VERSION')
        .isNotEnumerable('IP_VERSION')
        .hasProperty('VERSION', version)
        .hasProperty('IP_VERSION', 4);
    }); // end it

    it('should return an instance of IP4Address when called without new', () => {
      unit
        .object(IP4Address())
        .isInstanceOf(IP4Address)
        .isEnumerable('address')
        .isNotEnumerable('public')
        .isNotEnumerable('private')
        .isNotEnumerable('loopback')
        .isNotEnumerable('VERSION')
        .isNotEnumerable('IP_VERSION')
        .hasProperty('VERSION', version)
        .hasProperty('IP_VERSION', 4);
    }); // end it

    // describe #address
    describe('#address', () => {
      it('should accept a valid version 4 ip address string', () => {
        const test = new IP4Address();
        const ip = '127.0.0.1';

        unit
          .given(test.address = ip)
          .string(test.address)
          .is(ip);
      }); // end it

      it('should accept null or undefined as undefined', () => {
        const test = new IP4Address();

        unit
          .given(test.address = null)
          .value(test.address)
          .isUndefined()
          .given(test.address = undefined)
          .value(test.address)
          .isUndefined();
      }); // end it

      it('should throw an Error when setting to an invalid version 4 ip address', () => {
        const test = new IP4Address();

        unit
          .error(() => {
            test.address = 'a';
          })
          .error(() => {
            test.address = '192.168.0';
          })
          .error(() => {
            test.address = '192.168.0.256';
          })
          .error(() => {
            test.address = '::1';
          });
      }); // end it
    }); // end describe #address

    // describe #public
    describe('#public', () => {
      it('should return true for public addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '74.125.130.113')
          .bool(test.public)
          .isTrue()
          .given(test.address = '64.85.171.16')
          .bool(test.public)
          .isTrue();
      }); // end it

      it('should return false for non public addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .bool(test.public)
          .isFalse()
          .given(test.address = '192.168.0.1')
          .bool(test.public)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP4Address();

        unit
          .error(() => {
            test.public = true;
          })
          .error(() => {
            test.public = 'a';
          })
          .error(() => {
            test.public = 1;
          })
          .error(() => {
            test.public = () => {
              return true;
            };
          });
      }); // end it
    }); // end describe #public

    // describe #private
    describe('#private', () => {
      it('should return true for private addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '192.168.0.1')
          .bool(test.private)
          .isTrue()
          .given(test.address = '10.0.0.1')
          .bool(test.private)
          .isTrue();
      }); // end it

      it('should return false for non private addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '74.125.130.113')
          .bool(test.private)
          .isFalse()
          .given(test.address = '64.85.171.16')
          .bool(test.private)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP4Address();

        unit
          .error(() => {
            test.private = true;
          })
          .error(() => {
            test.private = 'a';
          })
          .error(() => {
            test.private = 1;
          })
          .error(() => {
            test.private = () => {
              return true;
            };
          });
      }); // end it
    }); // end describe #private

    // describe #loopback
    describe('#loopback', () => {
      it('should return true for loopback addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .bool(test.loopback)
          .isTrue()
          .given(test.address = '127.255.255.255')
          .bool(test.loopback)
          .isTrue();
      }); // end it

      it('should return false for non loopback addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '74.125.130.113')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = '64.85.171.16')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = '192.168.0.1')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = '10.0.0.1')
          .bool(test.loopback)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP4Address();

        unit
          .error(() => {
            test.loopback = true;
          })
          .error(() => {
            test.loopback = 'a';
          })
          .error(() => {
            test.loopback = 1;
          })
          .error(() => {
            test.loopback = () => {
              return true;
            };
          });
      }); // end it
    }); // end describe #loopbakc

    // describe #isEqual
    describe('#isEqual', () => {
      it('should be a function', () => {
        const test = new IP4Address();

        unit
          .function(test.isEqual);
      }); // end it

      it('should return true for equal ip addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .bool(test.isEqual('127.0.0.1'))
          .isTrue()
          .given(test.address = '192.168.0.1')
          .bool(test.isEqual('192.168.0.1'))
          .isTrue();
      }); // end it

      it('should return false for non equal ip addresses', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .bool(test.isEqual('127.0.0.2'))
          .isFalse()
          .given(test.address = '192.168.0.1')
          .bool(test.isEqual('127.0.0.1'))
          .isFalse();
      }); // end it
    }); // end describe #isEqual

    // describe #toJSON
    describe('#toJSON', () => {
      it('should be a function', () => {
        const test = new IP4Address();

        unit
          .function(test.toJSON);
      }); // end it

      it('should return an object literal', () => {
        const test = new IP4Address();

        unit
          .object(test.toJSON())
          .hasProperty('address', undefined)
          .hasProperty('public', false)
          .hasProperty('private', false)
          .hasProperty('loopback', false)
          .given(test.address = '127.0.0.1')
          .object(test.toJSON())
          .hasProperty('address', '127.0.0.1')
          .hasProperty('public', false)
          .hasProperty('private', false)
          .hasProperty('loopback', true);
      }); // end it
    }); // end describe #toJSON

    // describe #toArray
    describe('#toArray', () => {
      it('should be a function', () => {
        const test = new IP4Address();

        unit
          .function(test.toArray);
      }); // end it

      it('should return an empty array when address is not set', () => {
        const test = new IP4Address();

        unit
          .array(test.toArray())
          .isEmpty();
      }); // end it

      it('should return an array of ip octets', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .array(test.toArray())
          .is(['127', '0', '0', '1']);
      }); // end it
    }); // end describe #toArray

    // describe #toString
    describe('#toString', () => {
      it('should be a function', () => {
        const test = new IP4Address();

        unit
          .function(test.toString);
      }); // end it

      it('should return an empty string when address is not set', () => {
        const test = new IP4Address();

        unit
          .string(test.toString())
          .is('');
      }); // end it

      it('should return address as a string', () => {
        const test = new IP4Address();

        unit
          .given(test.address = '127.0.0.1')
          .string(test.toString())
          .is('127.0.0.1')
          .given(test.address = '192.168.0.1')
          .string(test.toString())
          .is('192.168.0.1')
          .given(test.address = '74.125.130.113')
          .string(test.toString())
          .is('74.125.130.113');
      }); // end it
    }); // end describe #toString

    // describe #[Symbol.toStringTag]
    describe('#[Symbol.toStringTag]', () => {
      it('should return "@scuba-squad/ip4address"', () => {
        const test = new IP4Address();

        unit
          .string(test[Symbol.toStringTag])
          .is('@scuba-squad/ip4address');
      }); // end it

      it('should return "[object @scuba-squad/ip4address]" for Object.prototype.toString.call', () => {
        const test = new IP4Address();

        unit
          .string(Object.prototype.toString.call(test))
          .is('[object @scuba-squad/ip4address]');
      }); // end it
    }); // end describe #[Symbol.toStringTag]
  }); // end describe IP4Address
})(); // end IIFE