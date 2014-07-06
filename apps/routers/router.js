include('apps.views.form');
include('apps.views.panel');

MtsApp.Routers.Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'*other': 'another'
	},

	index: function() {
		var form = new MtsApp.Views.Form;
		form.render();

		var leftPanel = new MtsApp.Views.Panel;
		leftPanel.setHeader('Процесс малой портации');
		leftPanel.setContent('<table class="table table-striped"><thead><tr><th>Номер заказа</th><th>Операция</th></tr></thead><tbody><tr><td>12343566</td><td>TELEK.PROVI</td></tr><tr><td>12343566</td><td>TELEK.PROVI</td></tr></tbody></table>');
		$('.left').html(leftPanel.render().el);		

		var centerPanel = new MtsApp.Views.Panel;
		centerPanel.setHeader('Ожидание малой портации');
		centerPanel.setContent('<table class="table table-striped"><thead><tr><th>Номер заказа</th><th>Дата портации</th></tr></thead><tbody><tr><td>12343566</td><td>2014-07-02 00:00</td></tr><tr><td>12343566</td><td>2014-07-02 00:00</td></tr></tbody></table>');
		$('.center').html(centerPanel.render().el);

		var rightTopPanel = new MtsApp.Views.Panel;
		rightTopPanel.setHeader('Требует внимания');
		rightTopPanel.setContent('<table class="table table-striped"><tbody><tr><td><span class="label label-warning">Warning 1</span></td><td>Число</td></tr><tr><td><span class="label label-success">Success</span></td><td>Число</td></tr></tbody></table>');
		$('.right-top').html(rightTopPanel.render().el);

		var rightBottomPanel = new MtsApp.Views.Panel;
		rightBottomPanel.setHeader('Панель');
		rightBottomPanel.setContent('as');
		$('.right-bottom').html(rightBottomPanel.render().el);
	},

	another: function() {

	}

});