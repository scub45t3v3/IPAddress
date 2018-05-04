(function() {
  var IP4Address, unit, version;

  unit = require('unit.js');

  IP4Address = require('../IP4Address');

  ({version} = require('../package'));

  describe('IP4Address', function() {
    it('should be a function', function() {
      unit.function(IP4Address);
      return null;
    });
    it('should return an instance of IP4Address', function() {
      unit.object(new IP4Address()).isInstanceOf(IP4Address).isEnumerable('address').isNotEnumerable('public').isNotEnumerable('private').isNotEnumerable('loopback').isNotEnumerable('VERSION').isNotEnumerable('IP_VERSION').hasProperty('VERSION', version).hasProperty('IP_VERSION', 4);
      return null;
    });
    it('should return an instance of IP4Address when called without new', function() {
      unit.object(IP4Address()).isInstanceOf(IP4Address).isEnumerable('address').isNotEnumerable('public').isNotEnumerable('private').isNotEnumerable('loopback').isNotEnumerable('VERSION').isNotEnumerable('IP_VERSION').hasProperty('VERSION', version).hasProperty('IP_VERSION', 4);
      return null;
    });
    describe('#address', function() {
      it('should accept a valid version 4 ip address string', function() {
        var ip, test;
        test = new IP4Address();
        ip = '127.0.0.1';
        unit.given(test.address = ip).string(test.address).is(ip);
        return null;
      });
      it('should accept null or undefined as undefined', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = null).value(test.address).isUndefined().given(test.address = void 0).value(test.address).isUndefined();
        return null;
      });
      return it('should throw an Error when setting to an invalid version 4 ip address', function() {
        var test;
        test = new IP4Address();
        unit.error(function() {
          return test.address = 'a';
        }).error(function() {
          return test.address = '192.168.0';
        }).error(function() {
          return test.address = '192.168.0.256';
        }).error(function() {
          return test.address = '::1';
        });
        return null;
      });
    });
    describe('#public', function() {
      it('should return true for public addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '74.125.130.113').bool(test.public).isTrue().given(test.address = '64.85.171.16').bool(test.public).isTrue();
        return null;
      });
      it('should return false for non public addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').bool(test.public).isFalse().given(test.address = '192.168.0.1').bool(test.public).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP4Address();
        unit.error(function() {
          return test.public = true;
        }).error(function() {
          return test.public = 'a';
        }).error(function() {
          return test.public = 1;
        }).error(function() {
          return test.public = function() {
            return true;
          };
        });
        return null;
      });
    });
    describe('#private', function() {
      it('should return true for private addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '192.168.0.1').bool(test.private).isTrue().given(test.address = '10.0.0.1').bool(test.private).isTrue();
        return null;
      });
      it('should return false for non private addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '74.125.130.113').bool(test.private).isFalse().given(test.address = '64.85.171.16').bool(test.private).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP4Address();
        unit.error(function() {
          return test.private = true;
        }).error(function() {
          return test.private = 'a';
        }).error(function() {
          return test.private = 1;
        }).error(function() {
          return test.private = function() {
            return true;
          };
        });
        return null;
      });
    });
    describe('#loopback', function() {
      it('should return true for loopback addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').bool(test.loopback).isTrue().given(test.address = '127.255.255.255').bool(test.loopback).isTrue();
        return null;
      });
      it('should return false for non loopback addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '74.125.130.113').bool(test.loopback).isFalse().given(test.address = '64.85.171.16').bool(test.loopback).isFalse().given(test.address = '192.168.0.1').bool(test.loopback).isFalse().given(test.address = '10.0.0.1').bool(test.loopback).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP4Address();
        unit.error(function() {
          return test.loopback = true;
        }).error(function() {
          return test.loopback = 'a';
        }).error(function() {
          return test.loopback = 1;
        }).error(function() {
          return test.loopback = function() {
            return true;
          };
        });
        return null;
      });
    });
    describe('#isEqual', function() {
      it('should be a function', function() {
        var test;
        test = new IP4Address();
        unit.function(test.isEqual);
        return null;
      });
      it('should return true for equal ip addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').bool(test.isEqual('127.0.0.1')).isTrue().given(test.address = '192.168.0.1').bool(test.isEqual('192.168.0.1')).isTrue();
        return null;
      });
      return it('should return false for non equal ip addresses', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').bool(test.isEqual('127.0.0.2')).isFalse().given(test.address = '192.168.0.1').bool(test.isEqual('127.0.0.1')).isFalse();
        return null;
      });
    });
    describe('#toJSON', function() {
      it('should be a function', function() {
        var test;
        test = new IP4Address();
        unit.function(test.toJSON);
        return null;
      });
      return it('should return an object literal', function() {
        var test;
        test = new IP4Address();
        unit.object(test.toJSON()).hasProperty('address', void 0).hasProperty('public', false).hasProperty('private', false).hasProperty('loopback', false).given(test.address = '127.0.0.1').object(test.toJSON()).hasProperty('address', '127.0.0.1').hasProperty('public', false).hasProperty('private', false).hasProperty('loopback', true);
        return null;
      });
    });
    describe('#toArray', function() {
      it('should be a function', function() {
        var test;
        test = new IP4Address();
        unit.function(test.toArray);
        return null;
      });
      it('should return an empty array when address is not set', function() {
        var test;
        test = new IP4Address();
        unit.array(test.toArray()).isEmpty();
        return null;
      });
      return it('should return an array of ip octets', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').array(test.toArray()).is(['127', '0', '0', '1']);
        return null;
      });
    });
    return describe('#toString', function() {
      it('should be a function', function() {
        var test;
        test = new IP4Address();
        unit.function(test.toString);
        return null;
      });
      it('should return an empty string when address is not set', function() {
        var test;
        test = new IP4Address();
        unit.string(test.toString()).is('');
        return null;
      });
      return it('should return address as a string', function() {
        var test;
        test = new IP4Address();
        unit.given(test.address = '127.0.0.1').string(test.toString()).is('127.0.0.1').given(test.address = '192.168.0.1').string(test.toString()).is('192.168.0.1').given(test.address = '74.125.130.113').string(test.toString()).is('74.125.130.113');
        return null;
      });
    });
  });

}).call(this);
