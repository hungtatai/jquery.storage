jquery.storage
==============

* License - The MIT License
* Required - [jquery](http://jquery.com/) version 1.2 or later
* **Not Support IE6, IE7**

Usage
-----

* `$.storage.set(key, item);` // support saving object and array
* `$.storage.get(key); `
* `$.storage.get(key, default_item); `
* `$.storage.remove(key); `
* `$.storage.clear(); `
* `$.storage.length(); `
* `$.storage.key(index); `
* `$.storage.keyset(); `
* `$.storage.has(); `

Example
--------

	$.storage.keyset()
	// []

	$.storage.length()
	// 0

	$.storage.get('name')
	// null

	$.storage.get('name', 'Tony')
	// "Tony"

	$.storage.set('name', 'Honda')
	// storage

	$.storage.get('name', 'Tony')
	// "Honda"

	$.storage.keyset()
	// ["name"]

	$.storage.set('like', 'javascript')
	// storage

	$.storage.length()
	// 2

	$.storage.keyset()
	// ["name", "like"]

	$.storage.key(0)
	// "name"

	$.storage.key(2)
	// null

	$.storage.remove('name')
	// storage

	$.storage.key(0)
	// "like"

	$.storage.clear()
	// storage

	$.storage.length()
	// 0

Advance
-------

	$.storage.set('name', 'Honda').set('data', {a:1, b:2} ).keyset();
	// ["data", "name"]
	
	$.storage.get('data')
	// Object {a:1, b:2}
