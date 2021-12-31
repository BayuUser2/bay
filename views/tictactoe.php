<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>VApp | TicTacToe</title>
  <meta property="og:image" content="https://i.ibb.co/zSzMTxg/769-7694152-logo-huruf-v-keren-removebg-preview.png">
  <link rel="shortcut icon" type="image/x-icon" href="https://i.ibb.co/zSzMTxg/769-7694152-logo-huruf-v-keren-removebg-preview.png">
  <link rel="shortcut icon" type="image/png" href="https://i.ibb.co/zSzMTxg/769-7694152-logo-huruf-v-keren-removebg-preview.png">
  <meta name="description" content="Playing TicTacToe with Artificial Intelligence!">
  <meta name="viewport" content="width=device-width, initial-scale=1"><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css'>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<nav class="navbar navbar-light fixed-top">
    <h4 class="navbar-text">
      <a role="button">
        <img height="35" src="https://i.ibb.co/zSzMTxg/769-7694152-logo-huruf-v-keren-removebg-preview.png" alt=" Myvinz App" draggable="false">
        <span>VApp | TicTacToe</span>
      </a>
    </h4>
  </nav>
  <div class="game">
    <div class="tictactoe">
			<div class="tictactoe__cells js-cells">
        <div class="cell js-cell" data-cell="0"></div>
        <div class="cell js-cell" data-cell="1"></div>
        <div class="cell js-cell" data-cell="2"></div>
        <div class="cell js-cell" data-cell="3"></div>
        <div class="cell js-cell" data-cell="4"></div>
        <div class="cell js-cell" data-cell="5"></div>
        <div class="cell js-cell" data-cell="6"></div>
        <div class="cell js-cell" data-cell="7"></div>
        <div class="cell js-cell" data-cell="8"></div>
      </div>
      <div class="tictactoe__thinker js-thinker"></div>
      <div class="tictactoe__menu js-menu">
        <div class="form-group">
          <label for="player-gamertag" class="small">Gamertag</label>
          <div class="input-group input-group-sm">
            <input name="player-gamertag" aria-describedby="player-gamertag" type="text" class="form-control js-player__gamertag" placeholder="Gamertag" value="Human Intelligence">
            <span class="input-group-addon">
              <i class="fa fa-edit"></i>
            </span>
          </div>
        </div>
        <div class="form-group">
          <label for="options" class="small">Symbol</label>
          <div class="btn-group btn-group-sm" data-toggle="buttons">
            <button class="btn btn-custom js-symbol active" data-symbol="0" data-related-symbol="1">
              <input type="radio" name="options">
              <i class="fa fa-times"></i>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="1" data-related-symbol="0">
              <input type="radio" name="options">
              <span class="fa fa-circle-o"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="2" data-related-symbol="3">
              <input type="radio" name="options">
              <span class="fa fa-rocket"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="3" data-related-symbol="2">
              <input type="radio" name="options">
              <span class="fa fa-space-shuttle"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="4" data-related-symbol="5">
              <input type="radio" name="options">
              <span class="fa fa-android"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="5" data-related-symbol="4">
              <input type="radio" name="options">
              <span class="fa fa-apple"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="6" data-related-symbol="7">
              <input type="radio" name="options">
              <span class="fa fa-bug"></span>
            </button>
            <button class="btn btn-custom js-symbol" data-symbol="7" data-related-symbol="6">
              <input type="radio" name="options">
              <span class="fa fa-code"></span>
            </button>
          </div>
        </div>
        <button type="button" class="btn btn-sm btn-custom js-action--play">Play</button>
      </div>
      <div class="tictactoe__blackboard js-blackboard">
        <div class="blackboard__message js-message"></div>
        <div class="blackboard__score js-score"></div>
        <div class="blackboard__actions">
          <button class="btn btn-sm btn-custom mr-4 js-action--retry">Ulangi
          <button class="btn btn-sm btn-custom js-action--reset">Reset</button>
          <br>
         <br> <p>VApp | TicTacToe</p>
        </div>
      </div>
      <div class="panel panel--left js-panel--left">
        <div class="panel__symbol js-panel--left__symbol"></div>
        <div class="panel__gamertag js-panel--left__gamertag"></div>
      </div>
      <div class="panel panel--right js-panel--right">
        <div class="panel__symbol js-panel--right__symbol"></div>
        <div class="panel__gamertag js-panel--right__gamertag"></div>
      </div>
    </div>
  </div>
  <footer class="fixed-bottom text-center">
    <small>Copyright &copy; 2021 Vinz Development</small>
  </footer>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js'></script><script  src="./script.js"></script>

</body>
</html>