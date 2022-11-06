
let main = document.createElement("div")
main.classList.add("main")
document.body.append(main)
// this desgin for the empty sapce
let imgrow = document.createElement("div")
imgrow.classList.add("row","empty")
let imgdiv = document.createElement("div")
imgdiv.classList.add("emptydiv","col-sm-12","offset-lg-3","col-lg-6")
imgrow.append(imgdiv)
let div = document.createElement("img")
div.className="col-12"
div.setAttribute("src","./vector search .jpg")
div.setAttribute("alt","search image")
imgdiv.append(div)
document.body.append(imgrow)

// bootstrap starts here

var cont = document.createElement("div");
cont.className = "container"
// first head row BS
let rowHead = document.createElement("div")
rowHead.className = "row"
cont.append(rowHead)

// header of the page
let head = document.createElement("div");

head.classList.add("col-sm-12","col-md-12", "head")
rowHead.append(head)
// h1 tag
let h1 = document.createElement("h1");
h1.innerText = "pokemon details";
head.append(h1)
// h1 span element
let span = document.createElement("span");
span.innerText = "with-api"
h1.append(span)
// adding the container in body
main.append(cont)

// input field to show pokemon details;
// This second row of BS;
let rowInput = document.createElement("div")
rowInput.classList.add("row", "inputArea")
rowInput.setAttribute("id","inputId")
cont.append(rowInput)
// input column BS;
// input div class = input-field;
let colInput = document.createElement("div")
colInput.classList.add("col-sm-12","col-md-8", "input-field");

rowInput.append(colInput);
let inputField = document.createElement("input");
inputField.setAttribute("placeholder", "Enter Pokemon Name")
inputField.setAttribute("id", "inputField")

colInput.append(inputField)
// input field button

let colBtn = document.createElement("div");
colBtn.classList.add("col-sm-12" ,"col-md-4", "btn", "text-left");
rowInput.append(colBtn);

// button creation
let btn = document.createElement("button");
btn.innerText = "find"
btn.className = "bg-primary"
btn.setAttribute("class", "find")
btn.setAttribute("onclick", "find()")
colBtn.append(btn)
// break
let br = document.createElement("br")
colBtn.append(br)

let refresh = document.createElement("button");
refresh.innerText = "refresh♻️"
refresh.className = "bg-primary"
refresh.setAttribute("class", "refresh")
refresh.setAttribute("onclick", "Refresh()")
colBtn.append(refresh)


// table  creation 
var tablerow = document.createElement("div")
tablerow.classList.add("row3")
cont.append(tablerow)
// table open button creation 
var  tablecol = document.createElement("div")
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
tablerow.classList.add("row4")


// table column 
var tablecol = document.createElement("div")
tablecol.classList.add("col-12", "table-div")
tablerow.append(tablecol)
// table creation
var mainTable = document.createElement("table")
mainTable.setAttribute("class", "table")


// table t-head
let thead = document.createElement("thead");
thead.className="t-head"
mainTable.append(thead)

cont.append(tablerow)
// table t-body
let tbody = document.createElement("tbody");
tbody.className = "t-body";

mainTable.append(tbody)

// pagination row creation 
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
      
        var pokemon = sum.results[1].name;
        //for pokemon wight and ability and moves
          var assets = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        var prop = await assets.json();
       
        var ability = prop.abilities[0].ability.name
        var moves = prop.moves[0].move.name
        var wight = prop.weight
        imgdiv.style.display="none"


        let value = a + 5;

      

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
    
           
        }
        if(i>6){
            var pre = bttn("←",i-10)
            pagicol.prepend(pre)
           }
        cont.append(pagirow)
        var nxt = bttn("→",i)
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
findrow.className = "row5"
let findcol = document.createElement("div")
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
        let sum = await res.json();
        let fin = inputField.value.toString()

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
imgdiv.style.display="none"
inputField.value=""
    } catch (error) {
        p.innerText="please enter valid name"
        colInput.append(p)
    }
}

function Refresh(){
    imgdiv.style.display="block"
    tablebtn.className="tbtn1"
    inputField.value=""

    thead.innerHTML = ""
    tbody.innerHTML = ""
    pagicol.innerHTML=""
    findcol.innerHTML = ""
    pagicol.className=""
  
   p.innerText=""
    
}
