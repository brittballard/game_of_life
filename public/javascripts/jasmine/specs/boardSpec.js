describe('board', function(){
  var board = new GameOfLife.Board();
  
  it('should contain a cells property', function(){
    expect(board.cells).toBeDefined();
  })
})