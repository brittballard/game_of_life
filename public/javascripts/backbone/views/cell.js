GameOfLife.Views.Cell = Backbone.View.extend({

  id: 'cell',

  events: {
      "click": "toggleStatus"
    },

  model: new GameOfLife.Models.Cell(),

  template: _.template("<%= this.model.alive ? 'alive' : 'dead' %>"),
  
  toggleStatus: function(){
    this.model.alive = !this.model.alive;
    this.render();
  },
  
  render: function(){
    this.$el.append(this.template());
    return this;
  }
});