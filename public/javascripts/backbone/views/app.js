GameOfLife.Views.App = Backbone.View.extend({
  render: function(){
    var view = new GameOfLife.Views.Cell();
    this.$el.append(view.render().el);
  }
})