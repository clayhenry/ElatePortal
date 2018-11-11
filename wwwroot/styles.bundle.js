webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "html {\r\n  position: fixed;\r\n  overflow: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  background: silver;\r\n  font-family: 'IBM Plex Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  margin: 0;\r\n  overflow-y: scroll;\r\n  background: #e8e8e8;\r\n  -ms-scroll-snap-type: x mandatory;\r\n      scroll-snap-type: x mandatory;\r\n\r\n}\r\n\r\n[contenteditable=true]:empty:before{\r\n  content: attr(placeholder);\r\n  display: block; /* For Firefox */\r\n}\r\n\r\nhr {\r\n  border: 0;\r\n  height: 1px;\r\n  background:  lightgrey;\r\n  margin: 0;\r\n\r\n}\r\n\r\nh1.logo {\r\n  font-family: 'Galada', cursive;\r\n  color: #11243e;\r\n  font-size: 26px;\r\n  text-align: center;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 5px;\r\n}\r\n\r\n.profile-image {width:40px; height:40px; border-radius: 100%; float: left; margin :0 10px 0 0}\r\n\r\n.profile-name {\r\n  font-weight: bold;\r\n   font-size: 14px;\r\n}\r\n\r\n.profile-date {\r\n\r\n  color: #969696;\r\n   font-size: 14px;\r\n}\r\n\r\n.el-leftpanel {\r\n\r\n  width:50%;\r\n  float: left;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  scroll-snap-align: center;\r\n}\r\n\r\n.el-rightpanel {\r\n  width:50%;\r\n  float: left;\r\n  scroll-snap-align: center;\r\n}\r\n\r\n.el-contents {\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n\r\n}\r\n\r\n.el-panel {\r\n\r\n  margin:5px 0px;\r\n\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n}\r\n\r\n.el-panel-body {\r\n\r\n  padding:12px  12px  0px 12px;\r\n}\r\n\r\n.el-panel h1 {\r\n\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.el-panel .profile-image\r\n{\r\n  width:40px; height:40px;\r\n  border-radius: 100%;\r\n  float: left;\r\n  padding :0 0px 0 0;\r\n  margin: 5px 5px ;\r\n}\r\n\r\n.el-user-title{\r\n  color: grey;\r\n  font-size: 12px;\r\n}\r\n\r\n.el-tags {\r\n\r\n  float: left;\r\n  color: gray;\r\n\r\n}\r\n\r\n.el-tags div {\r\n\r\n  float: left;\r\n  display: inline-block;\r\n  background-color: #ecf3f9;\r\n  border-radius: 5px;\r\n  margin: 0 8px 0 0;\r\n  padding: 3px 6px;\r\n}\r\n\r\n.el-tags span {\r\n  font-size: 13px;\r\n  text-align: center;\r\n}\r\n\r\n.el-preview {\r\n  display: inline-block;\r\n  margin: 10px 0;\r\n}\r\n\r\n.el-reactions {\r\n\r\n  background-color: #f3f3f3;\r\n  padding: 8px;\r\n  font-size: 14px;\r\n  min-height: 20px;\r\n\r\n\r\n}\r\n\r\n.el-reaction {\r\n\r\n  float:right;\r\n  margin: 0 12px\r\n\r\n}\r\n\r\n.el-comment-box {\r\n\r\n  display: -webkit-inline-box;\r\n\r\n  display: -ms-inline-flexbox;\r\n\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.el-comment-box ul {\r\n\r\n  list-style-type: none;\r\n  padding: 0px;\r\n}\r\n\r\n.el-comment-box a {\r\n  color: #3c3c3c;\r\n  text-decoration: none;\r\n}\r\n\r\n.el-comment-box .el-comment-meta{\r\n\r\n  color: #3c3c3c;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\n.el-comment-box .el-comment {\r\n\r\n  margin-left:30px;\r\n}\r\n\r\n.el-comment-box input {\r\n\r\n  padding:5px;\r\n  width: 80%;\r\n  border: 1px solid #dadada;\r\n  margin-top:10px;\r\n}\r\n\r\n.el-comment-box button {\r\n\r\n  background-color: #466c8e;\r\n  color: white;\r\n  padding: 5px;\r\n  border: 0;\r\n}\r\n\r\n.el-head {\r\n\r\n  width: 100%;\r\n  display: inline-block;\r\n  padding: 7px;\r\n  background-color: white;\r\n  position: fixed;\r\n  z-index: 9;\r\n  -webkit-box-shadow: 0px 2px 3px #dcdcdc;\r\n          box-shadow: 0px 2px 3px #dcdcdc;\r\n}\r\n\r\n.el-message-icon i {\r\n\r\n  font-size: 25px;\r\n  color: #9d9d9d;\r\n}\r\n\r\n.el-notification-count {\r\n  position: absolute;\r\n  top: 0;\r\n  right: -5px;\r\n  border: 0;\r\n  border-radius: 100%;\r\n  background-color: #d61818;\r\n  width: 15px;\r\n  height: 15px;\r\n  text-align: center;\r\n  /* padding: 5px; */\r\n\r\n  font-family: sans-serif;\r\n}\r\n\r\n.el-notification-count .el-notification-number {\r\n\r\n  font-size: 10px;\r\n  color: white;\r\n  padding: 2px;\r\n}\r\n\r\n.el-chat-box {\r\n\r\n  background-color: white;\r\n  position: absolute;\r\n\r\n  width: 100%;\r\n  height: 80px;\r\n}\r\n\r\n.el-chat-messages{\r\n  background-color: white;\r\n  overflow: scroll;\r\n  margin-top:0px;\r\n\r\n}\r\n\r\n.nameslist {\r\n\r\n  position: absolute;\r\n  bottom: 60px;\r\n  width: 90%;\r\n  background-color: white;\r\n  list-style-type: none;\r\n  -webkit-box-shadow: 2px 2px 40px 1px #d0d0d0;\r\n          box-shadow: 2px 2px 40px 1px #d0d0d0;\r\n  left: 8px;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  line-height: 30px;\r\n}\r\n\r\n.el-message-input {\r\n\r\n  padding: 5px;\r\n\r\n  border: 0px solid black;\r\n  width: 70%;\r\n  float: left;\r\n\r\n}\r\n\r\n.el-post-button {\r\n\r\n  background-color: #466c8e;\r\n  color: white;\r\n  padding: 5px;\r\n  border: 0;\r\n  margin: 5px;\r\n  float:right;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map