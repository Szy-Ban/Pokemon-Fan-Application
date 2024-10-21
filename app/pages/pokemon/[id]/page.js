import Link from "next/link";
export const metadata = {
    title: "Pokemon page"
}
export default async function Test({ params }) {
    try {
        const pokemonId = params.id;
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res =>
            res.json());
        return (
            <section>
                <h1>Nazwa: {pokemon.name} !</h1>
                <h2>Staty: </h2>
                <ul>
                    <li> height: {pokemon.height} m</li>
                    {
                        pokemon.stats.map((stat, i) =>
                            <li key={i}> {stat.stat.name} : {stat.base_stat} </li>)
                    }
                </ul>
            </section>
        );
    } catch (error) {
        console.log(error);
        return (
            <section>
                Brak pokemona
            </section>
        )
    }
}