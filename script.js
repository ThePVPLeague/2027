// ==============================
// PLAYER DATA
// ==============================

const rounds = {

    round1:[
        ["Galactus7", false, "Bluuxy", false],
        ["Player3", false, "Player4", false],
        ["Player5", false, "Player6", false],
        ["Player7", false, "_7xr", false],
        ["SxyroX_", false, "Player10", false],
        ["Player11", false, "Player12", false],
        ["Player13", false, "Player14", false],
        ["Warsky", false, "Player16", false]
    ],

    quarter:[
        ["Undecided", false, "Undecided", false],
        ["Undecided", false, "Undecided", false],
        ["Undecided", false, "Undecided", false],
        ["Undecided", false, "Undecided", false]
    ],

    semi:[
        ["Undecided", false, "Undecided", false],
        ["Undecided", false, "Undecided", false]
    ],

    final:[
        ["Undecided", false, "Undecided", false]
    ]

};



// ==============================
// CREATE PLAYER
// ==============================

function createPlayer(name, winner){

    let player = document.createElement("div");

    player.className = "player";


    if(winner){

        player.classList.add("winner");

    }



    let info = document.createElement("div");

    info.className = "player-info";



    let img = document.createElement("img");

    img.className="skin";

    img.src =
    `https://mc-heads.net/avatar/${name}/64`;



    let text=document.createElement("span");

    text.className="name";

    text.textContent=name;



    info.appendChild(img);

    info.appendChild(text);



    let tick=document.createElement("span");

    tick.className="tick";

    tick.textContent = winner ? "✓" : "";



    player.appendChild(info);

    player.appendChild(tick);



    return player;

}




// ==============================
// CREATE MATCH BOX
// ==============================


function createMatch(players){


    let match=document.createElement("div");

    match.className="match";



    match.appendChild(
        createPlayer(players[0], players[1])
    );


    match.appendChild(
        createPlayer(players[2], players[3])
    );



    return match;

}





// ==============================
// LOAD ROUND
// ==============================


function loadRound(id,data){


    const container =
    document.getElementById(id);



    data.forEach(match=>{


        let box =
        createMatch(match);



        container.appendChild(box);


    });


}





// ==============================
// START
// ==============================


loadRound(
"round1",
rounds.round1
);


loadRound(
"quarter",
rounds.quarter
);


loadRound(
"semi",
rounds.semi
);


loadRound(
"final",
rounds.final
);
