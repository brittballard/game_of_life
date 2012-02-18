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
    it('should add a new value to the cells dictionary with a key that is the x/y cordinates of the cell', function(){
      board.setLiveCell(1,2);
      expect(board.cells['1,2']).toBeDefined();
    });
    
    it('should set the new cell\'s status to \'alive\'', function(){
      board.setLiveCell(1,2);
      expect(board.cells['1,2'].status).toEqual('alive');
    });
  });
});