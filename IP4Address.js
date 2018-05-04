(function() {
  var IP4Address, isIPv4, version;

  ({isIPv4} = require('net'));

  ({version} = require('./package'));

  IP4Address = function(addr) {
    var address, getAddress, isEqual, isLoopback, isPrivate, isPublic, notSetable, setAddress, toArray, toJSON, toString;
    if (!(this instanceof IP4Address)) {
      return new IP4Address(addr);
    }
    address = void 0;
    getAddress = function() {
      return address;
    };
    setAddress = function(addr) {
      addr = addr != null ? typeof addr.toString === "function" ? addr.toString().trim() : void 0 : void 0;
      if (!isIPv4(addr) && (addr != null)) {
        throw new TypeError(`${addr} must be a IPv4 address`);
      }
      address = addr;
      return this;
    };
    notSetable = function() {
      throw new TypeError('value cannot be set');
    };
    isEqual = function(addr) {
      if (!(addr instanceof IP4Address)) {
        addr = new IP4Address(addr);
      }
      return this.toString() === addr.toString();
    };
    isPublic = function() {
      return !!this.address && !(this.isPrivate() || this.isLoopback());
    };
    isPrivate = function() {
      return /^(?:10|172\.(?:1[6-9]|2\d|3[0-1])|192\.168)\./.test(this.address);
    };
    isLoopback = function() {
      return this.toArray()[0] === '127';
    };
    toArray = function() {
      var ref;
      return ((ref = this.address) != null ? typeof ref.split === "function" ? ref.split('.') : void 0 : void 0) || [];
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
      return this.toArray().join('.');
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
        value: 4
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

  module.exports = IP4Address;

}).call(this);
