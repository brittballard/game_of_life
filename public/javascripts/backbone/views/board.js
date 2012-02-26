GameOfLife.Views.Board = Backbone.View.extend({

  id: "board",

  model: new GameOfLife.Models.Board(),
  
  template: _.template("The Board!"),

  render: function(){
    this.$el.append(this.template());
    this.$el.append(new GameOfLife.Views.Cell().render().el);
    return this;
  },
});