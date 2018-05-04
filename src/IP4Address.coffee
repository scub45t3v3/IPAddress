{isIPv4} = require 'net'
{version} = require './package'

IP4Address = (addr) ->
  if !(this instanceof IP4Address)
    return new IP4Address addr

  address = undefined

  getAddress = ->
    return address

  setAddress = (addr) ->
    addr = addr?.toString?().trim()

    if !isIPv4(addr) && addr?
      throw new TypeError "#{addr} must be a IPv4 address"

    address = addr

    return this

  notSetable = ->
    throw new TypeError 'value cannot be set'

  isEqual = (addr) ->
    if !(addr instanceof IP4Address)
      addr = new IP4Address addr

    return @toString() == addr.toString()

  isPublic = ->
    return !!@address && !(@isPrivate() || @isLoopback())

  isPrivate = ->
    return /^(?:10|172\.(?:1[6-9]|2\d|3[0-1])|192\.168)\./.test @address

  isLoopback = ->
    return @toArray()[0] == '127'

  toArray = ->
    return @address?.split?('.') || []

  toJSON = ->
    opt =
      address: @address
      public: @public
      loopback: @loopback
      private: @private

    return opt

  toString = ->
    return @toArray().join '.'

  Object.defineProperties this,
    VERSION:
      enumerable: false
      writable: false
      value: version
    IP_VERSION:
      enumerable: false
      writable: false
      value: 4
    address:
      enumerable: true
      get: getAddress
      set: setAddress
    getAddress:
      writable: false
      value: getAddress
    get_address:
      writable: false
      value: getAddress
    setAddress:
      writable: false
      value: setAddress
    set_address:
      writable: false
      value: setAddress
    public:
      enumerable: false
      get: isPublic
      set: notSetable
    isPublic:
      writable: false
      value: isPublic
    is_public:
      writable: false
      value: isPublic
    private:
      enumerable: false
      get: isPrivate
      set: notSetable
    isPrivate:
      writable: false
      value: isPrivate
    is_private:
      writable: false
      value: isPrivate
    loopback:
      enumerable: false
      get: isLoopback
      set: notSetable
    isLoopback:
      writable: false
      value: isLoopback
    is_loopback:
      writable: false
      value: isLoopback
    isEqual:
      writable: false
      value: isEqual
    is_equal:
      writable: false
      value: isEqual
    toArray:
      writable: false
      value: toArray
    to_array:
      writable: false
      value: toArray
    toJSON:
      writable: false
      value: toJSON
    to_json:
      writable: false
      value: toJSON
    toString:
      writable: false
      value: toString
    to_string:
      writable: false
      value: toString

  Object.seal this

  return @setAddress addr

module.exports = IP4Address