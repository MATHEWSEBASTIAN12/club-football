```javascript
const clubs = [

{
name:"Real Madrid",
league:"La Liga",
country:"Spain",
stadium:"Santiago Bernabéu",
founded:1902,
trophies:100,
ucl:15,
image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
desc:"One of the most successful clubs in football history.",
legends:["Cristiano Ronaldo","Zinedine Zidane","Raúl"],
honours:"European dominance and an extraordinary Champions League legacy."
},

{
name:"FC Barcelona",
league:"La Liga",
country:"Spain",
stadium:"Spotify Camp Nou",
founded:1899,
trophies:99,
ucl:5,
image:"https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
desc:"A club famous for possession football and its legendary academy.",
legends:["Lionel Messi","Xavi","Andrés Iniesta"],
honours:"The golden generation under Pep Guardiola."
},

{
name:"Liverpool",
league:"Premier League",
country:"England",
stadium:"Anfield",
founded:1892,
trophies:70,
ucl:6,
image:"https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80",
desc:"One of England's most historic and passionate clubs.",
legends:["Kenny Dalglish","Steven Gerrard","Ian Rush"],
honours:"European nights and an incredible Anfield atmosphere."
},

{
name:"Manchester United",
league:"Premier League",
country:"England",
stadium:"Old Trafford",
founded:1878,
trophies:68,
ucl:3,
image:"https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=900&q=80",
desc:"One of the most famous football clubs on the planet.",
legends:["Sir Bobby Charlton","George Best","Wayne Rooney"],
honours:"Dominant Premier League eras under Sir Alex Ferguson."
},

{
name:"Manchester City",
league:"Premier League",
country:"England",
stadium:"Etihad Stadium",
founded:1880,
trophies:35,
ucl:1,
image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
desc:"A modern powerhouse built around possession and tactical football.",
legends:["Sergio Agüero","David Silva","Vincent Kompany"],
honours:"The modern era of English dominance."
},

{
name:"Bayern Munich",
league:"Bundesliga",
country:"Germany",
stadium:"Allianz Arena",
founded:1900,
trophies:83,
ucl:6,
image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
desc:"Germany's most decorated football club.",
legends:["Franz Beckenbauer","Gerd Müller","Thomas Müller"],
honours:"Domestic dominance and European success."
},

{
name:"AC Milan",
league:"Serie A",
country:"Italy",
stadium:"San Siro",
founded:1899,
trophies:49,
ucl:7,
image:"https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
desc:"Italian giants with one of Europe's greatest histories.",
legends:["Paolo Maldini","Franco Baresi","Kaká"],
honours:"Seven European Cups and legendary defensive eras."
},

{
name:"Juventus",
league:"Serie A",
country:"Italy",
stadium:"Allianz Stadium",
founded:1897,
trophies:70,
ucl:2,
image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
desc:"One of Italy's most successful clubs.",
legends:["Alessandro Del Piero","Gianluigi Buffon","Michel Platini"],
honours:"Domestic dominance across multiple generations."
},

{
name:"Paris Saint-Germain",
league:"Ligue 1",
country:"France",
stadium:"Parc des Princes",
founded:1970,
trophies:50,
ucl:0,
image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
desc:"France's modern football powerhouse.",
legends:["Zlatan Ibrahimović","Ronaldinho","George Weah"],
honours:"A dominant force in modern French football."
},

{
name:"Ajax",
league:"Eredivisie",
country:"Netherlands",
stadium:"Johan Cruyff Arena",
founded:1900,
trophies:75,
ucl:4,
image:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
desc:"A club deeply connected with Total Football.",
legends:["Johan Cruyff","Marco van Basten","Dennis Bergkamp"],
honours:"Famous academy and Total Football philosophy."
},

{
name:"Inter Milan",
league:"Serie A",
country:"Italy",
stadium:"San Siro",
founded:1908,
trophies:46,
ucl:3,
image:"https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=80",
desc:"Historic Italian club with European pedigree.",
legends:["Javier Zanetti","Ronaldo","Lothar Matthäus"],
honours:"European success across different generations."
},

{
name:"Arsenal",
league:"Premier League",
country:"England",
stadium:"Emirates Stadium",
founded:1886,
trophies:48,
ucl:0,
image:"https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80",
desc:"Historic London club famous for elegant football.",
legends:["Thierry Henry","Dennis Bergkamp","Tony Adams"],
honours:"Invincibles era and historic domestic success."
},

{
name:"Borussia Dortmund",
league:"Bundesliga",
country:"Germany",
stadium:"Signal Iduna Park",
founded:1909,
trophies:23,
ucl:1,
image:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
desc:"Known for passionate fans and attacking football.",
legends:["Marco Reus","Matthias Sammer","Michael Zorc"],
honours:"European triumph and legendary yellow wall."
},

{
name:"Atlético Madrid",
league:"La Liga",
country:"Spain",
stadium:"Metropolitano",
founded:1903,
trophies:35,
ucl:0,
image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80",
desc:"A club renowned for defensive discipline and fighting spirit.",
legends:["Fernando Torres","Luis Aragonés","Diego Godín"],
honours:"Multiple La Liga triumphs and European finals."
},

{
name:"Benfica",
league:"Primeira Liga",
country:"Portugal",
stadium:"Estádio da Luz",
founded:1904,
trophies:80,
ucl:2,
image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80",
desc:"One of Portugal's historic football institutions.",
legends:["Eusébio","Rui Costa","Ángel Di María"],
honours:"Back-to-back European Cup victories."
},

{
name:"Chelsea",
league:"Premier League",
country:"England",
stadium:"Stamford Bridge",
founded:1905,
trophies:34,
ucl:2,
image:"https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=900&q=80",
desc:"London giants with major European success.",
legends:["Frank Lampard","Didier Drogba","John Terry"],
honours:"Two Champions League victories."
},

{
name:"Tottenham Hotspur",
league:"Premier League",
country:"England",
stadium:"Tottenham Hotspur Stadium",
founded:1882,
trophies:27,
ucl:0,
image:"https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80",
desc:"Historic North London club.",
legends:["Jimmy Greaves","Glenn Hoddle","Harry Kane"],
honours:"Historic domestic cup success."
},

{
name:"Napoli",
league:"Serie A",
country:"Italy",
stadium:"Diego Armando Maradona Stadium",
founded:1926,
trophies:13,
ucl:0,
image:"https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
desc:"The passionate club of Naples.",
legends:["Diego Maradona","Marek Hamšík","Dries Mertens"],
honours:"Maradona's legendary Napoli era."
},

{
name:"Porto",
league:"Primeira Liga",
country:"Portugal",
stadium:"Estádio do Dragão",
founded:1893,
trophies:72,
ucl:2,
image:"https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=80",
desc:"Portuguese giants with remarkable European history.",
legends:["Deco","Radamel Falcao","Vítor Baía"],
honours:"European Cup and Champions League triumphs."
},

{
name:"Flamengo",
league:"Brasileirão",
country:"Brazil",
stadium:"Maracanã",
founded:1895,
trophies:60,
ucl:0,
image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
desc:"One of Brazil's biggest football institutions.",
legends:["Zico","Júnior","Gabigol"],
honours:"Continental success and enormous fanbase."
},

{
name:"Palmeiras",
league:"Brasileirão",
country:"Brazil",
stadium:"Allianz Parque",
founded:1914,
trophies:55,
ucl:0,
image:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
desc:"Brazilian powerhouse with major continental success.",
legends:["Marcos","Ademir da Guia","Dudu"],
honours:"Multiple Copa Libertadores titles."
},

{
name:"Al Hilal",
league:"Saudi Pro League",
country:"Saudi Arabia",
stadium:"Kingdom Arena",
founded:1957,
trophies:70,
ucl:0,
image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
desc:"One of Asia's most successful clubs.",
legends:["Sami Al-Jaber","Salem Al-Dawsari","Mohamed Al-Deayea"],
honours:"Asian dominance."
},

{
name:"Mohun Bagan",
league:"Indian Super League",
country:"India",
stadium:"Salt Lake Stadium",
founded:1889,
trophies:50,
ucl:0,
image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
desc:"One of India's oldest and most historic football clubs.",
legends:["Chuni Goswami","Bhaichung Bhutia","Sailen Manna"],
honours:"A giant of Indian football history."
},

{
name:"Mumbai City",
league:"Indian Super League",
country:"India",
stadium:"Mumbai Football Arena",
founded:2014,
trophies:5,
ucl:0,
image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b0?auto=format&fit=crop&w=900&q=80",
desc:"A modern force in Indian football.",
legends:["Sunil Chhetri","Greg Stewart"],
honours:"ISL success."
}

];


const leagues = [

["Premier League","England","1888","20 clubs"],
["La Liga","Spain","1929","20 clubs"],
["Serie A","Italy","1898","20 clubs"],
["Bundesliga","Germany","1963","18 clubs"],
["Ligue 1","France","1932","18 clubs"],
["Eredivisie","Netherlands","1956","18 clubs"],
["Primeira Liga","Portugal","1934","18 clubs"],
["Brasileirão","Brazil","1959","20 clubs"],
["Saudi Pro League","Saudi Arabia","1976","18 clubs"],
["Indian Super League","India","2014","13 clubs"],
["UEFA Champions League","Europe","1955","36 teams"],
["UEFA Europa League","Europe","1971","36 teams"],
["Copa Libertadores","South America","1960","47 teams"],
["MLS","USA / Canada","1996","30 clubs"],
["Liga MX","Mexico","1943","18 clubs"],
["J1 League","Japan","1992","20 clubs"],
["K League 1","South Korea","1983","12 clubs"],
["A-League","Australia","2004","13 clubs"]
];


const players = [

["Erling Haaland","Manchester City",28,7,34,8.9],
["Kylian Mbappé","Real Madrid",26,8,33,8.8],
["Harry Kane","Bayern Munich",25,9,32,8.7],
["Mohamed Salah","Liverpool",24,12,35,8.8],
["Lautaro Martínez","Inter Milan",22,6,31,8.5],
["Vinícius Júnior","Real Madrid",20,11,32,8.7],
["Lamine Yamal","FC Barcelona",18,13,34,8.6],
["Bukayo Saka","Arsenal",17,10,30,8.4],
["Jamal Musiala","Bayern Munich",16,12,29,8.3],
["Rafael Leão","AC Milan",15,9,30,8.2],
["Cole Palmer","Chelsea",19,14,31,8.6],
["Rodrygo","Real Madrid",14,8,28,8.1]
];


const legends = [

{
name:"Lionel Messi",
era:"modern",
country:"Argentina",
position:"Forward",
image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
desc:"Eight-time Ballon d'Or winner and World Cup champion."
},

{
name:"Cristiano Ronaldo",
era:"modern",
country:"Portugal",
position:"Forward",
image:"https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
desc:"One of football's greatest goalscorers and most successful forwards."
},

{
name:"Pelé",
era:"historic",
country:"Brazil",
position:"Forward",
image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
desc:"Three-time World Cup champion and global football icon."
},

{
name:"Diego Maradona",
era:"classic",
country:"Argentina",
position:"Attacking Midfielder",
image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b0?auto=format&fit=crop&w=900&q=80",
desc:"One of football's greatest natural talents."
},

{
name:"Johan Cruyff",
era:"classic",
country:"Netherlands",
position:"Forward",
image:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
desc:"A revolutionary player and thinker who transformed football."
},

{
name:"Zinedine Zidane",
era:"classic",
country:"France",
position:"Midfielder",
image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
desc:"Elegant midfielder and World Cup winner."
},

{
name:"Ronaldinho",
era:"modern",
country:"Brazil",
position:"Attacking Midfielder",
image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
desc:"Football magician famous for creativity and joy."
},

{
name:"Paolo Maldini",
era:"classic",
country:"Italy",
position:"Defender",
image:"https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=80",
desc:"One of the greatest defenders and leaders in football history."
},

{
name:"Franz Beckenbauer",
era:"historic",
country:"Germany",
position:"Defender",
image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b0?auto=format&fit=crop&w=900&q=80",
desc:"The legendary libero who changed defensive football."
},

{
name:"Ronaldo Nazário",
era:"classic",
country:"Brazil",
position:"Forward",
image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
desc:"The phenomenon, one of the greatest strikers ever."
},

{
name:"Xavi",
era:"modern",
country:"Spain",
position:"Midfielder",
image:"https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
desc:"Master of passing, control and positional football."
},

{
name:"Andrés Iniesta",
era:"modern",
country:"Spain",
position:"Midfielder",
image:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
desc:"Elegant midfielder and World Cup final hero."
}

];


const matches = [

{
status:"live",
date:"TODAY",
league:"Champions League",
home:"Real Madrid",
away:"Manchester City",
score:"2 - 1"
},

{
status:"upcoming",
date:"TODAY • 20:00",
league:"Premier League",
home:"Liverpool",
away:"Arsenal",
score:"VS"
},

{
status:"upcoming",
date:"TOMORROW • 21:00",
league:"La Liga",
home:"FC Barcelona",
away:"Atlético Madrid",
score:"VS"
},

{
status:"finished",
date:"YESTERDAY",
league:"Serie A",
home:"AC Milan",
away:"Inter Milan",
score:"2 - 2"
},

{
status:"finished",
date:"SEP 13",
league:"Bundesliga",
home:"Bayern Munich",
away:"Dortmund",
score:"3 - 1"
},

{
status:"upcoming",
date:"SEP 16",
league:"Ligue 1",
home:"PSG",
away:"Marseille",
score:"VS"
},

{
status:"finished",
date:"SEP 12",
league:"Premier League",
home:"Chelsea",
away:"Tottenham",
score:"2 - 0"
},

{
status:"upcoming",
date:"SEP 18",
league:"Indian Super League",
home:"Mohun Bagan",
away:"Mumbai City",
score:"VS"
}

];


const trivia = [

"Real Madrid have won more European Cups/Champions Leagues than any other club.",
"Pelé is the only player to win three FIFA World Cups.",
"Lionel Messi won the 2022 World Cup with Argentina.",
"Old Trafford is one of the most famous stadiums in English football.",
"San Siro is shared by AC Milan and Inter Milan.",
"Johan Cruyff was one of the most influential figures in Total Football.",
"The Premier League was founded in 1992.",
"Brazil have won the FIFA World Cup five times.",
"Paolo Maldini spent his entire senior club career with AC Milan.",
"Anfield is famous around the world for its European nights.",
"Diego Maradona became a legendary figure at Napoli.",
"Manchester City won their first Champions League title in 2023."
];


let favourites = JSON.parse(localStorage.getItem("footballverse-favourites")) || [];


/* HOME */

document.getElementById("clubNumber").textContent = clubs.length + "+";


/* CLUB FILTERS */

const clubSearch = document.getElementById("clubSearch");
const leagueFilter = document.getElementById("clubLeagueFilter");
const countryFilter = document.getElementById("clubCountryFilter");
const clubSort = document.getElementById("clubSort");


function setupFilters() {

    const leagueNames = [...new Set(clubs.map(c => c.league))].sort();
    const countries = [...new Set(clubs.map(c => c.country))].sort();

    leagueNames.forEach(league => {

        const option = document.createElement("option");

        option.value = league;
        option.textContent = league;

        leagueFilter.appendChild(option);

    });


    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country;
        option.textContent = country;

        countryFilter.appendChild(option);

    });

}


function renderClubs() {

    let result = [...clubs];

    const search = clubSearch.value.toLowerCase();

    if(search) {
        result = result.filter(c =>
            c.name.toLowerCase().includes(search) ||
            c.country.toLowerCase().includes(search) ||
            c.league.toLowerCase().includes(search)
        );
    }

    if(leagueFilter.value !== "all") {
        result = result.filter(c => c.league === leagueFilter.value);
    }

    if(countryFilter.value !== "all") {
        result = result.filter(c => c.country === countryFilter.value);
    }

    if(clubSort.value === "name") {
        result.sort((a,b) => a.name.localeCompare(b.name));
    }

    if(clubSort.value === "trophies") {
        result.sort((a,b) => b.trophies - a.trophies);
    }

    if(clubSort.value === "founded") {
        result.sort((a,b) => a.founded - b.founded);
    }

    document.getElementById("clubCount").textContent =
        result.length + " clubs";

    document.getElementById("clubGrid").innerHTML =
        result.map((club,index) => `

        <article class="club-card">

            <button
                class="fav-heart"
                onclick="toggleFavourite('${club.name}')"
            >
                ${favourites.includes(club.name) ? "♥" : "♡"}
            </button>

            <div
                class="club-image"
                style="background-image:url('${club.image}')"
            ></div>

            <div class="club-info">

                <small>${club.country.toUpperCase()}</small>

                <h3>${club.name}</h3>

                <div class="club-meta">
                    <span>${club.league}</span>
                    <span>🏆 ${club.trophies}</span>
                </div>

                <button
                    class="primary-btn"
                    style="margin-top:12px;padding:9px 13px;font-size:11px"
                    onclick="openClub(${clubs.indexOf(club)})"
                >
                    View Club
                </button>

            </div>

        </article>

    `).join("");

}


[clubSearch,leagueFilter,countryFilter,clubSort].forEach(element => {

    element.addEventListener("input",renderClubs);
    element.addEventListener("change",renderClubs);

});


/* LEAGUES */

function renderLeagues() {

    document.getElementById("leagueGrid").innerHTML =

        leagues.map(league => `

        <div class="league-card">

            <small>${league[1]}</small>

            <h3>${league[0]}</h3>

            <p>
                Founded ${league[2]} • ${league[3]}
            </p>

        </div>

        `).join("");

}


/* MATCHES */

function renderMatches(filter="all") {

    let list = matches;

    if(filter !== "all") {
        list = matches.filter(m => m.status === filter);
    }

    document.getElementById("matchesList").innerHTML =

        list.map(m => `

        <div class="match-card">

            <span class="match-status">
                ${m.status.toUpperCase()}
            </span>

            <span class="match-team">${m.home}</span>

            <span class="match-score">${m.score}</span>

            <span class="match-team">${m.away}</span>

            <span class="match-date">${m.date}</span>

        </div>

        `).join("");

}


document.querySelectorAll(".match-filter").forEach(button => {

    button.addEventListener("click",() => {

        document.querySelectorAll(".match-filter")
            .forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        renderMatches(button.dataset.filter);

    });

});


/* PLAYERS */

function renderPlayers() {

    document.getElementById("playerTable").innerHTML =

        players.map((player,index) => `

        <tr>

            <td>${index + 1}</td>

            <td><strong>${player[0]}</strong></td>

            <td>${player[1]}</td>

            <td>${player[2]}</td>

            <td>${player[3]}</td>

            <td>${player[4]}</td>

            <td class="rating">${player[5]}</td>

        </tr>

        `).join("");

}


/* LEGENDS */

function renderLegends(era="all") {

    let list = legends;

    if(era !== "all") {
        list = legends.filter(l => l.era === era);
    }

    document.getElementById("legendGrid").innerHTML =

        list.map(legend => `

        <article
            class="legend-card"
            style="background-image:url('${legend.image}')"
        >

            <div class="legend-info">

                <span>
                    ${legend.country.toUpperCase()} • ${legend.position.toUpperCase()}
                </span>

                <h3>${legend.name}</h3>

                <p>${legend.desc}</p>

            </div>

        </article>

        `).join("");

}


document.querySelectorAll(".era-filter").forEach(button => {

    button.addEventListener("click",() => {

        document.querySelectorAll(".era-filter")
            .forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        renderLegends(button.dataset.era);

    });

});


/* CLUB MODAL */

function openClub(index) {

    const club = clubs[index];

    document.getElementById("modalContent").innerHTML = `

        <div
            class="modal-image"
            style="background-image:url('${club.image}')"
        ></div>

        <p class="eyebrow">${club.country.toUpperCase()}</p>

        <h2>${club.name}</h2>

        <p style="margin-top:10px;color:var(--muted)">
            ${club.desc}
        </p>

        <div class="modal-grid">

            <div class="modal-stat">
                <small>FOUNDED</small>
                <strong>${club.founded}</strong>
            </div>

            <div class="modal-stat">
                <small>STADIUM</small>
                <strong>${club.stadium}</strong>
            </div>

            <div class="modal-stat">
                <small>TROPHIES</small>
                <strong>${club.trophies}</strong>
            </div>

            <div class="modal-stat">
                <small>CHAMPIONS LEAGUES</small>
                <strong>${club.ucl}</strong>
            </div>

            <div class="modal-stat">
                <small>LEAGUE</small>
                <strong>${club.league}</strong>
            </div>

            <div class="modal-stat">
                <small>LEGENDS</small>
                <strong>${club.legends.length}</strong>
            </div>

        </div>

        <div style="margin-top:25px">

            <h3>Club Legends</h3>

            <p style="color:var(--muted);margin-top:5px">
                ${club.legends.join(" • ")}
            </p>

        </div>

        <div style="margin-top:20px">

            <h3>Legacy</h3>

            <p style="color:var(--muted);margin-top:5px">
                ${club.honours}
            </p>

        </div>

    `;

    document.getElementById("clubModal").classList.add("show");

}


function closeModal() {

    document.getElementById("clubModal")
        .classList.remove("show");

}


/* FAVOURITES */

function toggleFavourite(name) {

    if(favourites.includes(name)) {

        favourites = favourites.filter(x => x !== name);

        showToast(name + " removed from favourites");

    } else {

        favourites.push(name);

        showToast(name + " added to favourites");

    }

    localStorage.setItem(
        "footballverse-favourites",
        JSON.stringify(favourites)
    );

    updateFavouriteCount();

    renderClubs();

}


function updateFavouriteCount() {

    document.getElementById("favCount").textContent =
        favourites.length;

}


document.getElementById("favBtn").addEventListener("click",() => {

    if(favourites.length === 0) {

        showToast("No favourite clubs yet.");

        return;

    }

    showToast(
        "Favourites: " + favourites.join(", ")
    );

});


/* COMPARISON */

function setupComparison() {

    const a = document.getElementById("clubA");
    const b = document.getElementById("clubB");

    clubs.forEach((club,index) => {

        a.innerHTML +=
            `<option value="${index}">${club.name}</option>`;

        b.innerHTML +=
            `<option value="${index}">${club.name}</option>`;

    });

    a.value = 0;
    b.value = 1;

    updateComparison();

    a.addEventListener("change",updateComparison);
    b.addEventListener("change",updateComparison);

}


function updateComparison() {

    const a = clubs[document.getElementById("clubA").value];
    const b = clubs[document.getElementById("clubB").value];

    const total = a.trophies + b.trophies;

    const aWidth = Math.round((a.trophies / total) * 100);
    const bWidth = 100 - aWidth;

    document.getElementById("comparisonCard").innerHTML = `

        <div class="compare-header">

            <div>
                <img src="${a.image}">
                <h3>${a.name}</h3>
            </div>

            <strong style="font-size:25px">VS</strong>

            <div>
                <img src="${b.image}">
                <h3>${b.name}</h3>
            </div>

        </div>

        <div class="compare-stat">

            <div class="compare-stat-title">
                <span>${a.trophies}</span>
                <strong>Total Trophies</strong>
                <span>${b.trophies}</span>
            </div>

            <div class="bar">
                <span style="width:${aWidth}%"></span>
            </div>

        </div>

        <div class="compare-stat">

            <div class="compare-stat-title">
                <span>${a.ucl}</span>
                <strong>Champions League</strong>
                <span>${b.ucl}</span>
            </div>

            <div class="bar">
                <span style="width:${Math.min(a.ucl / Math.max(a.ucl,b.ucl || 1) * 100,100)}%"></span>
            </div>

        </div>

        <div class="compare-stat">

            <div class="compare-stat-title">
                <span>${a.founded}</span>
                <strong>Founded</strong>
                <span>${b.founded}</span>
            </div>

        </div>

        <div class="compare-stat">

            <div class="compare-stat-title">
                <span>${a.stadium}</span>
                <strong>Stadium</strong>
                <span>${b.stadium}</span>
            </div>

        </div>

    `;

}


/* SEARCH */

document.getElementById("searchBtn")
    .addEventListener("click",openSearch);


function openSearch() {

    document.getElementById("searchModal")
        .classList.add("show");

    document.getElementById("globalSearch").focus();

}


function closeSearch() {

    document.getElementById("searchModal")
        .classList.remove("show");

}


document.getElementById("globalSearch")
    .addEventListener("input",function() {

        const value = this.value.toLowerCase();

        if(!value) {

            document.getElementById("searchResults").innerHTML = "";

            return;

        }

        const clubResults = clubs
            .filter(c => c.name.toLowerCase().includes(value))
            .slice(0,6);

        const playerResults = players
            .filter(p => p[0].toLowerCase().includes(value))
            .slice(0,6);

        const legendResults = legends
            .filter(l => l.name.toLowerCase().includes(value))
            .slice(0,6);


        let html = "";

        clubResults.forEach(c => {

            html += `
                <div class="search-result"
                     onclick="openClub(${clubs.indexOf(c)});closeSearch()">

                    <strong>⚽ ${c.name}</strong>

                    <small style="display:block;color:var(--muted)">
                        Club • ${c.league}
                    </small>

                </div>
            `;

        });


        playerResults.forEach(p => {

            html += `
                <div class="search-result">

                    <strong>👤 ${p[0]}</strong>

                    <small style="display:block;color:var(--muted)">
                        Player • ${p[1]}
                    </small>

                </div>
            `;

        });


        legendResults.forEach(l => {

            html += `
                <div class="search-result">

                    <strong>👑 ${l.name}</strong>

                    <small style="display:block;color:var(--muted)">
                        Legend • ${l.country}
                    </small>

                </div>
            `;

        });


        if(!html) {

            html = `
                <div class="search-result">
                    No results found.
                </div>
            `;

        }

        document.getElementById("searchResults").innerHTML = html;

    });


/* THEME */

document.getElementById("themeBtn")
    .addEventListener("click",() => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "footballverse-theme",
            dark ? "dark" : "light"
        );

        document.getElementById("themeBtn").textContent =
            dark ? "☀️" : "🌙";

    });


if(localStorage.getItem("footballverse-theme") === "dark") {

    document.body.classList.add("dark");

    document.getElementById("themeBtn").textContent = "☀️";

}


/* TRIVIA */

function newTrivia() {

    const random =
        trivia[Math.floor(Math.random() * trivia.length)];

    document.getElementById("triviaText").textContent =
        random;

}


/* TOAST */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2500);

}


/* SCROLL */

function scrollToSection(id) {

    document.getElementById(id)
        .scrollIntoView({behavior:"smooth"});

}


/* KEYBOARD SHORTCUT */

document.addEventListener("keydown",event => {

    if(event.ctrlKey && event.key.toLowerCase() === "k") {

        event.preventDefault();

        openSearch();

    }

    if(event.key === "Escape") {

        closeModal();
        closeSearch();

    }

});


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

document.getElementById("clubModal")
    .addEventListener("click",function(event) {

        if(event.target === this) {
            closeModal();
        }

    });


document.getElementById("searchModal")
    .addEventListener("click",function(event) {

        if(event.target === this) {
            closeSearch();
        }

    });


/* INITIALIZE */

setupFilters();
renderClubs();
renderLeagues();
renderMatches();
renderPlayers();
renderLegends();
setupComparison();
updateFavouriteCount();
```
