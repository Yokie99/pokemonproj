const getPokemon = async(mon:string) =>{
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + mon)
    const data = await promise.json();

    return data;
}

export {getPokemon}; 