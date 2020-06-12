
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {


q:'Hitler w stosunku do Polski pod koniec lat 30. wysunął dwa żądania. Józef Beck wyraźnie mu odmówił. Kiedy i gdzie Beck złożył oświadczenie odrzucenia żądań niemieckich?',



 options:[



'Na Kremlu 10 V 1931',



'W Sejmie Polskim 5 V 1939',


'W Reichstagu 9 XII 1939',


'Wszystkie odpowiedzi są błędne'],


answer:2},
 {


q:'Czego dotyczył mały traktat Wersalski?',



 options:[



'zobowiązania dotyczące wschodnich granic Polskich',



'zobowiązania wobec Niemiec, dotyczące reparacji wojennych wobec Polski',


'zobowiązania wobec Polski, które miały gwarantować poszanowanie i obronę praw mniejszości narodowych',


'zobowiązania wobec Polski, dotyczące reparacji wojennych wobec Niemiec'],


answer:3},

 {


q:'Orlęta Lwowskie to?',



 options:[



'młode ofiary napaści ZURL na Polski Lwów',



'ruch antyrosyjski',


'zobowiązania wobec Polski, które miały gwarantować poszanowanie i obronę praw mniejszości narodowych',


'okreslenie polskiej młodzieży Lwowskiej, która została powłana do obrony Lwowa przed zaborcami z ZURL'],


answer:4},







{

 q: "Piłsudski dokonał zamachu majowego w 1926 roku. Zmarł w rocznicę tego wydarzenia, czyli dnia",
      options: [
        "12 V 1933",
        "12 V 1935",
"15 IV 1935",
        "12 V 1936" ],

      answer: "2" },
      {
        q: "Powstanie Wielkopolskie wybuchło?",
        options: [
         "26 XII 1918",
          "27 XII 1918",
          "21 XI 1948",
          "25 XII 1948" ],

        answer: "2" },
        {
          q: "Deklaracja Paderewskiego z sierpnia 1937 roku mówiąca o strajkach chłopskich i zagrożeniu ze strony ZSRR i III Rzeszy zbliżyła do siebie dwie partie: NPR i chadecję. Utworzyły one razem 10 X 1937?",
          options: [
           "Stronnictwo Pracy",
           "Stronnictwo Pokoju",
"Stronnictwo Republiki",
            "Stronnictwo Partii" ],

          answer: "1" },
          {
            q: "Wincenty Witos premierem był?",
            options: [
               "4 razy",
              "2 razy",
               "3 razy",
"nie był premierem" ],

            answer: "3" },
            {
              q: " Kiedy zmarł Roman Dmowski?",
              options: [
                 "3 I 1939",
                 "2 I 1939",
                  "2 I 1949",
                 "4 I 1939" ],

              answer: "2" },
              {
                q: "Pierwszym premierem odrodzonej Rzeczpospolitej był",
                options: [
                  "Ignacy Jan Paderewski",
                   "Jędrzej Moraczewski",
                   "Mateusz Morawiecki",
                   "Kazimierz Bartel" ],

                answer: "2" },
                {
                  q: "Sanacja",
                  options: [
                    "kolejka górska",
                    "określenie obozu Dmowskiego",
                   "określenie obozu Stalina",
                  "określenie obozu Piłsudskiego" ],

                  answer: "4" },
                  {
                    q: "Co zakładała Koncepcja Międzymorza w II RP",
                    options: [
                       "utworzenie federacji państw środkowych, aby uchronić się przed wpływami USA.",
                       "utworzenie federacji państw środkowych, aby razem zaatakować ZSRR.",
                      "utworzenie federacji państw środkowych, aby każde posiadało dostęp do trzech mórz",
"utworzenie federacji państw środkowych, aby żadne z nich nie posiadało dostępu do trzech mórz" ],

                    answer: "3" },
                    {
                      q: "Dekret Józefa Piłsudskiego o powołanie urzędu Naczelnika Państwa:?",
                      options: [
                         "11 maja 1925",
                         "12 maja 1926",
                         "12 sierpnia 1939",
                         "22 listopada 1918"],

                      answer: "4" },
                      {
                        q: "Kiedy odbyła się Bitwa Warszawska?",
                        options: [
                           "16 sierpnia 1920",
                           "2 sierpnia 1926 ",
"1 sierpnia 1925 ",
                           "23 kwietnia 1935 " ],

                        answer: "1" },

                        {
                          q: "Po ilu latach zaborów Polska odzyskała niepodległość? 11 listopad 1918",
                          options: [
                             "100",
                             "123",
"125",
                             "118" ],




                      answer: "2" },

                      {
                        q: "Określ czy zdanie jest prawdziwe.II Rzeczpospolita istniała od odzyskania niepodległości przez Polskę i przekazania przez Radę Regencyjną pełni władzy cywilnej i wojskowej w Królestwie Polskim Józefowi Piłsudskiemu 14 listopada 1918 r.",
                        options: [
                           "Nie ma odpowiedzi na to pytanie",
                           "nie wiem",
                           "fałsz",
                           "prawda" ],
                    answer: "4" },













                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Dziękuje za udział w moim Quizie"
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){

                         var id=ele.id.split('');

                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="prawda";
                         	ele.innerHTML="Poprawna odpowiedź";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="Błąd";
                         	ele.innerHTML="Błąd";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                         ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"/"+this.questions.length;
                }

           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         }
