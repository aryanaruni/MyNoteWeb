shownotes();          // function to show notes after the page reloading
// if user input a note, store it to local storage
let addbtn = document.getElementById("addbtn");                  // grab add notes button
addbtn.addEventListener('click', function () {                     // add a event click on add note button
    let addtitle = document.getElementById("addtxttitle");            //to grab title      
    let addtxt = document.getElementById("addtxt");                   //to grab note
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else (
        notesObj = JSON.parse(notes)                    //notesObj is an array of objects  JSON.parse is used to convert object in array
    )
    let varobj = {                              //create a object <myobj> to storing key i.e.title & notes and value that will input  by user 
        title: addtitle.value,                    //update the key with its value
        notes: addtxt.value                    //update the key with its value
    }
    notesObj.push(varobj);                              //notesObj is an array of objects
    localStorage.setItem("notes", JSON.stringify(notesObj));      //JSON.stringify is used to convert array into string
    addtxttitle.value = "";                          //upadte the title box as a blank after user hits aad note button
    addtxt.value = "";                          //upadte the note box as a blank after user hits aad note button
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/   
    // let addtxttitle = document.getElementById("addtxttitle");                
    // let title = localStorage.getItem("title");
    // if (title == null) {
    //     titleobj = [];
    // }
    // else (
    //     titleobj = JSON.parse(title)                             
    // )
    // titleobj.push(addtxttitle.value);
    // localStorage.setItem("title", JSON.stringify(titleobj));
    // addtxttitle.value = "";
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/
    shownotes();                        // function to show notes
});
// function to show notes
function shownotes() {                                //calling shownotes function
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else (
        notesObj = JSON.parse(notes)                      /// converting notesObj into array
    )
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/
    // let html = "";
    // titleobj.forEach(function (element) {
    //     document.getElementById("txttitle").value;
    // });
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/

    /*the div tag is a container that holds notes in screen (a collection of html tags and bootstrap classes) CARD BOX-NOTE BOX  
    */
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div class="card crd mt-2 mb-2 cardBox">
                <div class="card-body">                    
                    <h5 id="txttitle" class="card-title">${element.title}</h5>
                    <p class="card-text">${element.notes}</p>                   
                    <button class="btn btn-danger my-2 px-1 py-0" id="${index}" onclick="deletenote(this.id)">Delete</i></button>
                </div>
            </div> 
        </div>      
               `;
    });

    let noteselement = document.getElementById('notes');  //GRAB note 
    if (notesObj.length != 0) {
        noteselement.innerHTML = html;
    }
    else (
        // noteselement.style.color="green",
        noteselement.innerHTML = `<b>You have not created any notes.<br>Create One</b>`
    )
}
// function to delete notes
function deletenote(index) {
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/
    // let title = localStorage.getItem("title");
    // if (title == null) {
    //     titleobj = [];
    // }
    // else (
    //     titleobj = JSON.parse(title)           
    // )
    // titleobj.splice(index, 1);
    // localStorage.setItem("title", JSON.stringify(titleobj));
    //****************WRONG APPROCH for ADD TITLE IN NOTES***************/
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else (
        notesObj = JSON.parse(notes)
    )
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
};
// search 
let searchtxt = document.getElementById('searchtxt');                                // grap search box
searchtxt.addEventListener('input', function () {                                //add inpult event on it

    let inputvalue = searchtxt.value.toLowerCase();                                      // lowercase is used to conver the inputtext into lower case (if user inputs in Upper case) that helps in search the notes
    let notecard = document.getElementsByClassName('crd');                            // grab crd class element
    Array.from(notecard).forEach(function (element) {                                      // makeing an array from note card 
        let cardtxt = element.getElementsByTagName("p")[0];
        cardtxt = cardtxt.innerText.toLowerCase();
        if (cardtxt.includes(inputvalue)) {
            element.style.display = "block";                                         // block is used to show the content
        }
        else {
            element.style.display = "none";          // none is used to not show content
        }
    });
});
