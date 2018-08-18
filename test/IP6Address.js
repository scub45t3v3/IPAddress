'use strict';

(() => {
  // include dependencies
  const unit = require('unit.js');
  const IP6Address = require('../IP6Address');
  const {version} = require('../package');

  // describe IP6Address
  describe('IP6Address', () => {
    it('should be a function', () => {
      unit
        .function(IP6Address);
    }); // end it

    it('should return an instance of IP6Address', () => {
      unit
        .object(new IP6Address())
        .isInstanceOf(IP6Address)
        .isEnumerable('address')
        .isNotEnumerable('public')
        .isNotEnumerable('private')
        .isNotEnumerable('loopback')
        .isNotEnumerable('VERSION')
        .isNotEnumerable('IP_VERSION')
        .hasProperty('VERSION', version)
        .hasProperty('IP_VERSION', 6);
    }); // end it

    it('should return an instance of IP6Address when called without new', () => {
      unit
        .object(IP6Address())
        .isInstanceOf(IP6Address)
        .isEnumerable('address')
        .isNotEnumerable('public')
        .isNotEnumerable('private')
        .isNotEnumerable('loopback')
        .isNotEnumerable('VERSION')
        .isNotEnumerable('IP_VERSION')
        .hasProperty('VERSION', version)
        .hasProperty('IP_VERSION', 6);
    }); // end it

    // describe #address
    describe('#address', () => {
      it('should accept a valid version 6 ip address string', () => {
        const test = new IP6Address();
        const ip = '::1';

        unit
          .given(test.address = ip)
          .string(test.address)
          .is(ip);
      }); // end it

      it('should accept null or undefined as undefined', () => {
        const test = new IP6Address();

        unit
          .given(test.address = null)
          .value(test.address)
          .isUndefined()
          .given(test.address = undefined)
          .value(test.address)
          .isUndefined();
      }); // end it

      it('should throw an Error when setting to an invalid version 6 ip address', () => {
        const test = new IP6Address();

        unit
          .error(() => {
            test.address = 'a';
          })
          .error(() => {
            test.address = 3;
          })
          .error(() => {
            test.address = '192.168.0.1';
          })
          .error(() => {
            test.address = '1:1';
          });
      }); // end it
    }); // end describe #address

    // describe #public
    describe('#public', () => {
      it('should return true for public addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '2001:db8::ff00:42:8329')
          .bool(test.public)
          .isTrue()
          .given(test.address = '2a01:db08::f700:4ff2:8329')
          .bool(test.public)
          .isTrue();
      }); // end it

      it('should return false for non public addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .bool(test.public)
          .isFalse()
          .given(test.address = 'fd16:db8::ff00:42:8329')
          .bool(test.public)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP6Address();

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
        const test = new IP6Address();

        unit
          .given(test.address = 'fd16:db8::ff00:42:8329')
          .bool(test.private)
          .isTrue()
          .given(test.address = 'fdff:db8::ff00')
          .bool(test.private)
          .isTrue();
      }); // end it

      it('should return false for non private addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '2001:db8::ff00:42:8329')
          .bool(test.private)
          .isFalse()
          .given(test.address = 'af56:db75::ff00')
          .bool(test.private)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP6Address();

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
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .bool(test.loopback)
          .isTrue();
      }); // end it

      it('should return false for non loopback addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '2001:db8::ff00:42:8329')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = 'fd16:db8::ff00:42:8329')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = '89d:3f8a::ff16:74af')
          .bool(test.loopback)
          .isFalse()
          .given(test.address = 'db8::ff00:42:8329')
          .bool(test.loopback)
          .isFalse();
      }); // end it

      it('should throw an Error when trying to set', () => {
        const test = new IP6Address();

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
    }); // end describe #loopback

    // describe #isEqual
    describe('#isEqual', () => {
      it('should be a function', () => {
        const test = new IP6Address();

        unit
          .function(test.isEqual);
      }); // end it

      it('should return true for equal ip addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .bool(test.isEqual('::0001'))
          .isTrue()
          .bool(test.isEqual('0:0::1'))
          .isTrue()
          .bool(test.isEqual('0:0:0:0:0:0:0:1'))
          .isTrue()
          .given(test.address = '2001:db8::ff00:42:8329')
          .bool(test.isEqual('2001:0db8::ff00:0042:8329'))
          .isTrue()
          .bool(test.isEqual('2001:db8:0:0:0:ff00:42:8329'))
          .isTrue();
      }); // end it

      it('should return false for non equal ip addresses', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .bool(test.isEqual('::10'))
          .isFalse()
          .bool(test.isEqual('::1:1'))
          .isFalse()
          .bool(test.isEqual('2001:db8::ff00:42:8329'))
          .isFalse()
          .given(test.address = '2001:db8::ff00:42:8329')
          .bool(test.isEqual('2001:db8::ff00:42:832f'))
          .isFalse()
          .bool(test.isEqual('2001:db80::ff00:4200:8329'))
          .isFalse()
          .bool(test.isEqual('2001:db8:1::ff00:42:8329'))
          .isFalse();
      }); // end it
    }); // end describe #isEqual

    // describe #toJSON
    describe('#toJSON', () => {
      it('should be a function', () => {
        const test = new IP6Address();

        unit
          .function(test.toJSON);
      }); // end it

      it('should return an object literal', () => {
        const test = new IP6Address();

        unit
          .object(test.toJSON())
          .hasProperty('address', undefined)
          .hasProperty('public', false)
          .hasProperty('private', false)
          .hasProperty('loopback', false)
          .given(test.address = '::1')
          .object(test.toJSON())
          .hasProperty('address', '::1')
          .hasProperty('public', false)
          .hasProperty('private', false)
          .hasProperty('loopback', true);
      }); // end it
    }); // end describe #toJSON

    // describe #toArray
    describe('#toArray', () => {
      it('should be a function', () => {
        const test = new IP6Address();

        unit
          .function(test.toArray);
      }); // end it

      it('should return an empty array when address is not set', () => {
        const test = new IP6Address();

        unit
          .array(test.toArray())
          .isEmpty();
      }); // end it

      it('should return an array of ip hextets', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .array(test.toArray())
          .is([
            '0000',
            '0000',
            '0000',
            '0000',
            '0000',
            '0000',
            '0000',
            '0001',
          ])
          .given(test.address = '2001:db8::ff00:42:8329')
          .array(test.toArray())
          .is([
            '2001',
            '0db8',
            '0000',
            '0000',
            '0000',
            'ff00',
            '0042',
            '8329',
          ]);
      }); // end it
    }); // end describe #toArray

    // describe #toString
    describe('#toString', () => {
      it('should be a function', () => {
        const test = new IP6Address();

        unit
          .function(test.toString);
      }); // end it

      it('should return an empty string when address is not set', () => {
        const test = new IP6Address();

        unit
          .string(test.toString()).is('');
      }); // end it

      it('should return address as a string', () => {
        const test = new IP6Address();

        unit
          .given(test.address = '::1')
          .string(test.toString())
          .is('::1')
          .given(test.address = '2001:db8::ff00:42:8329')
          .string(test.toString())
          .is('2001:db8::ff00:42:8329')
          .given(test.address = 'fd16:db8::ff00:42:8329')
          .string(test.toString())
          .is('fd16:db8::ff00:42:8329');
      }); // end it
    }); // end describe #toString

    // describe #[Symbol.toStringTag]
    describe('#[Symbol.toStringTag]', () => {
      it('should return "@scuba-squad/ip6address"', () => {
        const test = new IP6Address();

        unit
          .string(test[Symbol.toStringTag])
          .is('@scuba-squad/ip6address');
      }); // end it

      it('should return "[object @scuba-squad/ip6address]" for Object.prototype.toString.call', () => {
        const test = new IP6Address();

        unit
          .string(Object.prototype.toString.call(test))
          .is('[object @scuba-squad/ip6address]');
      }); // end it
    }); // end describe #[Symbol.toStringTag]
  }); // end describe IP6Address
})(); // end IIFE