!function(t){"use strict";t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"Ekkert fannst"},formatInputTooShort:function(t,n){var r=n-t.length;return"Vinsamlegast skrifi\xf0 "+r+" staf"+(1==r?"":"i")+" \xed vi\xf0b\xf3t"},formatInputTooLong:function(t,n){var r=t.length-n;return"Vinsamlegast stytti\xf0 texta um "+r+" staf"+(1==r?"":"i")},formatSelectionTooBig:function(t){return"\xde\xfa getur a\xf0eins vali\xf0 "+t+" atri\xf0i"},formatLoadMore:function(){return"S\xe6ki fleiri ni\xf0urst\xf6\xf0ur..."},formatSearching:function(){return"Leita..."}})}(jQuery);