'use client'
import Link from "next/link";
// export const metadata = {
//     title: "Pokemon list page"
// }
export default async function Test({ params }) {
    try {

        //const pokemonId = params.id;
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50`).then(res =>
            res.json());
        const types = await fetch(`https://pokeapi.co/api/v2/type`).then(resT =>
            resT.json());

        async function handleChange(value) {
            const sortedPokemons = await fetch(`https://pokeapi.co/api/v2/type/${value}`).then(resT =>
                resT.json());
            return sortedPokemons;
        }


        return (
            <section>

                <h1><b>Lista: </b></h1>
                <select onChange={handleChange}>
                    {
                        types.results.map((typeT, i) =>
                            <option key={i} value={typeT.name}> {typeT.name} </option>)
                    }
                </select>
                <ul>
                    {
                        pokemon.results.map((pokemon2, i) =>
                            <li key={i}> {pokemon2.name} </li>)
                    }
                </ul>
            </section>
        );
    } catch (error) {
        console.log(error);
        return (
            <section>
                Brak
            </section>
        )
    }
}