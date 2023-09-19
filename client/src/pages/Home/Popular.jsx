import Card from "../../components/Card";
import data from "/public/data/mock-data.js";

export default function Popular() {


    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                country={item.country}
                price={item.price}
                isBusiness={item.isBusiness}
            />
        )
    })

    return (
        <div className="flex w-full">
            <section className="cards-layout">
                {cards}{cards}
            </section>
        </div>

    );
}