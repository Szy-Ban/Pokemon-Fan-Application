'use client'
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default async function PokemonList() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "";

    try {
        const typesResponse = await fetch(`https://pokeapi.co/api/v2/type`);
        if (!typesResponse.ok) {
            throw new Error("Wystąpił problem z pobieraniem typów Pokémonów.");
        }
        const typesData = await typesResponse.json();

        const fetchPokemon = async () => {
            if (type) {
                const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
                if (!typeResponse.ok) {
                    throw new Error("Wystąpił problem z pobieraniem Pokémonów dla wybranego typu.");
                }
                const typeData = await typeResponse.json();
                return typeData.pokemon.map(p => p.pokemon); // Lista Pokémonów dla wybranego typu
            } else {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50");
                if (!response.ok) {
                    throw new Error("Nie znaleziono danych Pokémonów.");
                }
                const data = await response.json();
                return data.results;
            }
        };

        const pokemonList = await fetchPokemon();


        function handleChange(event) {
            const selectedType = event.target.value;
            if (selectedType === "all") {
                window.location.href = "/pages/pokemon-list";
            } else {
                window.location.href = `/pages/pokemon-list?type=${selectedType}`;
            }
        }

        return (
            <section>
                <h1><b>Lista Pokémonów:</b></h1>

                <h2>Filtruj według typu:</h2>
                <select value={type} onChange={handleChange}>
                    <option value="all">Wszystkie typy</option>
                    {
                        typesData.results.map((typeObj, i) => (
                        <option key={i} value={typeObj.name}>{typeObj.name}</option>
                    ))
                    }
                </select>

                <ul>
                    {pokemonList.map((pokemon, i) => {
                        const id = pokemon.url.split("/").at(-2);
                        return (
                            <li key={i}>
                                <Link href={`/pages/pokemon/${id}`}>
                                    {pokemon.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    } catch (error) {
        console.error("Błąd:", error.message);

        return (
            <section>
                <p>{error.message || "Brak danych"}</p>
                <Link href="/">Powrót na stronę główną</Link>
            </section>
        );
    }
}
