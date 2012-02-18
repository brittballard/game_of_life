GameOfLife.Board = Backbone.Model.extend((function(){  
  var getKey = function(x,y){
    return x.toString() + ',' + y.toString();
  };
  
  var getDeadCell = function(){
    return { status: 'dead' };
  };
  
  var setCellIfUndefined = function(cells, x, y){
    if(cells[getKey(x,y)] === undefined)
    {
      cells[getKey(x,y)] = getDeadCell();
    }
  };
  
  return { 
    cells: {},
    
    setLiveCell: function(x, y){
      this.cells[getKey(x,y)] = { status: 'alive' };
      
      setCellIfUndefined(this.cells, x, y-1);
      setCellIfUndefined(this.cells, x, y+1);
      setCellIfUndefined(this.cells, x-1, y-1);
      setCellIfUndefined(this.cells, x-1, y);
      setCellIfUndefined(this.cells, x-1, y+1);
      setCellIfUndefined(this.cells, x+1, y-1);
      setCellIfUndefined(this.cells, x+1, y);
      setCellIfUndefined(this.cells, x+1, y+1);       
    },
    
    killCell: function(x, y){
      this.cells[getKey(x,y)].status = 'dead';
    },
    
    reanimateCell: function(x, y){
      this.cells[getKey(x,y)].status = 'alive';
    }
  }
})());