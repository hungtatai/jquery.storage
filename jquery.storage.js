/*!
 * jquery.storage
 * 
 * Version: 1.0 (2012/6/9)
 * Requires: jQuery v1.2 or later
 *
 * Author: HondaDai
 * MIT licenses ( http://www.opensource.org/licenses/mit-license.php )
 *
 */
 
(function($){
	var storage = function(){};
	var supportJSON = !!(window.JSON)
	var supportLocalStorage =  !!(window.localStorage);
	
	storage.prototype = {
		support : supportLocalStorage,
		get : function(key, def){
			if( !this.support ) return null;
			
			var item = window.localStorage.getItem(key);
			
			if ( item == null ) return def || null;
			else if( supportJSON ) return JSON.parse(item);
			else return item;
		},
		set : function(key, item) {
			if( !this.support ) return null;
			
			if ( supportJSON ) 
				item = JSON.stringify(item);
			
			window.localStorage.setItem(key, item);
			return this;
		},
		remove : function(key) {
			if( !this.support ) return null;
			
			window.localStorage.removeItem(key);
			return this;
		},
		clear : function() {
			if( !this.support ) return null;
			
			window.localStorage.clear();
			return this;
		},
		key : function(index) {
			if( !this.support ) return null;
			
			return window.localStorage.key(index);
		},
		length : function() {
			if( !this.support ) return null;
			
			return window.localStorage.length;
		},
		keyset : function() {
			if( !this.support ) return null;
			
			var mySet = [];
			for(var i=0;i<this.length();i++)
				mySet.push( this.key(i) );
			return mySet;
		},
		has : function(key){
			if( !this.support ) return null;
			
			return !(window.localStorage.getItem(key) == null);
		}
	}
	
	$.storage = new storage();
})(jQuery);