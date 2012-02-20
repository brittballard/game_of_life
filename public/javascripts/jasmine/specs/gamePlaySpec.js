describe('gamePlay', function(){
  var board = jasmine.createSpy();
  var rules = jasmine.createSpy();
  var gamePlay = new GameOfLife.GamePlay(board, rules);
  
  it('should have a onGoing property that defaults to true', function(){
    expect(gamePlay.onGoing).toBeDefined();
    expect(gamePlay.onGoing).toBeTruthy();
  });
  
  it('should have a rules property that is set by the argument passed to the constructor', function(){
    expect(gamePlay.rules).toBeDefined();
    expect(gamePlay.rules)toBe(rules);
  });
  
  it('should have a board property that is set by the argument passed to the constructor', function(){
    expect(gamePlay.board).toBeDefined();
    expect(gamePlay.board).toBe(board);
  });
  
  describe('play', function(){
    
  });
});