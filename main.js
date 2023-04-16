
function setData(){
    let tList = [
        {
            "title":"New Song",
            "description":"It's about a song that I have listen recently",
            "Date":"12-04-2023",
            "Content":"The song is from RRR natu natu"
        },
        {
            "title":"New Movie",
            "description":"It's about a movie that I have seen recently",
            "Date":"10-04-2023",
            "Content":"The movie is from Marvel"            
        },
        {
            "title":"New Bike",
            "description":"It's about a bike that I have brought recently",
            "Date":"09-04-2023",
            "Content":"The bike is from a company named honda."            
        }
    ]
    let stList = JSON.stringify(tList)
    localStorage.setItem("tList",stList)    
}
function loadTasks(){
    let tList = JSON.parse(localStorage.getItem("tList") || "[]") 

    let a = document.getElementsByClassName("item2")
    for(let i=0; i<tList.length; i++){
        //console.log(tList[i])
        console.log(a)
        //Array.from(a)
        console.log(a, a[0])
        let wrapper1 = document.createElement('div');
        wrapper1.className = "task1";
        wrapper1.id = i
        wrapper1.innerHTML = `<h2>${tList[i].title}</h2>
        <h3>${tList[i].Date}</h3>
        <p>${tList[i].Content.substring(0,20)}...</p>
        <span class="icon">
        <i class="fas fa-edit edit1"
            ></i>
            <i class="fas fa-trash-alt edit1" onclick = "reply_click(event)"  id=${i}></i>
        </span>`
        a[0].appendChild(wrapper1)
    }
}
function addListeners(){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    // console.log("This is btn", btn)
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }


    var submitted = document.getElementById("submit")

    submitted.onclick = function(){

        //Submitting the Data from Modal to HTML Page
        let tList = JSON.parse(localStorage.getItem("tList") || "[]")
        console.log(tList)

        let newObj = {
            "title":document.getElementById("title").value,
            "Date": document.getElementById("Date").value,
            "Content":document.getElementById("Con").value
        }
        console.log(tList, newObj)
        tList.push(newObj)

        tList = JSON.stringify(tList)
        localStorage.setItem("tList", tList)
        let a = document.getElementsByClassName("item2")
        a[0].innerHTML = `
        <h1>Journal</h1>

        <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
    
              <br>
              <h1><label for="Title">Title</label></h1>
              <textarea id="title" name="title" rows="4" cols="30"></textarea>
              <br>
              <input type="date" id="Date">
              <br>

              <h1><label for="Con">Content</label></h1>
              <textarea id="Con" name="Con" rows="15" cols="50"></textarea>
              <br>
              
              <button type="button" id = "submit" >Add Task</button>

            </div>
        </div>

        <div class="new ">
                <div style="width: 25%;">
                    <h3>
                        Create New Task 
                    </h3>
                </div>
                <div style="width: 10%; ">
                    <span class="icon">
                        <i class="fas fa-edit edit1" style="margin-top: 35%;" id="myBtn">   </i>
                    </span>
                </div>
                
            </div>

        `

        // a[0].innerHTML = null
        loadTasks()
        addListeners()
        modal.style.display = "none";

    }
}
function myFun(){
    mainBody =  `<div class="container">
        <div class="item1"></div>
        <div class="item2">
            <h1>Journal</h1>        

        <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
    
              <br>
              <h1><label for="Title">Title</label></h1>
              <textarea id="title" name="title" rows="4" cols="30"></textarea>
              <br>
              <input type="date" id="Date">
              <br>

              <h1><label for="Con">Content</label></h1>
              <textarea id="Con" name="Con" rows="15" cols="50"></textarea>
              <br>
              
              <button type="button" id = "submit" >Add Task</button>

            </div>
        </div>

            <div class="new ">
                <div style="width: 25%;">
                    <h3>
                        Create New Task 
                    </h3>
                </div>
                <div style="width: 10%; ">
                    <span class="icon">
                        <i class="fas fa-edit edit1" style="margin-top: 35%;"
                        id = "myBtn"    ></i>
                    </span>
                </div>
                
            </div>
            
           
        </div>
        <div class="item3"></div>
    </div>`
    document.body.innerHTML += mainBody
    
    //Read the task list and render it in HTML
    // setData()
    loadTasks()
    addListeners()
    
}


function reply_click(e) {
            let tList = JSON.parse(localStorage.getItem("tList")) 
            let id = e.target.id
            // delete tList[id]
            console.log(tList)
            console.log(id)
            tList.splice(id, 1)
            console.log(tList)


            let stList = JSON.stringify(tList)
            localStorage.setItem("tList",stList)

            let a = document.getElementsByClassName("item2")
        a[0].innerHTML = `
        <h1>Journal</h1>

        <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
    
              <br>
              <h1><label for="Title">Title</label></h1>
              <textarea id="title" name="title" rows="4" cols="30"></textarea>
              <br>
              <input type="date" id="Date">
              <br>

              <h1><label for="Con">Content</label></h1>
              <textarea id="Con" name="Con" rows="15" cols="50"></textarea>
              <br>
              
              <button type="button" id = "submit" >Add Task</button>

            </div>
        </div>

        <div class="new ">
                <div style="width: 25%;">
                    <h3>
                        Create New Task 
                    </h3>
                </div>
                <div style="width: 10%; ">
                    <span class="icon">
                        <i class="fas fa-edit edit1" style="margin-top: 35%;" id="myBtn">   </i>
                    </span>
                </div>
                
            </div>

        `

        // a[0].innerHTML = null
        loadTasks()
        addListeners()

               
}
window.scrollTo(0, document.body.scrollHeight);

