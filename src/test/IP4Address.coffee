unit = require 'unit.js'
IP4Address = require '../IP4Address'
{version} = require '../package'

describe 'IP4Address', ->
  it 'should be a function', ->
    unit
      .function IP4Address

    return null

  it 'should return an instance of IP4Address', ->
    unit
      .object new IP4Address()
      .isInstanceOf IP4Address
      .isEnumerable 'address'
      .isNotEnumerable 'public'
      .isNotEnumerable 'private'
      .isNotEnumerable 'loopback'
      .isNotEnumerable 'VERSION'
      .isNotEnumerable 'IP_VERSION'
      .hasProperty 'VERSION', version
      .hasProperty 'IP_VERSION', 4

    return null

  it 'should return an instance of IP4Address when called without new', ->
    unit
      .object IP4Address()
      .isInstanceOf IP4Address
      .isEnumerable 'address'
      .isNotEnumerable 'public'
      .isNotEnumerable 'private'
      .isNotEnumerable 'loopback'
      .isNotEnumerable 'VERSION'
      .isNotEnumerable 'IP_VERSION'
      .hasProperty 'VERSION', version
      .hasProperty 'IP_VERSION', 4

    return null

  describe '#address', ->
    it 'should accept a valid version 4 ip address string', ->
      test = new IP4Address()
      ip = '127.0.0.1'

      unit
        .given test.address = ip
        .string test.address
        .is ip

      return null

    it 'should accept null or undefined as undefined', ->
      test = new IP4Address()

      unit
        .given test.address = null
        .value test.address
        .isUndefined()
        .given test.address = undefined
        .value test.address
        .isUndefined()

      return null

    it 'should throw an Error when setting to an invalid version 4 ip address', ->
      test = new IP4Address()

      unit
        .error ->
          test.address = 'a'
        .error ->
          test.address = '192.168.0'
        .error ->
          test.address = '192.168.0.256'
        .error ->
          test.address = '::1'

      return null

  describe '#public', ->
    it 'should return true for public addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '74.125.130.113'
        .bool test.public
        .isTrue()
        .given test.address = '64.85.171.16'
        .bool test.public
        .isTrue()

      return null

    it 'should return false for non public addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .bool test.public
        .isFalse()
        .given test.address = '192.168.0.1'
        .bool test.public
        .isFalse()

      return null

    it 'should throw an Error when trying to set', ->
      test = new IP4Address()

      unit
        .error ->
          test.public = true
        .error ->
          test.public = 'a'
        .error ->
          test.public = 1
        .error ->
          test.public = ->
            return true

      return null

  describe '#private', ->
    it 'should return true for private addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '192.168.0.1'
        .bool test.private
        .isTrue()
        .given test.address = '10.0.0.1'
        .bool test.private
        .isTrue()

      return null

    it 'should return false for non private addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '74.125.130.113'
        .bool test.private
        .isFalse()
        .given test.address = '64.85.171.16'
        .bool test.private
        .isFalse()

      return null

    it 'should throw an Error when trying to set', ->
      test = new IP4Address()

      unit
        .error ->
          test.private = true
        .error ->
          test.private = 'a'
        .error ->
          test.private = 1
        .error ->
          test.private = ->
            return true

      return null

  describe '#loopback', ->
    it 'should return true for loopback addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .bool test.loopback
        .isTrue()
        .given test.address = '127.255.255.255'
        .bool test.loopback
        .isTrue()

      return null

    it 'should return false for non loopback addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '74.125.130.113'
        .bool test.loopback
        .isFalse()
        .given test.address = '64.85.171.16'
        .bool test.loopback
        .isFalse()
        .given test.address = '192.168.0.1'
        .bool test.loopback
        .isFalse()
        .given test.address = '10.0.0.1'
        .bool test.loopback
        .isFalse()

      return null

    it 'should throw an Error when trying to set', ->
      test = new IP4Address()

      unit
        .error ->
          test.loopback = true
        .error ->
          test.loopback = 'a'
        .error ->
          test.loopback = 1
        .error ->
          test.loopback = ->
            return true

      return null

  describe '#isEqual', ->
    it 'should be a function', ->
      test = new IP4Address()

      unit
        .function test.isEqual

      return null

    it 'should return true for equal ip addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .bool test.isEqual('127.0.0.1')
        .isTrue()
        .given test.address = '192.168.0.1'
        .bool test.isEqual('192.168.0.1')
        .isTrue()

      return null

    it 'should return false for non equal ip addresses', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .bool test.isEqual('127.0.0.2')
        .isFalse()
        .given test.address = '192.168.0.1'
        .bool test.isEqual('127.0.0.1')
        .isFalse()

      return null

  describe '#toJSON', ->
    it 'should be a function', ->
      test = new IP4Address()

      unit
        .function test.toJSON

      return null

    it 'should return an object literal', ->
      test = new IP4Address()

      unit
        .object test.toJSON()
        .hasProperty 'address', undefined
        .hasProperty 'public', false
        .hasProperty 'private', false
        .hasProperty 'loopback', false
        .given test.address = '127.0.0.1'
        .object test.toJSON()
        .hasProperty 'address', '127.0.0.1'
        .hasProperty 'public', false
        .hasProperty 'private', false
        .hasProperty 'loopback', true

      return null

  describe '#toArray', ->
    it 'should be a function', ->
      test = new IP4Address()

      unit
        .function test.toArray

      return null

    it 'should return an empty array when address is not set', ->
      test = new IP4Address()

      unit
        .array test.toArray()
        .isEmpty()

      return null

    it 'should return an array of ip octets', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .array test.toArray()
        .is ['127', '0', '0', '1']

      return null

  describe '#toString', ->
    it 'should be a function', ->
      test = new IP4Address()

      unit
        .function test.toString

      return null

    it 'should return an empty string when address is not set', ->
      test = new IP4Address()

      unit
        .string test.toString()
        .is ''

      return null

    it 'should return address as a string', ->
      test = new IP4Address()

      unit
        .given test.address = '127.0.0.1'
        .string test.toString()
        .is '127.0.0.1'
        .given test.address = '192.168.0.1'
        .string test.toString()
        .is '192.168.0.1'
        .given test.address = '74.125.130.113'
        .string test.toString()
        .is '74.125.130.113'

      return null