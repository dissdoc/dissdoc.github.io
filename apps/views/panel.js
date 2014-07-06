MtsApp.Views.Panel = Backbone.View.extend({

	template: _.template(template('apps.templates.panel')),

	setHeader: function(value) {
		this.header = value;
	},

	setContent: function(content) {
		this.content = content;
	},

	render: function() {
		this.$el.html(this.template({header: this.header, content: this.content}));
		return this;
	}

});