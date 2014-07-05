function template(path) {

	var cache = MtsApp.LMD.tmpls;
	if (path in cache) return cache[path];

	var proto = template.prototype = {

		constructor: template,

		_getTemplate: function(url) {
			var request = new XMLHttpRequest();

			request.open('GET', url, false);
			request.send();

			if (request.status !== 200)
				throw new Error(request.statusText);

			var type = request.getResponseHeader('Content-Type');
			if (type == 'text/html') {
				cache[path] = request.responseText;
			 	return cache[path];
			}

			return null;
		},

		_refactoringStr: function(path) {
			return '/' + path.replace(/\./g, '/') + '.html';
		}

	};

	var file = proto._refactoringStr(path);
	return proto._getTemplate(file);

};

function include(module) {

	var cache = MtsApp.LMD.cache;
	if (module in cache) return;
	
	var proto = include.prototype = {

		constructor: include,

		_getScriptAsModule: function(url) {
			var request = new XMLHttpRequest();	

			request.open('GET', url, false);
			request.send();

			if (request.status !== 200)
				throw new Error(request.statusText);	

			var type = request.getResponseHeader('Content-Type');
			if (type == 'application/javascript') {
				cache[module] = null;
				this._innerJS(request.responseText);
			}

			return null;
		},

		_refactoringStr: function(module) {
			return '/' + module.replace(/\./g, '/') + '.js';	
		},

		_innerJS: function(code) {			
			var head = document.getElementsByTagName('HEAD').item(0);
			var script = document.createElement("script");
			script.language = "javascript";
			script.type = "text/javascript";
			script.text = code;
			head.appendChild(script);
		}

	};

	var file = proto._refactoringStr(module);
	proto._getScriptAsModule(file);
};

MtsApp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	LMD: {
		cache: [],
		tmpls: []
	},
}