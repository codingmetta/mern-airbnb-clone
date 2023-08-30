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
                city={item.location}
                country={item.country}
                price={item.price}
                isBusiness={item.isBusiness}
            />
        )
    }) 

    return (
        <div className="flex ">
            <LoginModalPlane />      
            <RegisterModalPlane />

            <section className="flex">
                {cards}
            </section>
            

         </div>

    );
}