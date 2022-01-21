window.onload = function () {

  var alfabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'o','ó', 'p', 'q', 'r', 's','ś',
        't', 'u', 'v', 'w', 'x', 'y', 'z','ź','ż'];

  var categories;         // Tablica kategorii
  var chosenCategory;     // Wybrana kategoria
  var getHint ;          // Podpowiedzi
  var word ;              // Wybrane słowo
  var guess ;             // Tworzymy guess
  var geusses = [ ];      // Przechowywamy geusses
  var lives ;             // Życia
  var counter ;           // Licznik prawidłowych odpowiedzi
  var space;              // spacja jako '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // Tworzymy alfabet z ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alfabet.length; i++) {
      letters.id = 'alfabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alfabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Wybór kategorii
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Wybrana kategoria to Europejskie Kluby Sportowe";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Wybrana kategoria to Filmy i Seriale";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Wybrana kategoria to Gry";
    }
  }

  // Tworzymy guess z ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Życia
   comments = function () {
    showLives.innerHTML = "Zostało ci jeszcze " + lives + " żyć";
    if (lives < 1) {
      showLives.innerHTML = "Koniec gry";
      setTimeout("location.reload(true);", 2000);
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "Wygrałeś !";
      }
    }
  }

      // Animate i początek rysowania
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

   // Wisielec
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // Funkcja OnClick
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Funkcja play z hasłami
  play = function () {
    categories = [
        ["wisła-kraków", "liverpool", "bayern-monachium", "barcelona", "ajax", "arsenal", "paris-sg", "as-roma", "ssc-napoli","tottenham-hotspur","juventus-fc", "chelsea-fc" ],
        ["alien", "zielona-mila", "gladiator", "centurion", "ostatni-samuraj","breaking-bad","arcane","better-call-saul", "the-office", "chłopaki-z-baraków", "deadpool", "south-park"],
        ["fifa", "frostpunk", "league-of-legends", "mount-and-blade", "saints-row", "valorant", "heavy-rain", "cyberpunk", "god-of-war", "mass-effect", "alan-wake", "days-gone" ]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Podpowiedź

    hint.onclick = function() {

      hints = [
        ["Polski klub którego barwy są czerwono-biało-niebieskie", "You'll never walk alone", "Robercik i do przodu", "Kamp Noł", "Holenderski klub z Greckim Herosem", "Działo w herbie", "Francuzi których nikt nie lubi", "Associazione Sportiva", "Legendą tego klubu jest Diego Maradona", "Angielski klub z kogutem stojącym na piłce", "Najbardziej utytułowany włoski klub", "Najpopularniejsi zawodnicy tego klubu to Frank Lampard i Eden Hazard"],
        ["Kultowy Science-Fiction horror", "Kultowy dramat, oparty na powieści Stephena Kinga", "Dramat historyczny odgrywający się w starożytnym Rzymie", "Film oparty na legendzie o IX Legionie", "Tom Cruise ale w Japonii","Złamać się źle","League of Legends ale serial", "Serial o prawniku z Albuquerque", "Mockument o firmie papierniczej DunderMifflin", "Grupa przyjaciół mieszkająca na osiedlu barakowozów", "Ekranizacja komiksu Marvela", "Serial o czterech znajomych z małego miasteczka w Kolorado"],
        ["ta sama gra co roku, ale z innym numerkiem", "Polska gra strategiczna", "Najpopularniejsza MOBA", "RPG od TaleWorlds", "GTA tylko bardziej absurdalne", "CS tylko że od Riot games", "Psychologiczny thiller o zabójcy origami", "Gra osadzona w dystopijnej przyszłości", "Kiedyś w Grecji, teraz w Skandynawii", "Seria fantastycznonaukowych RPG", "Thiller o pisarzu uwiężionym w własnej twórczości", "Postapo ale z motorami" ]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Podpowiedź: - " +  hints [catagoryIndex][hintIndex];
  };

   // Resecik

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}
