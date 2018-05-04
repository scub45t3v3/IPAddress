(function() {
  var IP6Address, isIPv6, pad, version;

  ({isIPv6} = require('net'));

  ({pad} = require('underscore.string'));

  ({version} = require('./package'));

  IP6Address = function(addr) {
    var address, getAddress, isEqual, isLoopback, isPrivate, isPublic, notSetable, setAddress, toArray, toJSON, toString;
    if (!(this instanceof IP6Address)) {
      return new IP6Address(addr);
    }
    address = void 0;
    getAddress = function() {
      return address;
    };
    setAddress = function(addr) {
      addr = addr != null ? typeof addr.toString === "function" ? addr.toString().trim() : void 0 : void 0;
      if (!isIPv6(addr) && (addr != null)) {
        throw new TypeError(`${addr} must be a IPv6 address`);
      }
      address = addr;
      return this;
    };
    notSetable = function() {
      throw new TypeError('value cannot be set');
    };
    isEqual = function(addr) {
      if (!(addr instanceof IP6Address)) {
        addr = new IP6Address(addr);
      }
      return this.toString() === addr.toString();
    };
    isPublic = function() {
      return !!this.address && !(this.isPrivate() || this.isLoopback());
    };
    isPrivate = function() {
      return /^f[cd]/i.test(this.address);
    };
    isLoopback = function() {
      return /^(?:::1|(?:::f{4}:)?127(?:\.\d{1,3}){3})$/.test(this.address);
    };
    toArray = function() {
      addr = this.address;
      if (!(addr != null ? addr.length : void 0)) {
        return [];
      }
      while (addr.split(':').length < 8) {
        addr = addr.replace(/:(:+)/, ':$1:');
      }
      return addr.split(':').map(function(value) {
        return pad(value, 4, '0');
      });
    };
    toJSON = function() {
      var opt;
      opt = {
        address: this.address,
        public: this.public,
        loopback: this.loopback,
        private: this.private
      };
      return opt;
    };
    toString = function() {
      return this.toArray().map(function(value) {
        return value.replace(/^0+/, '');
      }).reduce(function(memo, value, index, array) {
        if (value === '') {
          value = '0';
        }
        memo += `${value}:`;
        return memo;
      }, '').replace(/:$/, '').replace(/(?:\b0:)+/, '::').replace(':::', '::');
    };
    Object.defineProperties(this, {
      VERSION: {
        enumerable: false,
        writable: false,
        value: version
      },
      IP_VERSION: {
        enumerable: false,
        writable: false,
        value: 6
      },
      address: {
        enumerable: true,
        get: getAddress,
        set: setAddress
      },
      getAddress: {
        writable: false,
        value: getAddress
      },
      setAddress: {
        writable: false,
        value: setAddress
      },
      public: {
        enumerable: false,
        get: isPublic,
        set: notSetable
      },
      isPublic: {
        writable: false,
        value: isPublic
      },
      private: {
        enumerable: false,
        get: isPrivate,
        set: notSetable
      },
      isPrivate: {
        writable: false,
        value: isPrivate
      },
      loopback: {
        enumerable: false,
        get: isLoopback,
        set: notSetable
      },
      isLoopback: {
        writable: false,
        value: isLoopback
      },
      isEqual: {
        writable: false,
        value: isEqual
      },
      toArray: {
        writable: false,
        value: toArray
      },
      toJSON: {
        writable: false,
        value: toJSON
      },
      toString: {
        writable: false,
        value: toString
      }
    });
    Object.seal(this);
    return this.setAddress(addr);
  };

  module.exports = IP6Address;

}).call(this);
