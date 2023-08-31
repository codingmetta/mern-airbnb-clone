import LoginModalPlane from "./subcomponents/LoginModalPlane";
import RegisterModalPlane from "./subcomponents/RegisterModalPlane";
import Card from "./Card";
import data from "/public/data";
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
        <div className="flex ">
            <section className="flex flex-wrap pt-4 pl-[5rem] pr-[5rem] gap-5">
                {cards}{cards}
            </section>
            

         </div>

    );
}