GameOfLife.Views.Cell = Backbone.View.extend({

  events: {
      "click": "toggleStatus"
    },

  model: new GameOfLife.Models.Cell(),

  template: _.template("<div><%= this.model.alive ? 'alive' : 'dead' %></div>"),

  render: function(){
    this.$el.html(this.template());
    return this;
  },
  
  toggleStatus: function(){
    this.model.alive = !this.model.alive;
    this.render();
  }
});