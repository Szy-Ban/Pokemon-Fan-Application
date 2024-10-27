import Link from "next/link";

export const metadata = {
    title: "Pokemon ability details page"
};

export default async function Test({ params }) {
    try {
        const { id: pokemonId, abilityId } = params;
        const abilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${abilityId}`);

        if (!abilityResponse.ok) {
            if (abilityResponse.status === 404) {
                throw new Error("Nie znaleziono umiejętności.");
            } else {
                throw new Error("Wystąpił problem z pobieraniem danych umiejętności.");
            }
        }

        const ability = await abilityResponse.json();

        const englishEffect = ability.effect_entries.find(entry => entry.language.name === "en");

        return (
            <section>
                <h1>Umiejętność: {ability.name}</h1>
                {
                    <p><b>Opis:</b> {englishEffect.effect}</p>
                }

                {/*<Link href={`/pages/pokemon/${pokemonId}`}>Powrót do szczegółów Pokémona</Link> |{" "}*/}
                {/*<Link href="/">Powrót na stronę główną</Link>*/}
            </section>
        );
    } catch (error) {
        console.error("Błąd:", error.message);

        return (
            <section>
                <p>{error.message || "Brak szczegółów umiejętności"}</p>
                <Link href="/">Powrót na stronę główną</Link>
            </section>
        );
    }
}
