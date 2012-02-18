describe('board', function(){
  var board = new GameOfLife.Board();
  
  it('should contain a cells property', function(){
    expect(board.cells).toBeDefined();
  });
  
  it('should contain a method called \'setLiveCell\'', function(){
    expect(board.setLiveCell).toBeDefined();
  });
  
  it('should contain a method called \'killCell\'', function(){
    expect(board.killCell).toBeDefined();
  });
  
  it('should contain a method called \'reanimateCell\'', function(){
    expect(board.reanimateCell).toBeDefined();
  });
  
  describe('setLiveCell', function(){
    it('should add a new value to the cells dictionary with a key that is the x/y cordinates of the cell', function(){
      board.setLiveCell(1,2);
      expect(board.cells['1,2']).toBeDefined();
    });
    
    it('should set the new cell\'s status to \'alive\'', function(){
      board.setLiveCell(1,2);
      expect(board.cells['1,2'].get('status')).toEqual('alive');
    });
    
    it('should add dead cells all around it if a live cell isn\'t already there', function(){
      board.setLiveCell(1,2);
      expect(board.cells['0,1'].get('status')).toEqual('dead');
      expect(board.cells['0,2'].get('status')).toEqual('dead');
      expect(board.cells['0,3'].get('status')).toEqual('dead');
      expect(board.cells['1,3'].get('status')).toEqual('dead');
      expect(board.cells['1,1'].get('status')).toEqual('dead');
      expect(board.cells['2,3'].get('status')).toEqual('dead');
      expect(board.cells['2,2'].get('status')).toEqual('dead');
      expect(board.cells['2,1'].get('status')).toEqual('dead');
    });
    
    it('should not add a dead cell if a cell already exists in a square on the board', function(){
      board.cells['0,1'] = new GameOfLife.Cell({
        x: 0,
        y: 1,
        status: 'alive'
      });
      board.setLiveCell(1,2);
      expect(board.cells['0,1'].get('status')).toEqual('alive');
    });
  });
  
  describe('killCell', function(){
    it('should change a cell\'s status from alive to dead', function(){
      board.setLiveCell(1,2);
      board.killCell(1,2);
      expect(board.cells['1,2'].get('status')).toEqual('dead');
    });
  });
  
  describe('reanimateCell', function(){
    it('should reanimate a cell if it is dead', function(){
      board.setLiveCell(1,2);
      board.killCell(1,2);
      board.reanimateCell(1,2);
      expect(board.cells['1,2'].get('status')).toEqual('alive');      
    });
  });
});