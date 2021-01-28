const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let tags = document.getElementsByClassName("tag");
let  hpCharacters = [];



searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters =  hpCharacters .filter( (character) => {
        return (
            character.company.toLowerCase().includes(searchString) ||
            character.position.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});




let theRole, theLevel, theLanguage = [];
let mainObj = {};





const loadCharacters = async () => {
    try{
        const res = await fetch("./data.json");
        hpCharacters = await res.json();
        displayCharacters( hpCharacters);
        
    }catch(err){
        console.log(err);
    }
    
};

const addTags = (data) => {
   for(let i=0; i<data.length; i++){
    theRole = data[i].role
    theLevel = data[i].level
    theLanguage = data[i].languages
   //console.log(theRole)
   }
   
}

function myFunction(){
    tag = document.createElement("button")
  // document.tags.innerHTML = "have anice day"
  
    for(let i=0; i< tags.length; i++){

       // tags[i].style.background = "red";




        if(tags[i] === theRole){
          tag.innerHTML = theRole;
         searchBar.appendChild(tag);
         
        }else if(tags[i] === theLevel){
         tag.innerHTML = theLevel;
         searchBar.appendChild(tag);
        }
    }
}

myFunction()


const displayCharacters = (characters) => {
    const htmlString = characters.map( (character) => {
        return `
            <li class="character">
           <img src="${character.logo}" />
                <ul class="job">
                    <h5>${character.company}</h5>
                    <p> ${character.position}</p>
                    <span >${character.postedAt} ${character.contract} ${character.location}</span>
                </ul>
                <div class="tags">
                      <p class="tag" onclick="myFunction()" data-role="frontend ">${character.role}</p>
                      <p class="tag" onclick="myFunction()" data-role="frontend ">${character.level}</p>
                      <p class="tag" onclick="myFunction()" data-role="frontend ">${character.languages}</p>
                </div>
          </li>`;
      ;
             
    }).join('')
    charactersList.innerHTML = htmlString;
  
     addTags(characters)
};

 loadCharacters();
 












 //let tags = document.getElementsByClassName("tag");







/*tags.addEventListener('click', (tag) => {
        const searchTags = tag.target.value
       let div = document.createElement("p");
       if(searchTags === "${tag.role}"){
           div.innerHTML = "${tag.role.value}"
           searchBar.appendChild(div);
           console.log(div);

       }else if(searchTags === character.level){
           div.innerHTML = "${characters.level.value}"
           searchBar.appendChild(tag);
           console.log(searchBar);
       }
 })
*/
   
 
 