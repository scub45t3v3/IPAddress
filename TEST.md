# TOC
   - [IP4Address](#ip4address)
     - [#address](#ip4address-address)
     - [#public](#ip4address-public)
     - [#private](#ip4address-private)
     - [#loopback](#ip4address-loopback)
     - [#isEqual](#ip4address-isequal)
     - [#toJSON](#ip4address-tojson)
     - [#toArray](#ip4address-toarray)
     - [#toString](#ip4address-tostring)
     - [#[Symbol.toStringTag]](#ip4address-symboltostringtag)
   - [IP6Address](#ip6address)
     - [#address](#ip6address-address)
     - [#public](#ip6address-public)
     - [#private](#ip6address-private)
     - [#loopback](#ip6address-loopback)
     - [#isEqual](#ip6address-isequal)
     - [#toJSON](#ip6address-tojson)
     - [#toArray](#ip6address-toarray)
     - [#toString](#ip6address-tostring)
     - [#[Symbol.toStringTag]](#ip6address-symboltostringtag)
   - [IP](#ip)
<a name=""></a>
 
<a name="ip4address"></a>
# IP4Address
should be a function.

```js
unit
  .function(IP4Address);
```

should return an instance of IP4Address.

```js
unit
  .object(new IP4Address())
  .isInstanceOf(IP4Address)
  .isEnumerable('address')
  .isNotEnumerable('public')
  .isNotEnumerable('private')
  .isNotEnumerable('loopback')
  .isNotEnumerable('VERSION')
  .isNotEnumerable('IP_VERSION')
  .hasProperty('VERSION', version)
  .hasProperty('IP_VERSION', 4);
```

should return an instance of IP4Address when called without new.

```js
unit
  .object(IP4Address())
  .isInstanceOf(IP4Address)
  .isEnumerable('address')
  .isNotEnumerable('public')
  .isNotEnumerable('private')
  .isNotEnumerable('loopback')
  .isNotEnumerable('VERSION')
  .isNotEnumerable('IP_VERSION')
  .hasProperty('VERSION', version)
  .hasProperty('IP_VERSION', 4);
```

<a name="ip4address-address"></a>
## #address
should accept a valid version 4 ip address string.

```js
const test = new IP4Address();
const ip = '127.0.0.1';
unit
  .given(test.address = ip)
  .string(test.address)
  .is(ip);
```

should accept null or undefined as undefined.

```js
const test = new IP4Address();
unit
  .given(test.address = null)
  .value(test.address)
  .isUndefined()
  .given(test.address = undefined)
  .value(test.address)
  .isUndefined();
```

should throw an Error when setting to an invalid version 4 ip address.

```js
const test = new IP4Address();
unit
  .error(() => {
    test.address = 'a';
  })
  .error(() => {
    test.address = '192.168.0';
  })
  .error(() => {
    test.address = '192.168.0.256';
  })
  .error(() => {
    test.address = '::1';
  });
```

<a name="ip4address-public"></a>
## #public
should return true for public addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '74.125.130.113')
  .bool(test.public)
  .isTrue()
  .given(test.address = '64.85.171.16')
  .bool(test.public)
  .isTrue();
```

should return false for non public addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .bool(test.public)
  .isFalse()
  .given(test.address = '192.168.0.1')
  .bool(test.public)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP4Address();
unit
  .error(() => {
    test.public = true;
  })
  .error(() => {
    test.public = 'a';
  })
  .error(() => {
    test.public = 1;
  })
  .error(() => {
    test.public = () => {
      return true;
    };
  });
```

<a name="ip4address-private"></a>
## #private
should return true for private addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '192.168.0.1')
  .bool(test.private)
  .isTrue()
  .given(test.address = '10.0.0.1')
  .bool(test.private)
  .isTrue();
```

should return false for non private addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '74.125.130.113')
  .bool(test.private)
  .isFalse()
  .given(test.address = '64.85.171.16')
  .bool(test.private)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP4Address();
unit
  .error(() => {
    test.private = true;
  })
  .error(() => {
    test.private = 'a';
  })
  .error(() => {
    test.private = 1;
  })
  .error(() => {
    test.private = () => {
      return true;
    };
  });
```

<a name="ip4address-loopback"></a>
## #loopback
should return true for loopback addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .bool(test.loopback)
  .isTrue()
  .given(test.address = '127.255.255.255')
  .bool(test.loopback)
  .isTrue();
```

should return false for non loopback addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '74.125.130.113')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = '64.85.171.16')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = '192.168.0.1')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = '10.0.0.1')
  .bool(test.loopback)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP4Address();
unit
  .error(() => {
    test.loopback = true;
  })
  .error(() => {
    test.loopback = 'a';
  })
  .error(() => {
    test.loopback = 1;
  })
  .error(() => {
    test.loopback = () => {
      return true;
    };
  });
```

<a name="ip4address-isequal"></a>
## #isEqual
should be a function.

```js
const test = new IP4Address();
unit
  .function(test.isEqual);
```

should return true for equal ip addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .bool(test.isEqual('127.0.0.1'))
  .isTrue()
  .given(test.address = '192.168.0.1')
  .bool(test.isEqual('192.168.0.1'))
  .isTrue();
```

should return false for non equal ip addresses.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .bool(test.isEqual('127.0.0.2'))
  .isFalse()
  .given(test.address = '192.168.0.1')
  .bool(test.isEqual('127.0.0.1'))
  .isFalse();
```

<a name="ip4address-tojson"></a>
## #toJSON
should be a function.

```js
const test = new IP4Address();
unit
  .function(test.toJSON);
```

should return an object literal.

```js
const test = new IP4Address();
unit
  .object(test.toJSON())
  .hasProperty('address', undefined)
  .hasProperty('public', false)
  .hasProperty('private', false)
  .hasProperty('loopback', false)
  .given(test.address = '127.0.0.1')
  .object(test.toJSON())
  .hasProperty('address', '127.0.0.1')
  .hasProperty('public', false)
  .hasProperty('private', false)
  .hasProperty('loopback', true);
```

<a name="ip4address-toarray"></a>
## #toArray
should be a function.

```js
const test = new IP4Address();
unit
  .function(test.toArray);
```

should return an empty array when address is not set.

```js
const test = new IP4Address();
unit
  .array(test.toArray())
  .isEmpty();
```

should return an array of ip octets.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .array(test.toArray())
  .is(['127', '0', '0', '1']);
```

<a name="ip4address-tostring"></a>
## #toString
should be a function.

```js
const test = new IP4Address();
unit
  .function(test.toString);
```

should return an empty string when address is not set.

```js
const test = new IP4Address();
unit
  .string(test.toString())
  .is('');
```

should return address as a string.

```js
const test = new IP4Address();
unit
  .given(test.address = '127.0.0.1')
  .string(test.toString())
  .is('127.0.0.1')
  .given(test.address = '192.168.0.1')
  .string(test.toString())
  .is('192.168.0.1')
  .given(test.address = '74.125.130.113')
  .string(test.toString())
  .is('74.125.130.113');
```

<a name="ip4address-symboltostringtag"></a>
## #[Symbol.toStringTag]
should return "@scuba-squad/ip4address".

```js
const test = new IP4Address();
unit
  .string(test[Symbol.toStringTag])
  .is('@scuba-squad/ip4address');
```

should return "[object @scuba-squad/ip4address]" for Object.prototype.toString.call.

```js
const test = new IP4Address();
unit
  .string(Object.prototype.toString.call(test))
  .is('[object @scuba-squad/ip4address]');
```

<a name="ip6address"></a>
# IP6Address
should be a function.

```js
unit
  .function(IP6Address);
```

should return an instance of IP6Address.

```js
unit
  .object(new IP6Address())
  .isInstanceOf(IP6Address)
  .isEnumerable('address')
  .isNotEnumerable('public')
  .isNotEnumerable('private')
  .isNotEnumerable('loopback')
  .isNotEnumerable('VERSION')
  .isNotEnumerable('IP_VERSION')
  .hasProperty('VERSION', version)
  .hasProperty('IP_VERSION', 6);
```

should return an instance of IP6Address when called without new.

```js
unit
  .object(IP6Address())
  .isInstanceOf(IP6Address)
  .isEnumerable('address')
  .isNotEnumerable('public')
  .isNotEnumerable('private')
  .isNotEnumerable('loopback')
  .isNotEnumerable('VERSION')
  .isNotEnumerable('IP_VERSION')
  .hasProperty('VERSION', version)
  .hasProperty('IP_VERSION', 6);
```

<a name="ip6address-address"></a>
## #address
should accept a valid version 6 ip address string.

```js
const test = new IP6Address();
const ip = '::1';
unit
  .given(test.address = ip)
  .string(test.address)
  .is(ip);
```

should accept null or undefined as undefined.

```js
const test = new IP6Address();
unit
  .given(test.address = null)
  .value(test.address)
  .isUndefined()
  .given(test.address = undefined)
  .value(test.address)
  .isUndefined();
```

should throw an Error when setting to an invalid version 6 ip address.

```js
const test = new IP6Address();
unit
  .error(() => {
    test.address = 'a';
  })
  .error(() => {
    test.address = 3;
  })
  .error(() => {
    test.address = '192.168.0.1';
  })
  .error(() => {
    test.address = '1:1';
  });
```

<a name="ip6address-public"></a>
## #public
should return true for public addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '2001:db8::ff00:42:8329')
  .bool(test.public)
  .isTrue()
  .given(test.address = '2a01:db08::f700:4ff2:8329')
  .bool(test.public)
  .isTrue();
```

should return false for non public addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .bool(test.public)
  .isFalse()
  .given(test.address = 'fd16:db8::ff00:42:8329')
  .bool(test.public)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP6Address();
unit
  .error(() => {
    test.public = true;
  })
  .error(() => {
    test.public = 'a';
  })
  .error(() => {
    test.public = 1;
  })
  .error(() => {
    test.public = () => {
      return true;
    };
  });
```

<a name="ip6address-private"></a>
## #private
should return true for private addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = 'fd16:db8::ff00:42:8329')
  .bool(test.private)
  .isTrue()
  .given(test.address = 'fdff:db8::ff00')
  .bool(test.private)
  .isTrue();
```

should return false for non private addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '2001:db8::ff00:42:8329')
  .bool(test.private)
  .isFalse()
  .given(test.address = 'af56:db75::ff00')
  .bool(test.private)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP6Address();
unit
  .error(() => {
    test.private = true;
  })
  .error(() => {
    test.private = 'a';
  })
  .error(() => {
    test.private = 1;
  })
  .error(() => {
    test.private = () => {
      return true;
    };
  });
```

<a name="ip6address-loopback"></a>
## #loopback
should return true for loopback addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .bool(test.loopback)
  .isTrue();
```

should return false for non loopback addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '2001:db8::ff00:42:8329')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = 'fd16:db8::ff00:42:8329')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = '89d:3f8a::ff16:74af')
  .bool(test.loopback)
  .isFalse()
  .given(test.address = 'db8::ff00:42:8329')
  .bool(test.loopback)
  .isFalse();
```

should throw an Error when trying to set.

```js
const test = new IP6Address();
unit
  .error(() => {
    test.loopback = true;
  })
  .error(() => {
    test.loopback = 'a';
  })
  .error(() => {
    test.loopback = 1;
  })
  .error(() => {
    test.loopback = () => {
      return true;
    };
  });
```

<a name="ip6address-isequal"></a>
## #isEqual
should be a function.

```js
const test = new IP6Address();
unit
  .function(test.isEqual);
```

should return true for equal ip addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .bool(test.isEqual('::0001'))
  .isTrue()
  .bool(test.isEqual('0:0::1'))
  .isTrue()
  .bool(test.isEqual('0:0:0:0:0:0:0:1'))
  .isTrue()
  .given(test.address = '2001:db8::ff00:42:8329')
  .bool(test.isEqual('2001:0db8::ff00:0042:8329'))
  .isTrue()
  .bool(test.isEqual('2001:db8:0:0:0:ff00:42:8329'))
  .isTrue();
```

should return false for non equal ip addresses.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .bool(test.isEqual('::10'))
  .isFalse()
  .bool(test.isEqual('::1:1'))
  .isFalse()
  .bool(test.isEqual('2001:db8::ff00:42:8329'))
  .isFalse()
  .given(test.address = '2001:db8::ff00:42:8329')
  .bool(test.isEqual('2001:db8::ff00:42:832f'))
  .isFalse()
  .bool(test.isEqual('2001:db80::ff00:4200:8329'))
  .isFalse()
  .bool(test.isEqual('2001:db8:1::ff00:42:8329'))
  .isFalse();
```

<a name="ip6address-tojson"></a>
## #toJSON
should be a function.

```js
const test = new IP6Address();
unit
  .function(test.toJSON);
```

should return an object literal.

```js
const test = new IP6Address();
unit
  .object(test.toJSON())
  .hasProperty('address', undefined)
  .hasProperty('public', false)
  .hasProperty('private', false)
  .hasProperty('loopback', false)
  .given(test.address = '::1')
  .object(test.toJSON())
  .hasProperty('address', '::1')
  .hasProperty('public', false)
  .hasProperty('private', false)
  .hasProperty('loopback', true);
```

<a name="ip6address-toarray"></a>
## #toArray
should be a function.

```js
const test = new IP6Address();
unit
  .function(test.toArray);
```

should return an empty array when address is not set.

```js
const test = new IP6Address();
unit
  .array(test.toArray())
  .isEmpty();
```

should return an array of ip hextets.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .array(test.toArray())
  .is([
    '0000',
    '0000',
    '0000',
    '0000',
    '0000',
    '0000',
    '0000',
    '0001',
  ])
  .given(test.address = '2001:db8::ff00:42:8329')
  .array(test.toArray())
  .is([
    '2001',
    '0db8',
    '0000',
    '0000',
    '0000',
    'ff00',
    '0042',
    '8329',
  ]);
```

<a name="ip6address-tostring"></a>
## #toString
should be a function.

```js
const test = new IP6Address();
unit
  .function(test.toString);
```

should return an empty string when address is not set.

```js
const test = new IP6Address();
unit
  .string(test.toString()).is('');
```

should return address as a string.

```js
const test = new IP6Address();
unit
  .given(test.address = '::1')
  .string(test.toString())
  .is('::1')
  .given(test.address = '2001:db8::ff00:42:8329')
  .string(test.toString())
  .is('2001:db8::ff00:42:8329')
  .given(test.address = 'fd16:db8::ff00:42:8329')
  .string(test.toString())
  .is('fd16:db8::ff00:42:8329');
```

<a name="ip6address-symboltostringtag"></a>
## #[Symbol.toStringTag]
should return "@scuba-squad/ip6address".

```js
const test = new IP6Address();
unit
  .string(test[Symbol.toStringTag])
  .is('@scuba-squad/ip6address');
```

should return "[object @scuba-squad/ip6address]" for Object.prototype.toString.call.

```js
const test = new IP6Address();
unit
  .string(Object.prototype.toString.call(test))
  .is('[object @scuba-squad/ip6address]');
```

<a name="ip"></a>
# IP
should be a function.

```js
unit
  .function(IP);
```

should return an instance of IP4Address when given a version 4 ip string.

```js
unit
  .object(IP('127.0.0.1'))
  .isInstanceOf(IP4Address)
  .object(IP('192.168.0.1'))
  .isInstanceOf(IP4Address);
```

should return an instance of IP6Address when given a version 6 ip string.

```js
unit
  .object(IP('::1'))
  .isInstanceOf(IP6Address)
  .object(IP('2001:db8::ff00:42:8329'))
  .isInstanceOf(IP6Address);
```

should throw an Error when given an invalid ip address.

```js
unit
  .error(() => {
    IP('a');
  })
  .error(() => {
    IP(5);
  })
  .error(() => {
    IP([]);
  })
  .error(() => {
    IP({});
  });
```

