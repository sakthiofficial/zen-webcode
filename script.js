// bootstrap starts here
var cont = document.createElement("div");
cont.className = "container"
// first head row BS
var rowHead = document.createElement("div")
rowHead.className = "row"
cont.append(rowHead)

// header of the page
var head = document.createElement("div");

head.classList.add("col-12", "head")
rowHead.append(head)
// h1 tag
var h1 = document.createElement("h1");
h1.innerText = "pokemon details";
head.append(h1)
// h1 span element
var span = document.createElement("span");
span.innerText = "with-api"
h1.append(span)
// adding the container in body
document.body.append(cont)

// input field to show pokemon details;
// This second row of BS;
var rowInput = document.createElement("div")
rowInput.classList.add("row", "inputArea")
rowInput.setAttribute("id","inputId")
cont.append(rowInput)
// input column BS;
// input div class = input-field;
var colInput = document.createElement("div")
colInput.classList.add("col-sm-12","col-md-12","col-lg-10", "input-field");
rowInput.append(colInput);
var inputField = document.createElement("input");
inputField.setAttribute("placeholder", "Enter Pokemon Name")
inputField.setAttribute("id", "inputField")

colInput.append(inputField)
// input field button
var colBtn = document.createElement("div");
colBtn.classList.add("col-2", "btn", "text-left");
rowInput.append(colBtn);

// button creation
var btn = document.createElement("button");
btn.innerText = "find"
btn.className = "bg-primary"
btn.setAttribute("class", "find")
btn.setAttribute("onclick", "find()")
colBtn.append(btn)
// break
var br = document.createElement("br")
colBtn.append(br)

var refresh = document.createElement("button");
refresh.innerText = "refresh♻️"
refresh.className = "bg-primary"
refresh.setAttribute("class", "refresh")
refresh.setAttribute("onclick", "Refresh()")
colBtn.append(refresh)


// table  creation 
var tablerow = document.createElement("div")
tablerow.classList.add("row")
cont.append(tablerow)
// table open button creation 
var tablecol = document.createElement("div")
tablecol.classList.add("col-12", "tablebtn")
tablerow.append(tablecol)

var tablebtn = document.createElement("button");
tablebtn.innerText = "Show all the details"
tablebtn.setAttribute("id", "tableBtn")
tablebtn.className="tbtn1"
tablebtn.setAttribute("value", "1")
tablebtn.setAttribute("onclick", `tablefoo(${tablebtn.value})`)

tablecol.append(tablebtn)

// pokamon details



// function button dom
function bttn(num, val) {
    var ele = document.createElement("button")
    ele.innerText = num
    ele.setAttribute("value", val)
    ele.setAttribute("onclick", `tablefoo(${ele.value})`)
    return ele;
}
// table funtion to create the table
// table row creation 
var tablerow = document.createElement("div")
tablerow.classList.add("row")


// table column 
var tablecol = document.createElement("div")
tablecol.classList.add("col-12", "table-div")
tablerow.append(tablecol)
// table creation
var mainTable = document.createElement("table")
mainTable.setAttribute("class", "table")


// table t-head
var thead = document.createElement("thead");
thead.className="t-head"
mainTable.append(thead)

cont.append(tablerow)
// table t-body
var tbody = document.createElement("tbody");
tbody.className = "t-body";

mainTable.append(tbody)

// pagination row creation 
var pagirow = document.createElement("div")
pagirow.classList.add("row")

// pagination col creation 
var pagicol = document.createElement("div")
pagicol.classList.add("col-12")
pagirow.append(pagicol)
// pagination creation




var findrow = document.createElement("div")
findrow.className = "row"
// full details button

async function tablefoo(a) {
    tablecol.append(mainTable);
   inputField.value=""
    thead.innerHTML=""
    tbody.innerHTML = ""
    pagicol.innerHTML = ""
    p.innerText=""
    findcol.innerHTML = ""
    // pagination adding
    pagicol.className=""
    pagicol.classList.add("col-12","pagi-div")
    // table head content
    var trow = document.createElement("tr")
    var th1 = document.createElement("th")
    th1.innerText = "pokemon"
    trow.append(th1)
    var th2 = document.createElement("th")
    th2.innerText = "ability"
    trow.append(th2)
    var th3 = document.createElement("th")
    th3.innerText = "move"
    trow.append(th3)
    var th4 = document.createElement("th")
    th4.innerText = "weight"
    trow.append(th4)
    thead.append(trow)
    tablebtn.className="tbtn1"

    try {

        var res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        var sum = await res.json();
        console.log(sum)
        var pokemon = sum.results[1].name;
        //for pokemon wight and ability and moves
          var assets = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        var prop = await assets.json();
        console.log(prop)
        var ability = prop.abilities[0].ability.name
        var moves = prop.moves[0].move.name
        var wight = prop.weight
        console.log(`name : ${pokemon}; ability:${ability}; moves: ${moves}; wight: ${wight};`)


        let value = a + 5;

        console.log(value)

        for (var i = a; i < value; i++) {
            var pokemon = sum.results[i].name
            var assets = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            var prop = await assets.json();

            var ability = prop.abilities[0].ability.name
            var moves = prop.moves[0].move.name
            var wight = prop.weight
            tbody.innerHTML += `<td>${pokemon}</td>
        <td>${ability}</td>
        <td>${moves}</td>
        <td>${wight}</td>
        `
            console.log("hello", i)
           
        }
        if(i>6){
            var pre = bttn("<--",i-10)
            pagicol.prepend(pre)
           }
        cont.append(pagirow)
        var nxt = bttn("-->",i)
        var btn2 = bttn(2, 6)
        var btn3 = bttn(3, 11)
        var btn4 = bttn(4, 16)
        var btn5 = bttn(5, 21)
        var btn6 = bttn(6, 26)
        var btn7 = bttn(7, 31)
        var btn8 = bttn(8, 36)
        var btn9 = bttn(9, 41)
        var btn10 = bttn(10, 46)
        var btn11 = bttn(11,51)

        pagicol.append(btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10,btn11,nxt)

    }
    catch (error) {
        console.log("error")
    }
}
var p = document.createElement("p")

       
// for search option 
var findrow = document.createElement("div")
findrow.className = "row"
var findcol = document.createElement("div")
findcol.classList.add("col-12", "find-area")
findrow.append(findcol)
// if invalid name 
// var invalid = do
async function find() {
    
      var res =""
    thead.innerHTML = ""
    tbody.innerHTML = ""
    pagicol.innerHTML=""
    pagicol.className=""
    p.innerText=""
   
    
    try {

        var res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        var sum = await res.json();
        console.log(sum)
        var fin = inputField.value.toString()
        var pokemon = "charmeleon";
        console.log("name",pokemon)
        //for pokemon wight and ability and moves
          var assets = await fetch(`https://pokeapi.co/api/v2/pokemon/${fin}`)
        var prop = await assets.json();
        console.log(prop)
        var ability = prop.abilities[0].ability.name
        var moves = prop.moves[0].move.name
        var wight = prop.weight
        console.log(`name : ${fin}; ability:${ability}; moves: ${moves}; wight: ${wight};`)
        
        tablebtn.className="tbtn2"

        cont.append(findrow);
        findcol.innerHTML = `<ul class ="finding">
<li class = li>pokemon name   : <p>${fin}</p></li>
<li class = li>pokemon move   : <p>${moves}</p></li>
<li class = li>pokemon weight : <p>${wight}</p></li>
<li class = li>pokemon ability: <p>${ability}</p></li>
</ul>`
inputField.value=""
    } catch (error) {
        p.innerText="please enter valid name"
        colInput.append(p)
        console.log("heelll")
    }
}

function Refresh(){
    tablebtn.className="tbtn1"
    inputField.value=""

    thead.innerHTML = ""
    tbody.innerHTML = ""
    pagicol.innerHTML=""
    findcol.innerHTML = ""
    pagicol.className=""
  
   p.innerText=""
    
}