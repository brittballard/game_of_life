GameOfLife.Views.Cell = Backbone.View.extend({
  tagName: "div",
  className: "cell",
  render: function(){
    $(this.el).html('hello world');
    return this;
  }
});