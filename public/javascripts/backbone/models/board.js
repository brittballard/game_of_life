GameOfLife.Board = Backbone.Model.extend((function(){  
  var getKey = function(x,y){
    return x.toString() + ',' + y.toString();
  };
  
  return { 
    cells: {},
    setLiveCell: function(x, y){
      this.cells[getKey(x,y)] = { status: 'alive' };
      // this.cells[]
    },
    setDeadCell: function(x, y){
  
    }
  }
})());