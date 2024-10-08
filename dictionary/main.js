const textBox = document.querySelector(".textBox");
const btn = document.querySelector(".btn");
const details = document.querySelector(".definition-details");

const noun_div = document.createElement("div");
noun_div.className = "definision-display-noun";
const verb_div = document.createElement("div");
verb_div.className = "definision-display-verb";


async function fetchData() {

    const input = textBox.value.toLowerCase();

    try {
        
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        
        const title = data[0].word;
        const phonetic = data[0].phonetic;
        const noun_partOfSpeech = data[0].meanings[0].partOfSpeech;
        const verb_partOfSpeech = data[0].meanings[1].partOfSpeech;
        const noun_definitions = data[0].meanings[0].definitions;
        const verb_definitions = data[0].meanings[1].definitions;

        details.innerHTML =  `<h2>${title}</h2><h3 class="phonetic">Phonetic: ${phonetic}</h3>`;

        noun_div.innerHTML = `<h4>Part of Speech: ${noun_partOfSpeech}</h4>`;
        verb_div.innerHTML = `<h4>Part of Speech: ${verb_partOfSpeech}</h4>`;

        noun_div.appendChild(displayWordDefinition(noun_definitions));
        verb_div.appendChild(displayWordDefinition(verb_definitions));

        details.appendChild(noun_div);
        details.appendChild(verb_div);

        console.log(data);
        
        
    } catch(error) {
        console.log(error);
    }
}

function displayWordDefinition(definitions) {

    const definitions_div = document.createElement("div");
    
    for (let i = 0; i < definitions.length; i++) {
        const p = document.createElement("p");
        p.innerHTML = `<span>Definition:</span> ${definitions[i].definition}`
        definitions_div.appendChild(p);
    }
    return definitions_div;
}