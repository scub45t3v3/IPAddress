# IPAddress

<a name="status"></a>
## Status
[![Build Status](https://travis-ci.org/scub45t3v3/IPAddress.svg?branch=master)](https://travis-ci.org/scub45t3v3/IPAddress)

<a name="toc"></a>
## Table of Content
  * [Status](#status)
  * [Purpose](#purpose)
  * [Installation](#installation)
  * [API](#api)
  * [Test](#test)
  * [License](#license)

<a name="purpose"></a>
## Purpose
IPAddress class definition

<a name="installation"></a>
## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install IPAddress
```

<a name="api"></a>
## API
### `IP(address: string): IP4Address | IP6Address`
**Added in:** v1.0.0

Factory method to build and return an IP4Address or IP6Address object

**arguments:**
1. `address: string`

**returns:** IP4Address | IP6Address

**throws:** TypeError

```javascript
const {IP} = require('IPAddress');

let ipv4 = IP('127.0.0.1');
let ipv6 = IP('::1');
```

### `IP4Address(address: ?string): IP4Address`
**Added in:** v1.0.0

IP4Address class constructor

**arguments:**
1. `address: string | null | undefined`

**returns:** IP4Address

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address();
```
alternatively
* you can require the IP4Address class via the file
* you can create an instance without the new keyword
```javascript
const IP4Address = require('IPAddress/IP4Address');

let ipv4 = IP4Address();
```

#### `IP4Address.VERSION: string`
**Added in:** v1.0.0

Semantic version number of class definition

**returns:** string

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address();
ipv4.VERSION; // 1.0.0
```

#### `IP4Address.IP_VERSION: number`
**Added in:** v1.0.0

IP version number

**returns:** number

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address();
ipv4.IP_VERSION; // 4
```

#### `IP4Address.address: ?string`
**Added in:** v1.0.0

Property containing the ip address

**returns:** string | null | undefined

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

// set address via setAddress()
let ipv4 = new IP4Address('127.0.0.1');
// get address via getAddress()
ipv4.address; // 127.0.0.1
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get address via getAddress()
ipv4.address; // 192.168.0.1
// unset address via setAddress()
ipv4.address = undefined;
// get address via getAddress()
ipv4.address; // undefined
```

#### `IP4Address.getAddress(): ?string`
**Added in:** v1.0.0

Getter method for address property

**returns:** string | null | undefined

```javascript
const {IP4Address} = require('IPAddress');

// set address via setAddress()
let ipv4 = new IP4Address('127.0.0.1');
// get address via getAddress()
ipv4.getAddress(); // 127.0.0.1
```

#### `IP4Address.setAddress(address: ?string): IP4Address`
**Added in:** v1.0.0

Setter method for address property

**arguments:**
1. `address: string | null | undefined`

**returns:** IP4Address

```javascript
const {IP4Address} = require('IPAddress');

// set address via setAddress()
let ipv4 = new IP4Address('127.0.0.1');
// get address via getAddress()
ipv4.address; // 127.0.0.1
// set address via setAddress()
ipv4.setAddress('192.168.0.1');
// get address via getAddress()
ipv4.address; // 192.168.0.1
// unset address via setAddress()
ipv4.setAddress();
// get address via getAddress()
ipv4.address; // undefined

// address throws an Exception for invalid values
ipv4.setAddress('127.0.1') // TypeError
ipv4.setAddress('a'); // TypeError
ipv4.setAddress(5); // TypeError
ipv4.setAddress([]); // TypeError
```

#### `IP4Address.public: boolean`
**Added in:** v1.0.0

Property identifying if the address is public

**returns:** boolean

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get public via isPublic()
ipv4.public; // false
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get public via isPublic()
ipv4.public; // false
// set address vis setAddress()
ipv4.address = '74.36.0.15';
// get public via isPublic()
ipv4.public; // true

// public throws an Exception when attempting to set
ipv4.public = false; // TypeError
ipv4.public = 1; // TypeError
ipv4.public = null; // TypeError
```

#### `IP4Address.isPublic(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is public

**returns:** boolean

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get public via isPublic()
ipv4.isPublic(); // false
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get public via isPublic()
ipv4.isPublic(); // false
// set address vis setAddress()
ipv4.address = '74.36.0.15';
//get public via isPublic()
ipv4.isPublic(); // true
```

#### `IP4Address.private: boolean`
**Added in:** v1.0.0

Property identifying if the address is private

**returns:** boolean

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get private via isPrivate()
ipv4.private; // false
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get private via isPrivate()
ipv4.private; // true
// set address vis setAddress()
ipv4.address = '74.36.0.15';
// get private via isPrivate()
ipv4.private; // false

// private throws an Exception when attempting to set
ipv4.private = false; // TypeError
ipv4.private = 1; // TypeError
ipv4.private = null; // TypeError
```

#### `IP4Address.isPrivate(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is private

**returns:** boolean

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get private via isPrivate()
ipv4.isPrivate(); // false
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get private via isPrivate()
ipv4.isPrivate(); // true
// set address vis setAddress()
ipv4.address = '74.36.0.15';
//get private via isPrivate()
ipv4.isPrivate(); // false
```

#### `IP4Address.loopback: boolean`
**Added in:** v1.0.0

Property identifying if the address is a loopback

**returns:** boolean

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get loopback via isLoopback()
ipv4.loopback; // true
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get loopback via isLoopback()
ipv4.loopback; // false
// set address vis setAddress()
ipv4.address = '74.36.0.15';
// get loopback via isLoopback()
ipv4.loopback // false

// loopback throws an Exception when attempting to set
ipv4.loopback = false; // TypeError
ipv4.loopback = 1; // TypeError
ipv4.loopback = null; // TypeError
```

#### `IP4Address.isLoopback(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is a loopback

**returns:** boolean

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
// get loopback via isLoopback()
ipv4.isLoopback(); // true
// set address via setAddress()
ipv4.address = '192.168.0.1';
// get loopback via isLoopback()
ipv4.isLoopback(); // false
// set address vis setAddress()
ipv4.address = '74.36.0.15';
//get loopback via isLoopback()
ipv4.isLoopback(); // false
```

#### `IP4Address.isEqual(address: ?string | IP4Address): boolean`
**Added in:** v1.0.0

Method checking the equality of version 4 ip addresses

**arguments:**
1. `address: string | IPAddress | null | undefined`

**returns:** boolean

**throws:** TypeError

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
ipv4.isEqual('127.0.0.1'); // true
ipv4.isEqual(new IP4Address('127.0.0.1')); // true
ipv4.isEqual(); // false

// isEqual throws an Exception when given an invalid ip string
ipv4.isEqual('127.0.1'); // TypeError
ipv4.isEqual('a'); // TypeError
ipv4.isEqual(5); // TypeError
```

#### `IP4Address.toJSON(): object`
**Added in:** v1.0.0

Method to retrieve an object literal containing the address and metadata

**returns:** object

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
ipv4.toJSON(); // {address: '127.0.0.1', public: false, private: false, loopback: true}

// serialize via JSON.stringify implicitly calls toJSON()
JSON.stringify(ipv4); // '{"address": "127.0.0.1", "public": false, "private": false, "loopback": true}'
```

#### `IP4Address.toArray(): array`
**Added in:** v1.0.0

Method to retrieve an array of octets

**returns:** array

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
ipv4.toArray(); // ['127', '0', '0', '1']
// unset address via setAddress()
ipv4.address = null;
ipv4.toArray(); // []
```

#### `IP4Address.toString(): string`
**Added in:** v1.0.0

Method to retrieve a string representation of address

**returns:** string

```javascript
const {IP4Address} = require('IPAddress');

let ipv4 = new IP4Address('127.0.0.1');
ipv4.toString(); // '127.0.0.1'
// unset address via setAddress()
ipv4.address = null;
ipv4.toString(); // ''
```

### `IP6Address(address: ?string): IP6Address`
**Added in:** v1.0.0

IP6Address class constructor

**arguments:**
1. `address: string | null | undefined`

**returns:** IP6Address

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address();
```
alternatively
* you can require the IP6Address class via the file
* you can create an instance without the new keyword
```javascript
const IP6Address = require('IPAddress/IP6Address');

let ipv6 = IP6Address();
```

#### `IP6Address.VERSION: string`
**Added in:** v1.0.0

Semantic version number of class definition

**returns:** string

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address();
ipv6.VERSION; // 1.0.0
```

#### `IP6Address.IP_VERSION: number`
**Added in:** v1.0.0

IP version number

**returns:** number

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address();
ipv6.IP_VERSION; // 6
```

#### `IP6Address.address: ?string`
**Added in:** v1.0.0

Property containing the ip address

**returns:** string | null | undefined

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

// set address via setAddress()
let ipv6 = new IP6Address('::1');
// get address via getAddress()
ipv6.address; // ::1
// set address via setAddress()
ipv6.address = 'fd16::10';
// get address via getAddress()
ipv6.address; // fd16::10
// unset address via setAddress()
ipv6.address = undefined;
// get address via getAddress()
ipv6.address; // undefined
```

#### `IP6Address.getAddress(): ?string`
**Added in:** v1.0.0

Getter method for address property

**returns:** string | null | undefined

```javascript
const {IP6Address} = require('IPAddress');

// set address via setAddress()
let ipv6 = new IP6Address('::1');
// get address via getAddress()
ipv6.getAddress(); // ::1
```

#### `IP6Address.setAddress(address: ?string): IP6Address`
**Added in:** v1.0.0

Setter method for address property

**arguments:**
1. `address: string | null | undefined`

**returns:** IP4Address

```javascript
const {IP6Address} = require('IPAddress');

// set address via setAddress()
let ipv6 = new IP6Address('::1');
// get address via getAddress()
ipv6.address; // ::1
// set address via setAddress()
ipv6.setAddress('fd16::10');
// get address via getAddress()
ipv6.address; // fd16::10
// unset address via setAddress()
ipv6.setAddress();
// get address via getAddress()
ipv6.address; // undefined

// address throws an Exception for invalid values
ipv6.setAddress('::g') // TypeError
ipv6.setAddress('a'); // TypeError
ipv6.setAddress(5); // TypeError
ipv6.setAddress([]); // TypeError
```

#### `IP6Address.public: boolean`
**Added in:** v1.0.0

Property identifying if the address is public

**returns:** boolean

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get public via isPublic()
ipv6.public; // false
// set address via setAddress()
ipv6.address = 'fd16::10';
// get public via isPublic()
ipv6.public; // false
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
// get public via isPublic()
ipv6.public; // true

// public throws an Exception when attempting to set
ipv6.public = false; // TypeError
ipv6.public = 1; // TypeError
ipv6.public = null; // TypeError
```

#### `IP6Address.isPublic(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is public

**returns:** boolean

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get public via isPublic()
ipv6.isPublic(); // false
// set address via setAddress()
ipv6.address = 'fd16::10';
// get public via isPublic()
ipv6.isPublic(); // false
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
//get public via isPublic()
ipv6.isPublic(); // true
```

#### `IP6Address.private: boolean`
**Added in:** v1.0.0

Property identifying if the address is private

**returns:** boolean

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get private via isPrivate()
ipv6.private; // false
// set address via setAddress()
ipv6.address = 'fd16::10';
// get private via isPrivate()
ipv6.private; // true
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
// get private via isPrivate()
ipv6.private; // false

// private throws an Exception when attempting to set
ipv6.private = false; // TypeError
ipv6.private = 1; // TypeError
ipv6.private = null; // TypeError
```

#### `IP6Address.isPrivate(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is private

**returns:** boolean

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get private via isPrivate()
ipv6.isPrivate(); // false
// set address via setAddress()
ipv6.address = 'fd16::10';
// get private via isPrivate()
ipv6.isPrivate(); // true
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
//get private via isPrivate()
ipv6.isPrivate(); // false
```

#### `IP6Address.loopback: boolean`
**Added in:** v1.0.0

Property identifying if the address is a loopback

**returns:** boolean

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get loopback via isLoopback()
ipv6.loopback; // true
// set address via setAddress()
ipv6.address = 'fd16::10';
// get loopback via isLoopback()
ipv6.loopback; // false
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
// get loopback via isLoopback()
ipv6.loopback // false

// loopback throws an Exception when attempting to set
ipv6.loopback = false; // TypeError
ipv6.loopback = 1; // TypeError
ipv6.loopback = null; // TypeError
```

#### `IP6Address.isLoopback(): boolean`
**Added in:** v1.0.0

Computed method identifying if the address is a loopback

**returns:** boolean

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
// get loopback via isLoopback()
ipv6.isLoopback(); // true
// set address via setAddress()
ipv6.address = 'fd16::10';
// get loopback via isLoopback()
ipv6.isLoopback(); // false
// set address vis setAddress()
ipv6.address = '2001:db8::64:f7';
//get loopback via isLoopback()
ipv6.isLoopback(); // false
```

#### `IP6Address.isEqual(address: ?string | IP6Address): boolean`
**Added in:** v1.0.0

Method checking the equality of version 6 ip addresses

**arguments:**
1. `address: string | IP6Address | null | undefined`

**returns:** boolean

**throws:** TypeError

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
ipv6.isEqual('::1'); // true
ipv6.isEqual(new IP6Address('::1')); // true
ipv6.isEqual('::0001'); // true
ipv6.isEqual('0:0:0:0:0:0:0:1'); //true
ipv6.isEqual('::10') // false
ipv6.isEqual(); // false

// isEqual throws an Exception when given an invalid ip string
ipv6.isEqual('::g'); // TypeError
ipv6.isEqual('a'); // TypeError
ipv6.isEqual(5); // TypeError
```

#### `IP6Address.toJSON(): object`
**Added in:** v1.0.0

Method to retrieve an object literal containing the address and metadata

**returns:** object

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
ipv6.toJSON(); // {address: '::1', public: false, private: false, loopback: true}

// serialize via JSON.stringify implicitly calls toJSON()
JSON.stringify(ipv6); // '{"address": "::1", "public": false, "private": false, "loopback": true}'
```

#### `IP6Address.toArray(): array`
**Added in:** v1.0.0

Method to retrieve an array of hextets

**returns:** array

```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
ipv6.toArray(); // ['0000', '0000', '0000', '0000', '0000', '0000', '0000', '0001']
// unset address via setAddress()
ipv6.address = null;
ipv6.toArray(); // []
```

#### `IP6Address.toString(): string`
**Added in:** v1.0.0

Method to retrieve a string representation of address

**returns:** string


```javascript
const {IP6Address} = require('IPAddress');

let ipv6 = new IP6Address('::1');
ipv6.toString(); // '::1'
// set address via setAddress()
ipv6.address = 'fd16:0000:0000:0000:0000:0000:0000:07af';
ipv6.toString(); // 'fd16::7af'
// unset address via setAddress()
ipv6.address = null;
ipv6.toString(); // ''
```

<a name="test"></a>
## Test
```bash
npm install
npm test
```

<a name="license"></a>
## License
[MIT](LICENSE)