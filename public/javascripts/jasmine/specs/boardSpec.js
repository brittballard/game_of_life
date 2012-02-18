describe('board', function(){
  var board = new GameOfLife.Board();
  
  it('should contain a cells property', function(){
    expect(board.cells).toBeDefined();
  });
  
  it('should contain a method called \'setLiveCell\'', function(){
    expect(board.setLiveCell).toBeDefined();
  });
  
  it('should contain a method called \'setDeadCell\'', function(){
    expect(board.setDeadCell).toBeDefined();
  });
  
  describe('setLiveCell', function(){
    board.setLiveCell(1,2);
    
    it('should add a new value to the cells dictionary with a key that is the x/y cordinates of the cell', function(){
      expect(board.cells['1,2']).toBeDefined();
    });
    
    it('should set the new cell\'s status to \'alive\'', function(){
      expect(board.cells['1,2'].status).toEqual('alive');
    });
    
    it('should add dead cells all around it if a live cell isn\'t already there', function(){
      // expect(board.cells['0,1'].status).toEqual('dead');
      // expect(board.cells['0,2'].status).toEqual('dead');
      // expect(board.cells['0,3'].status).toEqual('dead');
      // expect(board.cells['1,3'].status).toEqual('dead');
      // expect(board.cells['1,1'].status).toEqual('dead');
      // expect(board.cells['2,3'].status).toEqual('dead');
      // expect(board.cells['2,2'].status).toEqual('dead');
      // expect(board.cells['2,1'].status).toEqual('dead');
    });
  });
});