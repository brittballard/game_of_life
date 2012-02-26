GameOfLife.Views.Cell = Backbone.View.extend({
  id: "app",
  className: "cell",
  render: function(){
    this.$el.text(this.template({ name: 'britton' }));
    return this;
  },
  template: _.template('"big-po-ppa no info for the dea" said <%= name %>.')
});