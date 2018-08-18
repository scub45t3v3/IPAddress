'use strict';

(() => {
  // include dependencies
  const {isIPv4} = require('net');
  const {version} = require('./package');

  // IP4Address class definition
  const IP4Address = function(value) {
    // define auto instantiation
    if (!new.target) {
      return new IP4Address(value);
    }

    // define private properties
    let address;

    const getAddress = () => {
      return address;
    }; // end getAddress

    const setAddress = (value) => {
      value = value && (value.toString() || `${value}`).trim();

      if (value != null && !isIPv4(value)) {
        throw new TypeError(`${value} must be a IPv4 address`);
      }

      address = value || undefined;

      return this;
    }; // end setAddress

    const notSetable = () => {
      throw new TypeError('value cannot be set');
    }; // end notSetable

    const isEqual = (value) => {
      if (!(value instanceof IP4Address)) {
        value = new IP4Address(value);
      }

      return this.toString() === value.toString();
    }; // end isEqual

    const isPublic = () => {
      return !!this.address && !(this.isPrivate() || this.isLoopback());
    }; // end isPublic

    const isPrivate = () => {
      return /^(?:10|172\.(?:1[6-9]|2\d|3[0-1])|192\.168)\./.test(this.address);
    }; // end isPrivate

    const isLoopback = () => {
      return this.toArray()[0] === '127';
    }; // end isLoopback

    const toArray = () => {
      return (this.address && this.address.split('.')) || [];
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
      return this.toArray().join('.');
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
        value: 4,
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
        value: '@scuba-squad/ip4address',
      },
    });

    Object.freeze(this);

    return this.setAddress(value);
  };

  // export IP4Address as commonjs module
  module.exports = IP4Address;
})(); // end IIFE