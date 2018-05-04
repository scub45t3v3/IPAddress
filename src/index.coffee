{isIP} = require 'net'
IP4Address = require './IP4Address'
IP6Address = require './IP6Address'

IP = (value) ->
  switch isIP(value)
    when 4, '4'
      return new IP4Address value
    when 6, '6'
      return new IP6Address value
    else
      throw new TypeError "#{value} must be an IPv4 or IPv6 address"

exports.IP = IP
exports.IP4Address = IP4Address
exports.IP6Address = IP6Address