GameOfLife.Views.Cell = Backbone.View.extend({

  id: "app",

  className: "cell",

  events: {
      "click": "toggleStatus"
    },

  model: new GameOfLife.Models.Cell(),

  template: _.template("<div id='cell-<%= this.model.cid %>'><%= this.model.alive ? 'alive' : 'dead' %></div>"),

  render: function(){
    this.$el.html(this.template({ name: 'britton' }));
    return this;
  },
  
  toggleStatus: function(){
    this.model.alive = !this.model.alive;
    this.render();
  }
});