import Link from "next/link";

export async function generateMetadata({ params }) {
    try {
        const pokemonId = params.id;
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res =>
            res.json());

        return {
            title: `${pokemon.name} – Statystyki i skille`,
            description: `Poznaj statystyki i umiejętności Pokemona ${pokemon.name}.`,
        };
    } catch (error) {
        console.error("Błąd przy generowaniu metadanych:", error);
        return {
            title: "Nie znaleziono Pokémona",
            description: "Nie udało się znaleźć szczegółów dla tego Pokemona.",
        };
    }
}

export default async function Test({ params }) {
    try {
        const pokemonId = params.id;
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        if (!pokemonResponse.ok) {
            if (pokemonResponse.status === 404) {
                throw new Error("Nie znaleziono Pokémona.");
            } else {
                throw new Error("Wystąpił problem z pobieraniem danych Pokémona.");
            }
        }

        const pokemon = await pokemonResponse.json();

        return (
            <section>
                <h1>Nazwa: {pokemon.name}!</h1>
                <h2>Statystyki:</h2>
                <ul>
                    <li>Wzrost: {pokemon.height} m</li>
                    {pokemon.stats.map((stat, i) => (
                        <li key={i}>
                            {stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>

                <h2>Typy:</h2>
                <ul>
                    {pokemon.types.map((typeInfo, i) => (
                        <li key={i}>{typeInfo.type.name}</li>
                    ))}
                </ul>

                <h2>Umiejętności:</h2>
                <ul>
                    {pokemon.abilities.map((ability, i) => (
                        <li key={i}>
                            <Link href={`/pages/pokemon/${pokemonId}/abilities/${ability.ability.name}`}>
                                {ability.ability.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/*<Link href="/">Powrót na stronę główną</Link> |{" "}*/}
                {/*<Link href="/pages/pokemon-list">Przejdź do listy Pokémonów</Link>*/}
            </section>
        );
    } catch (error) {
        console.error("Błąd:", error.message);

        return (
            <section>
                <p>{error.message || "Brak danych Pokémona"}</p>
                <Link href="/">Powrót na stronę główną</Link>
            </section>
        );
    }
}
