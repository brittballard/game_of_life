GameOfLife.Board = Backbone.Model.extend({
  cells: {},
  setLiveCell: function(x, y){
    this.cells[x.toString() + ',' + y.toString()] = { status: 'alive' }
  },
  setDeadCell: function(x, y){
    
  }
});