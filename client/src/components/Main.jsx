import Card from "./Card";
import data from "/public/data.js";
import React from "react";

export default function Main() {


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
            <section className="flex flex-wrap w-full pl-[5rem] pr-[5rem] gap-6">
                {cards}{cards}
            </section>
        </div>

    );
}