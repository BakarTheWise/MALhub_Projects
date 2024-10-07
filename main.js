// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error("Could not featch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.log(error));


// async function fetchData() {

//     try {

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if (!response.ok) {
//             throw new Error("could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");
//         console.log(data);
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     } catch(error) {
//         console.log(error);
//     }
// }

const user_gid = document.querySelector(".user_grid");

async function fetchData() {
    try {

        const response = await fetch(`https://fakestoreapi.com/users`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const h3 = document.createElement("h3");
            h3.textContent = `User ID: ${data[i].id}`;
            const img = document.createElement("img");
            img.src = "/user-3296.png"
            

            const div1 = document.createElement("div");
            div1.className = "iccon-title";

            const div2 = document.createElement("div");
            div2.className = "user-info";

            div2.innerHTML = `<div><span>Username:</span><span>${data[i].username}</span></div>
                              <div><span>First Name:</span><span>${data[i].name.firstname}</span></div>
                              <div><span>Last Name:</span><span>${data[i].name.lastname}</span></div>
                              <div><span>Address:</span><span>${data[i].address.city}</span></div>`

            div1.appendChild(h3)
            div1.appendChild(img)
            div1.appendChild(div2)
            user_gid.appendChild(div1)
        }
    } catch(error) {
        console.log(error);
    }
}

fetchData();
