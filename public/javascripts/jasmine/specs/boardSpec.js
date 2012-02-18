describe('board', function(){
  var board = new GameOfLife.Board();
  
  beforeEach(function(){
      board.cells = {}
  });
  
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
    
    it('should set the new cell\'s is \'alive\'', function(){
      board.setLiveCell(1,2);
      expect(board.cells['1,2'].get('alive')).toBeTruthy();
    });
    
    it('should add dead cells all around it if a live cell isn\'t already there', function(){
      board.setLiveCell(1,2);
      expect(board.cells['0,1'].get('alive')).toBeFalsy();
      expect(board.cells['0,2'].get('alive')).toBeFalsy();
      expect(board.cells['0,3'].get('alive')).toBeFalsy();
      expect(board.cells['1,3'].get('alive')).toBeFalsy();
      expect(board.cells['1,1'].get('alive')).toBeFalsy();
      expect(board.cells['2,3'].get('alive')).toBeFalsy();
      expect(board.cells['2,2'].get('alive')).toBeFalsy();
      expect(board.cells['2,1'].get('alive')).toBeFalsy();
    });
    
    it('should not add a dead cell if a cell already exists in a square on the board', function(){
      board.cells['0,1'] = new GameOfLife.Cell({
        x: 0,
        y: 1,
        alive: true
      });
      board.setLiveCell(1,2);
      expect(board.cells['0,1'].get('alive')).toBeTruthy();
    });
  });
  
  describe('killCell', function(){
    it('should change a cell from alive to dead', function(){
      board.setLiveCell(1,2);
      board.killCell(1,2);
      expect(board.cells['1,2'].get('alive')).toBeFalsy();
    });
  });
  
  describe('reanimateCell', function(){
    it('should reanimate a cell if it is dead', function(){
      board.setLiveCell(1,2);
      board.killCell(1,2);
      board.reanimateCell(1,2);
      expect(board.cells['1,2'].get('alive')).toBeTruthy();      
    });
  });
  
  describe('liveNeighborCount', function(){
    it('should return the count of living cells around a cell', function(){
      board.setLiveCell(1,2);
      board.setLiveCell(0,2);
      board.setLiveCell(2,1);
      board.setLiveCell(2,3);
      expect(board.liveNeighborCount(1,2)).toEqual(3);
    });
  });
});