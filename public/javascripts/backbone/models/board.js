GameOfLife.Board = Backbone.Model.extend((function(){  
  var getKey = function(x,y){
    return x.toString() + ',' + y.toString();
  };
  
  var getLiveCell = function(x,y){
    return new GameOfLife.Cell({
        x: x,
        y: y,
        alive: true
    });    
  };
  
  var getDeadCell = function(x,y){
    return new GameOfLife.Cell({
        x: x,
        y: y,
        alive: false
    });
  };
  
  var setCellIfUndefined = function(cells, x, y){
    if(cells[getKey(x,y)] === undefined)
    {
      cells[getKey(x,y)] = getDeadCell(x, y);
    }
  };
  
  var actOnLiveNeighbors = function(x, y, cells, action){
    if(cells[getKey(x, y)] !== undefined && cells[getKey(x, y)].get('alive')){
      action();
    }
  };
  
  return { 
    cells: {},
    
    setLiveCell: function(x, y){
      this.cells[getKey(x,y)] = getLiveCell(x,y);
      
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
      this.cells[getKey(x,y)].set({ alive: false });
    },
    
    reanimateCell: function(x, y){
      this.cells[getKey(x,y)].set({ alive: true });
    },
    
    liveNeighborCount: function(x, y){
      var liveNeighbors = 0;
      
      actOnLiveNeighbors(x, y-1, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x, y+1, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x-1, y-1, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x-1, y, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x-1, y+1, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x+1, y-1, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x+1, y, this.cells, function() { liveNeighbors++; });
      actOnLiveNeighbors(x+1, y+1, this.cells, function() { liveNeighbors++; });
      
      return liveNeighbors;
    },
    
    deadNeighborCount: function(x, y){
      return 8 - this.liveNeighborCount(x, y);
    }
  }
})());