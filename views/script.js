/** Function that return a random Array's item */
Array.prototype.rand = function () {
  let index = Math.floor(Math.random() * this.length);
  return this[index];
};

/** TicTacToe */
class TicTacToe {
  constructor() {
    this._cells = TicTacToe.getNewCells();
    this._moves = 0;
    this._playing = false;
    this._playerOne = null;
    this._playerTwo = null;
    this._currentPlayer = null;
  }

  static getNewCells() {
    return new Array(9).fill(null);
  }

  set cells(cells) {
    this._cells = cells;
  }

  set moves(moves) {
    this._moves = moves;
  }

  set playing(playing) {
    this._playing = playing;
  }

  set playerOne(player) {
    this._playerOne = player;
  }

  set playerTwo(player) {
    this._playerTwo = player;
  }

  set currentPlayer(player) {
    this._currentPlayer = player;
  }

  get cells() {
    return this._cells;
  }

  get moves() {
    return this._moves;
  }

  get playing() {
    return this._playing;
  }

  get playerOne() {
    return this._playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  getCell(index) {
    return this._cells[index];
  }

  setCell(index, key) {
    this._cells[index] = key;
  }

  getEmptyCells(cells = this.cells) {
    let indexes = [];

    cells.forEach((value, index) => {
      if (value === null) indexes.push(index);
    });

    return indexes;
  }

  getFullCells() {
    let indexes = [];

    this._cells.forEach((value, index) => {
      if (value !== null) indexes.push(index);
    });

    return indexes;
  }

  checkWin(cells = this.cells, key = this.currentPlayer.key) {
    if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] == key) return [0, 1, 2];
    if (cells[3] == cells[4] && cells[4] == cells[5] && cells[5] == key) return [3, 4, 5];
    if (cells[6] == cells[7] && cells[7] == cells[8] && cells[8] == key) return [6, 7, 8];
    if (cells[0] == cells[3] && cells[3] == cells[6] && cells[6] == key) return [0, 3, 6];
    if (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] == key) return [1, 4, 7];
    if (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] == key) return [2, 5, 8];
    if (cells[2] == cells[4] && cells[4] == cells[6] && cells[6] == key) return [2, 4, 6];
    if (cells[0] == cells[4] && cells[4] == cells[8] && cells[8] == key) return [0, 4, 8];
    return [];
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer.key === this.playerOne.key ?
    this.playerTwo :
    this.playerOne;
  }

  makeMove() {
    let indexes = this.getEmptyCells();

    for (const index of indexes) {
      let cells = [...this.cells];
      cells[index] = this.playerTwo.key;
      if (this.checkWin(cells, this.playerTwo.key).length) return index;
    }

    for (const index of indexes) {
      let cells = [...this.cells];
      cells[index] = this.playerOne.key;
      if (this.checkWin(cells, this.playerOne.key).length) return index;
    }

    if (this.cells[4] === null) return 4;

    if (this.cells[1] === this.playerOne.key && this.cells[6] === this.playerOne.key && this.cells[0] === null) return 0;
    if (this.cells[1] === this.playerOne.key && this.cells[8] === this.playerOne.key && this.cells[2] === null) return 2;
    if (this.cells[7] === this.playerOne.key && this.cells[0] === this.playerOne.key && this.cells[6] === null) return 6;
    if (this.cells[7] === this.playerOne.key && this.cells[2] === this.playerOne.key && this.cells[8] === null) return 8;
    if (this.cells[3] === this.playerOne.key && this.cells[8] === this.playerOne.key && this.cells[6] === null) return 6;
    if (this.cells[3] === this.playerOne.key && this.cells[2] === this.playerOne.key && this.cells[0] === null) return 0;

    if (this.cells[1] === this.playerOne.key && this.cells[3] === this.playerOne.key && this.cells[0] === null) return 0;
    if (this.cells[1] === this.playerOne.key && this.cells[5] === this.playerOne.key && this.cells[2] === null) return 2;
    if (this.cells[3] === this.playerOne.key && this.cells[7] === this.playerOne.key && this.cells[6] === null) return 6;
    if (this.cells[5] === this.playerOne.key && this.cells[7] === this.playerOne.key && this.cells[8] === null) return 8;

    if (this.cells[0] === this.playerOne.key && this.cells[8] === this.playerOne.key || this.cells[2] === this.playerOne.key && this.cells[6] === this.playerOne.key) {
      let oddIndexes = indexes.filter(value => {return value % 2 === 1;});
      if (oddIndexes.length > 0) return oddIndexes.rand();
    } else {
      let evenIndexes = indexes.filter(value => {return value % 2 === 0;});
      if (evenIndexes.length > 0) return evenIndexes.rand();
    }

    return indexes.rand();
  }

  retry() {
    this.cells = TicTacToe.getNewCells();
    this.currentPlayer = this.playerOne;
    this.moves = 0;
  }}

/** End TicTacToe */

/** Player */
class Player {
  constructor(key, gamertag, symbol, score) {
    this._key = key;
    this._gamertag = gamertag;
    this._symbol = symbol;
    this._score = score;
  }

  set key(key) {
    this._key = key;
  }

  set gamertag(gamertag) {
    this._gamertag = gamertag;
  }

  set symbol(symbol) {
    this._symbol = symbol;
  }

  set score(score) {
    this._score = score;
  }

  get key() {
    return this._key;
  }

  get gamertag() {
    return this._gamertag;
  }

  get symbol() {
    return this._symbol;
  }

  get score() {
    return this._score;
  }}
;

Player.symbols = [
"fa-times",
"fa-circle-o",
"fa-rocket",
"fa-space-shuttle",
"fa-android",
"fa-apple",
"fa-bug",
"fa-code"];

/** End Player */

// Challenge:  https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game
// User Story: I can play a game of Tic Tac Toe with the computer.
// User Story: My game will reset as soon as it's over so I can play again.
// User Story: I can choose whether I want to play as X or O.
// Bonus User Story: As a user, I can never actually win against the computer - at best i can tie.
const
AI_PLAYER_KEY = "AI",
HI_PLAYER_KEY = "HI",
AI_PLAYER_GAMERTAG = "Artificial Intelligence",
HI_PLAYER_GAMERTAG = "Human Intelligence";

let
$playerGamertag = $(".js-player__gamertag"),
$retry = $(".js-action--retry"),
$reset = $(".js-action--reset"),
$play = $(".js-action--play"),
$cellsContainer = $(".js-cells"),
$cellsElems = $(".js-cell"),
$message = $(".js-message"),
$score = $(".js-score"),
$blackboard = $(".js-blackboard"),
$thinker = $(".js-thinker"),
$panelLeft = $(".js-panel--left"),
$panelLeftGamertag = $(".js-panel--left__gamertag"),
$panelLeftSymbol = $(".js-panel--left__symbol"),
$panelRight = $(".js-panel--right"),
$panelRightGamertag = $(".js-panel--right__gamertag"),
$panelRightSymbol = $(".js-panel--right__symbol"),
$symbols = $(".js-symbol"),
$menu = $(".js-menu"),
tictactoe = null;

const setPlayerSymbol = (symbol, relatedSymbol) => {
  if (!tictactoe.playing) {
    tictactoe.playerOne.symbol = Player.symbols[symbol];
    tictactoe.playerTwo.symbol = Player.symbols[relatedSymbol];
  }
};

const setPlayerGamertag = gamertag => {
  if (!tictactoe.playing) {
    if (gamertag === '') {
      tictactoe.playerOne.gamertag = HI_PLAYER_GAMERTAG;
    } else {
      tictactoe.playerOne.gamertag = gamertag;
    }
  }
};

const play = _ => {
  if (!tictactoe.playing) {
    tictactoe.currentPlayer = tictactoe.playerOne;
    tictactoe.playing = true;

    initPanels();
    showMenu(false);
    setPanel();
  }
};

const showMenu = (show = true) => {
  show ? $menu.addClass("active") : $menu.removeClass("active");
};

const showBlackboard = (show = true) => {
  show ? $blackboard.addClass("active") : $blackboard.removeClass("active");
};

const showThinker = (show = true) => {
  show ? $thinker.addClass("think") : $thinker.removeClass("think");
};

const initPanels = _ => {
  $panelLeftSymbol.html("<i class='fa " + tictactoe.playerOne.symbol + " fa-2x fa-fw'></i>");
  $panelLeftGamertag.text(tictactoe.playerOne.gamertag);
  $panelRightSymbol.html("<i class='fa " + tictactoe.playerTwo.symbol + " fa-2x fa-fw'></i>");
  $panelRightGamertag.text(tictactoe.playerTwo.gamertag);
};

const activateCells = cells => {
  for (cell of cells) $cellsElems.get(cell).classList.add('active');
};

const setMessage = message => {
  $message.text(message);
};

const setScore = _ => {
  $score.text(tictactoe.playerOne.score + " - " + tictactoe.playerTwo.score);
};

const setMove = cell => {
  const target = $cellsElems.get(cell);

  if (target.childElementCount === 0) {
    const { currentPlayer } = tictactoe,
    { cell } = target.dataset;

    let symbolElem = document.createElement("i");
    symbolElem.classList.add("fa", currentPlayer.symbol);
    target.appendChild(symbolElem);

    tictactoe.setCell(cell, currentPlayer.key);
    tictactoe.moves += 1;

    if (tictactoe.moves >= 5) {
      const won = tictactoe.checkWin();

      if (won.length) {
        currentPlayer.score += 1;
        activateCells(won);
        setMessage(currentPlayer.gamertag + " won!");
        setScore();
        showBlackboard();
        return;
      }
    }

    if (tictactoe.moves === 9) {
      setMessage("It's a draw!");
      setScore();
      showBlackboard();
      return;
    }

    tictactoe.togglePlayer();
    setPanel();

    if (tictactoe.currentPlayer.key === AI_PLAYER_KEY) {
      showThinker();

      setTimeout(function () {
        setMove(tictactoe.makeMove());
        showThinker(false);
      }, 1000);
    }
  }
};

const deactivateCells = _ => {
  document.querySelectorAll('.js-cell.active').forEach(cell => cell.classList.remove('active'));
};

const retry = _ => {
  deactivateCells();
  clearCells();
  tictactoe.retry();
  showBlackboard(false);
  setPanel();
};

const reset = _ => {
  deactivateCells();
  clearCells();
  setPanel(false);
  showBlackboard(false);
  showMenu();
  initGame();
};

const initGame = _ => {
  tictactoe = new TicTacToe();
  tictactoe.playerOne = new Player(HI_PLAYER_KEY, HI_PLAYER_GAMERTAG, Player.symbols[0], 0);
  tictactoe.playerTwo = new Player(AI_PLAYER_KEY, AI_PLAYER_GAMERTAG, Player.symbols[1], 0);
};

const setPanel = (set = true) => {
  $panelLeft.removeClass("active");
  $panelRight.removeClass("active");

  if (set) {
    tictactoe.currentPlayer.key === HI_PLAYER_KEY ?
    $panelLeft.addClass("active") :
    $panelRight.addClass("active");
  }
};

const clearCells = _ => {
  let indexes = tictactoe.getFullCells();

  while (indexes.length > 0) {
    const length = indexes.length,
    index = Math.floor(Math.random() * length),
    cell = $cellsElems.get(indexes[index]),
    $symbol = $(cell).find("i"),
    duration = 175 * index;
    indexes.splice(index, 1);
    $symbol.fadeOut(duration, function () {$symbol.remove();});
  }
};

$(document).ready(_ => {
  initGame();
  $symbols.on("click", e => setPlayerSymbol(e.currentTarget.dataset.symbol, e.currentTarget.dataset.relatedSymbol));
  $playerGamertag.on("change", e => setPlayerGamertag(e.currentTarget.value));
  $play.on("click", e => play());
  $cellsElems.on("click", e => setMove(e.currentTarget.dataset.cell));
  $retry.on("click", e => retry());
  $reset.on("click", e => reset());
  showMenu();
});