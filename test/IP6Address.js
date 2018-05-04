(function() {
  var IP6Address, unit, version;

  unit = require('unit.js');

  IP6Address = require('../IP6Address');

  ({version} = require('../package'));

  describe('IP6Address', function() {
    it('should be a function', function() {
      unit.function(IP6Address);
      return null;
    });
    it('should return an instance of IP6Address', function() {
      unit.object(new IP6Address()).isInstanceOf(IP6Address).isEnumerable('address').isNotEnumerable('public').isNotEnumerable('private').isNotEnumerable('loopback').isNotEnumerable('VERSION').isNotEnumerable('IP_VERSION').hasProperty('VERSION', version).hasProperty('IP_VERSION', 6);
      return null;
    });
    it('should return an instance of IP6Address when called without new', function() {
      unit.object(IP6Address()).isInstanceOf(IP6Address).isEnumerable('address').isNotEnumerable('public').isNotEnumerable('private').isNotEnumerable('loopback').isNotEnumerable('VERSION').isNotEnumerable('IP_VERSION').hasProperty('VERSION', version).hasProperty('IP_VERSION', 6);
      return null;
    });
    describe('#address', function() {
      it('should accept a valid version 6 ip address string', function() {
        var ip, test;
        test = new IP6Address();
        ip = '::1';
        unit.given(test.address = ip).string(test.address).is(ip);
        return null;
      });
      it('should accept null or undefined as undefined', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = null).value(test.address).isUndefined().given(test.address = void 0).value(test.address).isUndefined();
        return null;
      });
      return it('should throw an Error when setting to an invalid version 6 ip address', function() {
        var test;
        test = new IP6Address();
        unit.error(function() {
          return test.address = 'a';
        }).error(function() {
          return test.address = 3;
        }).error(function() {
          return test.address = '192.168.0.1';
        }).error(function() {
          return test.address = '1:1';
        });
        return null;
      });
    });
    describe('#public', function() {
      it('should return true for public addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '2001:db8::ff00:42:8329').bool(test.public).isTrue().given(test.address = '2a01:db08::f700:4ff2:8329').bool(test.public).isTrue();
        return null;
      });
      it('should return false for non public addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '::1').bool(test.public).isFalse().given(test.address = 'fd16:db8::ff00:42:8329').bool(test.public).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP6Address();
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
        test = new IP6Address();
        unit.given(test.address = 'fd16:db8::ff00:42:8329').bool(test.private).isTrue().given(test.address = 'fdff:db8::ff00').bool(test.private).isTrue();
        return null;
      });
      it('should return false for non private addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '2001:db8::ff00:42:8329').bool(test.private).isFalse().given(test.address = 'af56:db75::ff00').bool(test.private).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP6Address();
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
        test = new IP6Address();
        unit.given(test.address = '::1').bool(test.loopback).isTrue();
        return null;
      });
      it('should return false for non loopback addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '2001:db8::ff00:42:8329').bool(test.loopback).isFalse().given(test.address = 'fd16:db8::ff00:42:8329').bool(test.loopback).isFalse().given(test.address = '89d:3f8a::ff16:74af').bool(test.loopback).isFalse().given(test.address = 'db8::ff00:42:8329').bool(test.loopback).isFalse();
        return null;
      });
      return it('should throw an Error when trying to set', function() {
        var test;
        test = new IP6Address();
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
        test = new IP6Address();
        unit.function(test.isEqual);
        return null;
      });
      it('should return true for equal ip addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '::1').bool(test.isEqual('::0001')).isTrue().bool(test.isEqual('0:0::1')).isTrue().bool(test.isEqual('0:0:0:0:0:0:0:1')).isTrue().given(test.address = '2001:db8::ff00:42:8329').bool(test.isEqual('2001:0db8::ff00:0042:8329')).isTrue().bool(test.isEqual('2001:db8:0:0:0:ff00:42:8329')).isTrue();
        return null;
      });
      return it('should return false for non equal ip addresses', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '::1').bool(test.isEqual('::10')).isFalse().bool(test.isEqual('::1:1')).isFalse().bool(test.isEqual('2001:db8::ff00:42:8329')).isFalse().given(test.address = '2001:db8::ff00:42:8329').bool(test.isEqual('2001:db8::ff00:42:832f')).isFalse().bool(test.isEqual('2001:db80::ff00:4200:8329')).isFalse().bool(test.isEqual('2001:db8:1::ff00:42:8329')).isFalse();
        return null;
      });
    });
    describe('#toJSON', function() {
      it('should be a function', function() {
        var test;
        test = new IP6Address();
        unit.function(test.toJSON);
        return null;
      });
      return it('should return an object literal', function() {
        var test;
        test = new IP6Address();
        unit.object(test.toJSON()).hasProperty('address', void 0).hasProperty('public', false).hasProperty('private', false).hasProperty('loopback', false).given(test.address = '::1').object(test.toJSON()).hasProperty('address', '::1').hasProperty('public', false).hasProperty('private', false).hasProperty('loopback', true);
        return null;
      });
    });
    describe('#toArray', function() {
      it('should be a function', function() {
        var test;
        test = new IP6Address();
        unit.function(test.toArray);
        return null;
      });
      it('should return an empty array when address is not set', function() {
        var test;
        test = new IP6Address();
        unit.array(test.toArray()).isEmpty();
        return null;
      });
      return it('should return an array of ip hextets', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '::1').array(test.toArray()).is(['0000', '0000', '0000', '0000', '0000', '0000', '0000', '0001']).given(test.address = '2001:db8::ff00:42:8329').array(test.toArray()).is(['2001', '0db8', '0000', '0000', '0000', 'ff00', '0042', '8329']);
        return null;
      });
    });
    return describe('#toString', function() {
      it('should be a function', function() {
        var test;
        test = new IP6Address();
        unit.function(test.toString);
        return null;
      });
      it('should return an empty string when address is not set', function() {
        var test;
        test = new IP6Address();
        unit.string(test.toString()).is('');
        return null;
      });
      return it('should return address as a string', function() {
        var test;
        test = new IP6Address();
        unit.given(test.address = '::1').string(test.toString()).is('::1').given(test.address = '2001:db8::ff00:42:8329').string(test.toString()).is('2001:db8::ff00:42:8329').given(test.address = 'fd16:db8::ff00:42:8329').string(test.toString()).is('fd16:db8::ff00:42:8329');
        return null;
      });
    });
  });

}).call(this);
