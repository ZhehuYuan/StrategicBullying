function setup() {
    end=true;
    turn = 1;

    width = 970;
    containerHeight = 750;
    height = width * 3 / 4;
    canvas = createCanvas(width, Math.max(height, containerHeight * 3 / 4)); // ~4:3 aspect ratio
    canvas.parent('game-container');
    height = height - width / 6;

    button2 = createButton('Ally');
    button2.position(width-640, height-80);
    button2.parent('game-container');
    button2.attribute('class', 'btn btn-success')
    button2.mousePressed(Ally);

    button3 = createButton('Conquer');
    button3.position(width-370, height-80);
    button3.parent('game-container');
    button3.attribute('class', 'btn btn-success')
    button3.mousePressed(Conquer);

    sty = document.getElementById('game-container').style.display;
    document.getElementById('game-container').style.display='none';
    document.getElementById('SDP').style.display='none';
    document.getElementById('SDM').style.display='none';
    document.getElementById('sd-p').style.display='none';
    document.getElementById('sd-m').style.display='none';
}

function draw(){
    background(180);
    fill(255, 255, 255);
    strokeWeight(1);
    if (currentPlayer==p1){
        cardFace = rect(width-835, height-550, 420, 520);
    }else{
        cardFace = rect(width-555, height-550, 420, 520);
    }
    if (!end){
        drawChild();
        
        strokeWeight(1);
        line(90, 650, 890, 650);
        let xx = 800/(L-1);

        if(cards[currentPlayer.cardID].allay==dead){
            button2.hide();
            button3.hide();
        }else{
            button2.show();
            button3.show();
        }
        for(i=0; i<L; i++){
            stroke(0);
            if (currentPlayer.cardID == i){
                stroke("red");
            }
            if(cards[i].allay==null){
                strokeWeight(5);
                point(90+xx*i, 650);
            }else if (cards[i].allay.name=="Dead"){
                strokeWeight(1);
                line(87+xx*i, 646, 93+xx*i, 655);
                line(93+xx*i, 646, 87+xx*i, 655);
            }else if (cards[i].allay == p1){
                strokeWeight(1);
                fill(0);
                if (currentPlayer.cardID == i){
                    fill("red");
                }
                triangle(87+xx*i, 646, 93+xx*i, 646, 90+xx*i, 655);
            }else if (cards[i].allay == p2){
                strokeWeight(1);
                fill(0);
                if (currentPlayer.cardID == i){
                    fill("red");
                }
                triangle(87+xx*i, 655, 93+xx*i, 655, 90+xx*i, 646);
            }
            if (p1.cardID == i){
                strokeWeight(3);
                stroke("red");
                if (p1==currentPlayer){
                    line(90+xx*i, 590, 90+xx*i, 570);
                    line(90+xx*i, 590, 85+xx*i, 580);
                    line(90+xx*i, 590, 95+xx*i, 580);
                }
                stroke('yellow');
                strokeWeight(2);
                line(90+xx*i, 604, 90+xx*i, 595);
                line(90+xx*i, 604, 87+xx*i, 595);
                line(90+xx*i, 604, 93+xx*i, 595);
                stroke(0);
                strokeWeight(0);
                fill(255,221,202);
                ellipse(90+xx*i, 615, 24, 24);
                fill(0);
                ellipse(85+xx*i, 610, 5, 5);
                ellipse(95+xx*i, 610, 5, 5);
                arc(90+xx*i, 618, 10, 10, 0, PI);
                strokeWeight(2);
                line(90+xx*i, 642, 85+xx*i, 637);
                line(90+xx*i, 642, 95+xx*i, 637);
                line(90+xx*i, 642, 90+xx*i, 632);
                p1NameBar.style.left= 10+xx*i + "px";
            }
            if (p2.cardID == i){
                strokeWeight(3);
                stroke("red");
                if (currentPlayer == p2){
                    line(90+xx*i, 590, 90+xx*i, 570);
                    line(90+xx*i, 590, 85+xx*i, 580);
                    line(90+xx*i, 590, 95+xx*i, 580);
                }
                stroke('purple');
                strokeWeight(2);
                line(90+xx*i, 604, 90+xx*i, 595);
                line(90+xx*i, 604, 87+xx*i, 595);
                line(90+xx*i, 604, 93+xx*i, 595);
                stroke(0);
                strokeWeight(0);
                fill(255,221,202);
                ellipse(90+xx*i, 615, 24, 24);
                fill(0);
                ellipse(85+xx*i, 610, 5, 5);
                ellipse(95+xx*i, 610, 5, 5);
                arc(90+xx*i, 618, 10, 10, 0, PI);
                strokeWeight(2);
                line(90+xx*i, 642, 85+xx*i, 637);
                line(90+xx*i, 642, 95+xx*i, 637);
                line(90+xx*i, 642, 90+xx*i, 632);
                p2NameBar.style.left= 10+xx*i + "px";
                // strokeWeight(2);
                // line(90+xx*i, 658, 85+xx*i, 663);
                // line(90+xx*i, 658, 95+xx*i, 663);
                // line(90+xx*i, 658, 90+xx*i, 668);
            }
        }
    }
}

function drawChild(){
    var x;
    if (currentPlayer == p1){
        button2.position(width-780, height-80);
        button3.position(width-510, height-80);
        x = 0;
    }else{
        button2.position(width-500, height-80);
        button3.position(width-230, height-80);
        x = 280;
    }
    // face
    fill(255,221,202);
    strokeWeight(0);
    ellipse(x+350,140,160);
    
    // ear
    ellipse(x+275,150,30);
    ellipse(x+425,150,30);
    
    // Eyes
    fill(255); 
    ellipse(x+315,150,35,35);
    ellipse(x+385,150,35,35);
    if (cards[currentPlayer.cardID].allay==null || cards[currentPlayer.cardID].allay.name != "Dead"){
        fill(0);
        ellipse(x+315,150,20,20);
        ellipse(x+385,150,20,20);
    }else{
        fill(0);
        strokeWeight(5);
        line(x+325,160,x+305,140);
        line(x+305,160,x+325,140);
        line(x+395,160,x+375,140);
        line(x+375,160,x+395,140);
    }
    
    stroke(0);
    // eyebrow
    noFill();
    strokeWeight(2);
    arc(x+315,130,30,10,PI,0);
    arc(x+385,130,30,10,PI,0);
    
    // nose
    fill('purple');
    triangle(x+345,175,x+355,175,x+350,165);
    
    // mouse
    fill(210,50,25);
    strokeWeight(0);
    ellipse(x+350, 200, 20, 20);
    
    // hair
    strokeWeight(0);
    fill(0);
    arc(x+350, 120, 170, 140, PI, 2*PI, HALF_PI);
}

function normalRandom(E, sd) {
    E = E*1.0;
    let u = 0.0, v = 0.0, w = 0.0, c = 0.0;
    do {
        u = Math.random() * 2 - 1.0;
        v = Math.random() * 2 - 1.0;
        w = u * u + v * v;
    } while (w == 0.0 || w >= 1.0)
    c = Math.sqrt((-2 * Math.log(w)) / w);
    return Math.min(Math.max(E + (u * c) * sd, 1), 10*E);
}

class player{
    constructor(name, stepLength, startPoint){
        this.name = name;
        this.balance = 3*Em;
        this.totalPower = 0;
        this.cardID = startPoint;
    }
}

class Card{
    constructor(){
        this.balance = Math.round(normalRandom(Em, SDm));
        this.power = Math.round(normalRandom(Ep, SDp));
        this.allay = null;
    }
}

function Rule(){
    alert("\
    Every entity has power and Balance, while Balance initialized with 3*Expectation_Balance and 0 power.\n \
    \n \
    Two players Bob and Alice start at either end of a line segment, while the segment should be at least 5 units length and at most 150 units. Player 1 have red hair while player 2 have purple hair.\n \
    \n \
    In a move, each player can move right or left one place along the segment or can pay 1 unit to move two places along the segment. But none of them could move outside the segment or do nothing at each round.\n \
    \n \
    Use -> or D button to move 1 step left, and use <- or A button to move 1 step right. Holding shift while pressing the button to move 2 step instead.\
    You can use Down Arrow or s to conquer, and use Up Arrow or w to allay. \n \
    \n \
    Upon arriving, where there is a NPC F, player A can conquer F and take its wealth if power(A) > power(F) (and F will lose all his power)\
    or can ally with F by paying F the wealth that F has already in which case A increases its power by the power of F\
    (and F doesn't lose any power).\n \
    \n \
    If A is an ally of F, then A cannot conquer F. But B could conquer F.\n \
    \n \
    If F becomes an ally of B after being an ally of A, then A can either become the ally of F again or conquer F.\n \
    \n \
    Bob wins if Bob is next to Alice and either Bob and Alice have equal power but Bob has more wealth or Bob has more power.\n \
    \n \
    In the graph, a dot means an un-allied NPC, triangle point up means the NPC is allied with Player 2 while point down means the NPC is allied with Player 1, \
    and a \"x\" means the NPC has been conquered.\
    ");
}

// graph
var canvas;
var width;
var height;
var cardFace;
var pL;
var pR;
var sty;
var powerDisplay;
var moneyDisplay;
var meetDisplay;
var p1NameBar;
var p2NameBar;
var button2;
var button3;

// gameData
var turn;
var p1;
var p2;
var L;
var Ep;
var SDp;
var Em;
var SDm;
var end;
var tmp;
var cards;
var currentPlayer;
var nextPlayer;
var dead;

$(document).keyup(function(e){  
    if ( 65 == e.keyCode || 37 == e.keyCode){
        if(e.shiftKey){
            Left2();
        }
        else{
            Left();
        }
    }
    else if ( 68 == e.keyCode || 39 == e.keyCode){
        if(e.shiftKey){
            Right2();
        }
        else{
            Right();
        }
    }
    else if ( 87 == e.keyCode || 38 == e.keyCode){
        Ally()
    }
    else if ( 83 == e.keyCode || 40 == e.keyCode){
        Conquer()
    }
});

function startGame(){
    document.getElementById("Title").innerHTML = "Strategic Bullying";

    if(!powerDisplay){
        powerDisplay = document.createElement("label");
        powerDisplay.id = "powerDisplay";
        document.getElementById("game-container").appendChild(powerDisplay);
        powerDisplay.style.position="absolute";
        powerDisplay.style.top= height-280 + "px";
        powerDisplay.style.left= width-610 +"px";
        powerDisplay.style.width = "300px";
        powerDisplay.style.fontSize = "24px";
        powerDisplay.style.textAlign = "center";

        moneyDisplay = document.createElement("label");
        document.getElementById("game-container").appendChild(moneyDisplay);
        moneyDisplay.style.position="absolute";
        moneyDisplay.style.top= height-230 + "px";
        moneyDisplay.style.left= width-610 +"px";
        moneyDisplay.style.width = "300px";
        moneyDisplay.style.fontSize = "24px";
        moneyDisplay.style.textAlign = "center";
        
        meetDisplay = document.createElement("label");
        document.getElementById("game-container").appendChild(meetDisplay);
        meetDisplay.style.position="absolute";
        meetDisplay.style.top= height-180 + "px";
        meetDisplay.style.left= width-610 +"px";
        meetDisplay.style.width = "300px";
        meetDisplay.style.fontSize = "24px";
        meetDisplay.style.textAlign = "center";

        p1NameBar = document.createElement("label");
        document.getElementById("game-container").appendChild(p1NameBar);
        p1NameBar.style.position="absolute";
        p1NameBar.style.left= 10 + "px";
        p1NameBar.style.width = "190px";
        p1NameBar.style.top= 676 +"px";
        p1NameBar.style.textAlign = "center";
        p1NameBar.style.fontSize = "24px";
        p1NameBar.style.textAlign = "center";

        p2NameBar = document.createElement("label");
        document.getElementById("game-container").appendChild(p2NameBar);
        p2NameBar.style.position="absolute";
        p2NameBar.style.left= 810 + "px";
        p2NameBar.style.width = "190px";
        p2NameBar.style.top= 676 +"px";
        p2NameBar.style.textAlign = "center";
        p2NameBar.style.fontSize = "24px";
        p2NameBar.style.textAlign = "center";
    }
    L = Number(document.getElementById("L-Road").value);
    Ep = Number(document.getElementById("Ep").value);
    SDp = Ep/2;
    Em = Number(document.getElementById("Em").value);
    SDm = Em/2;
    p1 = new player(document.getElementById("p1-Name").value, 1, 0);
    p2 = new player(document.getElementById("p2-Name").value, 1, L-1);
    dead = new player("Dead", 0, 0);
    if (L<5 || L>150){
        document.getElementById("error-container").innerText = "Length should be at Least 5 and at most 150";
        document.getElementById('error-container').style.display = 'block';
        return;
    }else if (Ep<10){
        document.getElementById("error-container").innerText = "Expectation of Power is at least 10";
        document.getElementById('error-container').style.display = 'block';
        return;
    }else if (Em<10){
        document.getElementById("error-container").innerText = "Expectation of Money is at least 10";
        document.getElementById('error-container').style.display = 'block';
        return;
    }else if(p1.name.length > 12 || p2.name.length > 12 || p1.name.length < 1 || p2.name.length < 1){
        document.getElementById("error-container").innerText = "Name Should be at most 12 characters and at least 1 character";
        document.getElementById('error-container').style.display = 'block';
        return;
    }else if(p1.name == p2.name){
        document.getElementById("error-container").innerText = "Please use different name for different players";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
    // TODO: Other Error Detection
    document.getElementById('but').style.display='none';
    document.getElementById("p1").innerHTML=p1.name +"\'s Balance";
    document.getElementById("p1-Name").disabled = "true";
    document.getElementById("p2").innerHTML=p1.name + "\'s Power";
    document.getElementById("p2-Name").disabled='true';
    document.getElementById("L").innerHTML = p2.name + "\'s Balance"
    document.getElementById("L-Road").disabled = "true";
    document.getElementById("EP").innerHTML = p2.name + "\'s Power";
    document.getElementById("Ep").disabled = "true";
    document.getElementById("SDP").innerHTML="Your Card ID";
    document.getElementById("sd-p").disabled = "true";
    document.getElementById("EM").style.display='none';
    document.getElementById("Em").style.display='none';
    document.getElementById('SDM').style.display='none';
    document.getElementById('sd-m').style.display='none';
    document.getElementById('error-container').style.display='none';

    currentPlayer = p1;
    nextPlayer = p2;
    cards = new Array();
    for(i=0;i<L;i++){
        cards[i] = new Card();
    }
    end = false;
    
    putInfo();
    document.getElementById('game-container').style.display=sty;
}

function settlement(){
    end = true;
    document.getElementById('game-container').style.display='none';
    if(p1.totalPower > p2.totalPower || (p1.totalPower == p2.totalPower && p1.balance>p2.balance)){
        document.getElementById("Title").innerHTML = p1.name + " is the WINNER!!!";
    }else if(p1.totalPower < p2.totalPower || (p1.totalPower == p2.totalPower && p1.balance<p2.balance)){
        document.getElementById("Title").innerHTML = p2.name + " is the WINNER!!!";
    }else{
        document.getElementById("Title").innerHTML = "It's A TIE!!!";
    }
    document.getElementById('but').style.display='block';
    document.getElementById("p1").innerHTML="Player 1 Name";
    document.getElementById("p1-Name").removeAttribute('disabled');
    document.getElementById("p2").innerHTML="Player 2 Name";
    document.getElementById("p2-Name").removeAttribute('disabled');
    document.getElementById("L").innerHTML="Length of Road";
    document.getElementById("L-Road").removeAttribute('disabled');
    document.getElementById("EP").innerHTML="Expectation of Power";
    document.getElementById("EP").style.display='block';
    document.getElementById("Ep").style.display='block';
    document.getElementById("Ep").removeAttribute('disabled');
    // document.getElementById("SDP").innerHTML="Standard Deviation of Power";
    // document.getElementById("sd-p").removeAttribute('disabled');
    document.getElementById("EM").style.display='block';
    document.getElementById("Em").style.display='block';
    // document.getElementById('SDM').style.display='block';
    // document.getElementById('sd-m').style.display='block';
    document.getElementById("p2").style.display='block';
    document.getElementById("p2-Name").style.display='block';
    putInfo();
    document.getElementById('error-container').style.display='none';
}

function putInfo(){
    if(end){
        document.getElementById("p1-Name").value = "P1";
        document.getElementById("L-Road").value = 30;
        document.getElementById("Ep").value = 100;
        // document.getElementById("sd-p").value = 30;
        document.getElementById("Em").value = 100;
        // document.getElementById('sd-m').value = 30;
        document.getElementById("p2-Name").value = "P2";
        document.getElementById("info-header").innerHTML = "Game information";
        return;
    }

    let p = currentPlayer;
    document.getElementById("info-header").innerHTML="Player States";
    document.getElementById("p1-Name").value=p1.balance;
    document.getElementById("p2-Name").value=p1.totalPower;
    document.getElementById("L-Road").value=p2.balance;
    document.getElementById("Ep").value =p2.totalPower;
    p1NameBar.innerHTML = p1.name;
    p2NameBar.innerHTML = p2.name;

    if(currentPlayer==p1){
        moneyDisplay.style.left= width-750 +"px";
        powerDisplay.style.left= width-750 +"px";
        meetDisplay.style.left= width-750 +"px";
    }else{
        moneyDisplay.style.left= width-470 +"px";
        powerDisplay.style.left= width-470 +"px";
        meetDisplay.style.left= width-470 +"px";
    }

    if(cards[currentPlayer.cardID].allay==null || cards[currentPlayer.cardID].allay.name!="Dead"){
        powerDisplay.style.display = '';
        moneyDisplay.style.display = '';
        meetDisplay.style.display = '';
        powerDisplay.innerHTML = "Power: " + cards[currentPlayer.cardID].power;
        moneyDisplay.innerHTML = "Money: " + cards[currentPlayer.cardID].balance;
        if(cards[currentPlayer.cardID].allay==null){
            meetDisplay.innerHTML = "I have no ally yet";
        }else{
            meetDisplay.innerHTML = cards[currentPlayer.cardID].allay.name + " is my ally";
        }
        }else{
        powerDisplay.style.display = 'none';
        moneyDisplay.style.display = 'none';
        meetDisplay.style.display = 'none';
    }
}

function switchPlayer(){
    tmp = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = tmp;
    putInfo();
}

function Ally(){
    document.getElementById('error-container').style.display = 'none';
    if ((cards[currentPlayer.cardID].allay==null ||cards[currentPlayer.cardID].allay.name!="Dead") && cards[currentPlayer.cardID].allay!=currentPlayer && cards[currentPlayer.cardID].balance <= currentPlayer.balance){
        if(cards[currentPlayer.cardID].allay==nextPlayer){
            nextPlayer.totalPower -= cards[currentPlayer.cardID].balance;
        }
        cards[currentPlayer.cardID].allay = currentPlayer;
        currentPlayer.totalPower += cards[currentPlayer.cardID].power;
        currentPlayer.balance -= cards[currentPlayer.cardID].balance;
        cards[currentPlayer.cardID].balance += cards[currentPlayer.cardID].balance;
        switchPlayer();
    }else{
        document.getElementById("error-container").innerText = "You can't ally this person";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
}

function Conquer(){
    document.getElementById('error-container').style.display = 'none';
    if ((cards[currentPlayer.cardID].allay==null ||cards[currentPlayer.cardID].allay.name!="Dead") && cards[currentPlayer.cardID].allay!=currentPlayer && cards[currentPlayer.cardID].power < currentPlayer.totalPower){
        currentPlayer.balance += cards[currentPlayer.cardID].balance;
        if(cards[currentPlayer.cardID].allay==nextPlayer){
            nextPlayer.totalPower -= cards[currentPlayer.cardID].balance;
        }
        cards[currentPlayer.cardID].allay=dead;
        switchPlayer();
    }else{
        document.getElementById("error-container").innerText = "You can't conquer this person";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
}
function Left2(){
    if(currentPlayer.cardID<=1 || currentPlayer.balance<1){
        document.getElementById("error-container").innerText = "You are on left edge, can't move left";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
    currentPlayer.balance -= 1;
    document.getElementById('error-container').style.display = 'none';
    currentPlayer.cardID = currentPlayer.cardID-2;
    if(currentPlayer.cardID <= nextPlayer.cardID+1 && currentPlayer.cardID >= nextPlayer.cardID-1){
        settlement();
    }
    switchPlayer();
}
function Right2(){
    if(currentPlayer.cardID>=L-2 || currentPlayer.balance<1){
        document.getElementById("error-container").innerText = "You are on right edge, can't move right";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
    currentPlayer.balance -= 1;
    document.getElementById('error-container').style.display = 'none';
    currentPlayer.cardID = currentPlayer.cardID + 2;
    if(currentPlayer.cardID <= nextPlayer.cardID+1 && currentPlayer.cardID >= nextPlayer.cardID-1){
        settlement();
    }
    switchPlayer();
}
// TODO: Move 2 step
function Left(){
    if(currentPlayer.cardID==0){
        document.getElementById("error-container").innerText = "You are on left edge, can't move left";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
    document.getElementById('error-container').style.display = 'none';
    currentPlayer.cardID = currentPlayer.cardID-1;
    if(currentPlayer.cardID <= nextPlayer.cardID+1 && currentPlayer.cardID >= nextPlayer.cardID-1){
        settlement();
    }
    switchPlayer();
}

function Right(){
    if(currentPlayer.cardID==L-1){
        document.getElementById("error-container").innerText = "You are on right edge, can't move right";
        document.getElementById('error-container').style.display = 'block';
        return;
    }
    document.getElementById('error-container').style.display = 'none';
    currentPlayer.cardID = currentPlayer.cardID + 1;
    if(currentPlayer.cardID <= nextPlayer.cardID+1 && currentPlayer.cardID >= nextPlayer.cardID-1){
        settlement();
    }
    switchPlayer();
}