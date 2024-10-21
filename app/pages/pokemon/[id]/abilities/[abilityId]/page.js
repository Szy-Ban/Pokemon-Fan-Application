import Link from "next/link";
export const metadata = {
    title: "Pokemon ability page"
}
export default async function Test({ params }) {
    try {
    const pokemonId = params.id;
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res =>
        res.json());
    return (
        <section>
            <h1>Umiejętności pokemona {pokemon.name} !</h1>
            <ul>
                {
                    pokemon.abilities.map((ability, i) =>
                        <li key={i}> {ability.ability.name} </li>)
                }
            </ul>
        </section>
    );
    } catch (error) {
    console.log(error);
    return (
        <section>
            Brak skilla
        </section>
    )
}
}
