Feature: Playing a game of life
  In order to play a game of life
  As a computer scientist
  I need to be able to setup the board and click start
  
@javascript
Scenario: Click on a cell
  Given I on the board
  When I click on a dead cell
  Then it should come to life