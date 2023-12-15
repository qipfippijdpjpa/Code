function searchPokemon() {
    var pokemonName = document.getElementById("searchInput").value.toLowerCase();
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("pokemonName").innerText = data.name;
            document.getElementById("pokemonType").innerText = data.types.map(type => type.type.name).join(", ");
            document.getElementById("pokemonHeight").innerText = data.height;
            document.getElementById("pokemonWeight").innerText = data.weight;
            document.getElementById("pokemonBio").innerText = data.species.url;

            var imageUrl = data.sprites.front_default;
            document.getElementById("pokemonImage").src = imageUrl;
        })
        .catch(error => {
            console.log("Error: " + error);
            document.getElementById("pokemonName").innerText = "Pokemon not found";
            document.getElementById("pokemonType").innerText = "N/A";
            document.getElementById("pokemonHeight").innerText = "N/A";
            document.getElementById("pokemonWeight").innerText = "N/A";
            document.getElementById("pokemonBio").innerText = "N/A";
            document.getElementById("pokemonImage").src = "N/A";
        });
    }

        function searchPokemon() {
            var pokemonName = document.getElementById("searchInput").value.toLowerCase();
            var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
        
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    var pokemonImage = data.sprites.front_default;
                    var pokemonType = data.types.map(type => type.type.name).join(", ");
                    var pokemonHeight = data.height;
                    var pokemonWeight = data.weight;
                    var pokemonBioUrl = data.species.url;
        
                    fetch(pokemonBioUrl)
                        .then(response => response.json())
                        .then(data => {
                            var pokemonBio = data.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text;
        
                            document.getElementById("pokemonImage").src = pokemonImage;
                            document.getElementById("pokemonName").textContent = pokemonName;
                            document.getElementById("pokemonType").textContent = pokemonType;
                            document.getElementById("pokemonHeight").textContent = pokemonHeight;
                            document.getElementById("pokemonWeight").textContent = pokemonWeight;
                            document.getElementById("pokemonBio").textContent = pokemonBio;
                        });
                })
                .catch(error => {
                    console.log("Error:", error);
                });
            }
