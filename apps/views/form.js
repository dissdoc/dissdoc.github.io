MtsApp.Views.Form = Backbone.View.extend({

	el: '.top',

	template: _.template(template('apps.templates.form')),

	events: {
		'click .dtfield': 'initDateField'
	},

	initDateField: function(event) {
		event.preventDefault();
		var tdate = $(event.target);
		tdate
			.datepicker('hide')
			.datepicker('show')
			.on('changeDate', function(event) {
				var endDate = new Date(event.date);
				$('.dtresult').val(endDate.getDate() + "-" +
                            (endDate.getUTCMonth()+1) + "-" +
                            endDate.getFullYear());
				tdate.datepicker('hide');
			})
			.data('datepicker');
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	}	

});