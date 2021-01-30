const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
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


const loadCharacters = async () => {
    try{
        const res = await fetch("./data.json");
        hpCharacters = await res.json();
        displayCharacters( hpCharacters);
        
    }catch(err){
        console.log(err);
    }
    
};



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
                      <p class="tag" >${character.role}</p>
                      <p class="tag" >${character.level}</p>
                      <p class="tag"  >${character.languages}</p>
                </div>
          </li>`;
      
    
    
    }).join('')
    charactersList.innerHTML = htmlString;


};


 loadCharacters();


   

 