{isIPv6} = require 'net'
{pad} = require 'underscore.string'
{version} = require './package'

IP6Address = (addr) ->
  if !(this instanceof IP6Address)
    return new IP6Address addr

  address = undefined

  getAddress = ->
    return address

  setAddress = (addr) ->
    addr = addr?.toString?().trim()

    if !isIPv6(addr) && addr?
      throw new TypeError "#{addr} must be a IPv6 address"

    address = addr

    return this

  notSetable = ->
    throw new TypeError 'value cannot be set'

  isEqual = (addr) ->
    if !(addr instanceof IP6Address)
      addr = new IP6Address addr

    return @toString() == addr.toString()

  isPublic = ->
    return !!@address && !(@isPrivate() || @isLoopback())

  isPrivate = ->
    return /^f[cd]/i.test @address

  isLoopback = ->
    return /^(?:::1|(?:::f{4}:)?127(?:\.\d{1,3}){3})$/.test @address

  toArray = ->
    addr = @address

    if !addr?.length
      return []

    while addr.split(':').length < 8
      addr = addr.replace /:(:+)/, ':$1:'

    return addr
      .split ':'
      .map (value) ->
        return pad value, 4, '0'

  toJSON = ->
    opt =
      address: @address
      public: @public
      loopback: @loopback
      private: @private

    return opt

  toString = ->
    return @toArray()
      .map (value) ->
        return value.replace /^0+/, ''
      .reduce (memo, value, index, array) ->
        if value == ''
          value = '0'

        memo += "#{value}:"

        return memo
      , ''
      .replace /:$/, ''
      .replace /(?:\b0:)+/, '::'
      .replace ':::', '::'

  Object.defineProperties this,
    VERSION:
      enumerable: false
      writable: false
      value: version
    IP_VERSION:
      enumerable: false
      writable: false
      value: 6
    address:
      enumerable: true
      get: getAddress
      set: setAddress
    getAddress:
      writable: false
      value: getAddress
    setAddress:
      writable: false
      value: setAddress
    public:
      enumerable: false
      get: isPublic
      set: notSetable
    isPublic:
      writable: false
      value: isPublic
    private:
      enumerable: false
      get: isPrivate
      set: notSetable
    isPrivate:
      writable: false
      value: isPrivate
    loopback:
      enumerable: false
      get: isLoopback
      set: notSetable
    isLoopback:
      writable: false
      value: isLoopback
    isEqual:
      writable: false
      value: isEqual
    toArray:
      writable: false
      value: toArray
    toJSON:
      writable: false
      value: toJSON
    toString:
      writable: false
      value: toString

  Object.seal this

  return @setAddress addr

module.exports = IP6Address