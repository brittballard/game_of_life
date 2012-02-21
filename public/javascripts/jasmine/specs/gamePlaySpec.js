describe('gamePlay', function(){
  var board = new GameOfLife.Board();
  var rule = new GameOfLife.ExactlyThreeLiveNeighborsRule();
  var rules = [rule];
  var gamePlay = new GameOfLife.GamePlay(board, rules);

  it('should have a rules property that is set by the argument passed to the constructor', function(){
    expect(gamePlay.rules).toBeDefined();
    expect(gamePlay.rules).toBe(rules);
  });
  
  it('should have a board property that is set by the argument passed to the constructor', function(){
    expect(gamePlay.board).toBeDefined();
    expect(gamePlay.board).toBe(board);
  });
  
  describe('play', function(){
    it('should call the apply method on each applicable rule', function(){      
      var myCell = new GameOfLife.Cell();
      board.cells['1,2'] = myCell;
      var applicableSpy = spyOn(rule, 'applicable').andReturn(true);
      var applySpy = spyOn(rule, 'apply');
      
      gamePlay.play();
        
      expect(rule.apply).toHaveBeenCalledWith(myCell);
      expect(applicableSpy.callCount).toEqual(1);
      expect(applySpy.callCount).toEqual(1);
    });
    
    it('should continue to process until the next generation results in all dead cells', function(){      
      board.cells['1,2'] = new GameOfLife.Cell();
      var applicableSpy = spyOn(rule, 'applicable').andReturn(true);
      var generationCount = 0;
      var applySpy = spyOn(rule, 'apply').andCallFake(function(cell){
        if(generationCount == 2){
          cell.set({ nextGenerationAlive: false });
        }
        else{
          cell.set({ nextGenerationAlive: true });
          generationCount++;          
        }
      });
      var boardSpy = spyOn(board, 'moveToNextGeneration');
      
      gamePlay.play();
      
      expect(board.moveToNextGeneration.callCount).toEqual(3);
    });
  });
});