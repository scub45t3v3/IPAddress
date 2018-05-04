(function() {
  var IP, IP4Address, IP6Address, unit;

  unit = require('unit.js');

  ({IP, IP4Address, IP6Address} = require('../index'));

  describe('IP', function() {
    it('should be a function', function() {
      unit.function(IP);
      return null;
    });
    it('should return an instance of IP4Address when given a version 4 ip string', function() {
      unit.object(IP('127.0.0.1')).isInstanceOf(IP4Address).object(IP('192.168.0.1')).isInstanceOf(IP4Address);
      return null;
    });
    it('should return an instance of IP6Address when given a version 6 ip string', function() {
      unit.object(IP('::1')).isInstanceOf(IP6Address).object(IP('2001:db8::ff00:42:8329')).isInstanceOf(IP6Address);
      return null;
    });
    return it('should throw an Error when given an invalid ip address', function() {
      unit.error(function() {
        return IP('a');
      }).error(function() {
        return IP(5);
      }).error(function() {
        return IP([]);
      }).error(function() {
        return IP({});
      });
      return null;
    });
  });

}).call(this);
