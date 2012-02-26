GameOfLife.Views.Board = Backbone.View.extend({

  id: "board",

  events: {
      "click #start-game": "startGame"
  },

  model: new GameOfLife.Models.Board(),
  
  template: _.template("The Board! <label id='start-game'>Start Game</lable>"),

  render: function(){
    this.$el.append(this.template());
    this.$el.append(new GameOfLife.Views.Cell().render().el);
    return this;
  },
  
  startGame: function(){
    alert('Game started!');
  }
});