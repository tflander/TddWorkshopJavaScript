describe("Player", function() {
  var game;

  beforeEach(function() {
    game = new RockPaperScissors();
  });

  it("determines rock beats scissors", function() {
    expect(game.determingWinner("rock", "scissors")).toEqual("rock beats scissors");
  });

});
