'use strict';

(() => {
  // include dependencies
  const {isIPv6} = require('net');
  const {pad} = require('underscore.string');
  const {version} = require('./package');

  // IP6Address class definition
  const IP6Address = function(value) {
    // define auto instantiation
    if (!new.target) {
      return new IP6Address(value);
    }

    // defined private properties
    let address;

    const getAddress = function() {
      return address;
    }; // end getAddress

    const setAddress = (value) => {
      value = value && (value.toString() || `${value}`).trim();

      if (value != null && !isIPv6(value)) {
        throw new TypeError(`${value} must be a IPv6 address`);
      }

      address = value || undefined;

      return this;
    }; // end setAddress

    const notSetable = () => {
      throw new TypeError('value cannot be set');
    }; // end notSetable

    const isEqual = (value) => {
      if (!(value instanceof IP6Address)) {
        value = new IP6Address(value);
      }

      return this.toString() === value.toString();
    }; // end isEqual

    const isPublic = () => {
      return !!this.address && !(this.isPrivate() || this.isLoopback());
    }; // end isPublic

    const isPrivate = () => {
      return /^f[cd]/i.test(this.address);
    }; // end isPrivate

    const isLoopback = () => {
      return /^(?:::1|(?:::f{4}:)?127(?:\.\d{1,3}){3})$/.test(this.address);
    }; // end isLoopback

    const toArray = () => {
      let value = this.address;

      if (!(value && value.length)) {
        return [];
      }

      while (value.split(':').length < 8) {
        value = value.replace(/:(:+)/, ':$1:');
      }

      return value
        .split(':')
        .map((block) => {
          return pad(block, 4, '0');
        });
    }; // end toArray

    const toJSON = () => {
      const opt = {
        address: this.address,
        public: this.public,
        loopback: this.loopback,
        private: this.private,
      };

      return opt;
    }; // end toJSON

    const toString = () => {
      return this
        .toArray()
        .map((value) => {
          return value.replace(/^0+/, '');
        })
        .reduce((memo, value, index, array) => {
          if (value === '') {
            value = '0';
          }

          memo += `${value}:`;

          return memo;
        }, '')
        .replace(/:$/, '')
        .replace(/(?:\b0:)+/, '::')
        .replace(':::', '::');
    }; // end toString

    Object.defineProperties(this, {
      VERSION: {
        enumerable: false,
        writable: false,
        value: version,
      },
      IP_VERSION: {
        enumerable: false,
        writable: false,
        value: 6,
      },
      address: {
        enumerable: true,
        get: getAddress,
        set: setAddress,
      },
      getAddress: {
        writable: false,
        value: getAddress,
      },
      setAddress: {
        writable: false,
        value: setAddress,
      },
      public: {
        enumerable: false,
        get: isPublic,
        set: notSetable,
      },
      isPublic: {
        writable: false,
        value: isPublic,
      },
      private: {
        enumerable: false,
        get: isPrivate,
        set: notSetable,
      },
      isPrivate: {
        writable: false,
        value: isPrivate,
      },
      loopback: {
        enumerable: false,
        get: isLoopback,
        set: notSetable,
      },
      isLoopback: {
        writable: false,
        value: isLoopback,
      },
      isEqual: {
        writable: false,
        value: isEqual,
      },
      toArray: {
        writable: false,
        value: toArray,
      },
      toJSON: {
        writable: false,
        value: toJSON,
      },
      toString: {
        writable: false,
        value: toString,
      },
      [Symbol.toStringTag]: {
        writable: false,
        value: '@scuba-squad/ip6address',
      },
    });

    Object.seal(this);

    return this.setAddress(value);
  };

  // export IP6Address as commonjs module
  module.exports = IP6Address;
})(); // end IIFE