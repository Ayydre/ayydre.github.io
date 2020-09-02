<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script
    src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"></script>
    <title>League of Legends Champions</title>
  </head>
  <body>
    <div class="bg-img">
    </div>
    <div class="bg-color">
    </div>

    <div class="container">
      <div class="header">
        <div class="logo-img">
        <img src="img/logo.png" alt="Logo" class="logo">
        </div>
        <h3>SELECT YOUR</h3>
        <h1>CHAMPION</h1>
      </div>

      <nav>
        <form>
          <input type="text" placeholder="CHAMPION NAME" id="search-bar">
          <input type="submit" value="SEARCH" id="submit">
        </form>
      </nav>

      <div class="champion-cards">

      </div>

    </div>
  <script src="app.js" charset="utf-8"></script>
  </body>
</html>
