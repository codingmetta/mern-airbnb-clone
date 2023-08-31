import React from "react";

export default function Card(props) {


    return (
        <div className="max-w-sm pb-4 leading-5  tracking-[0.03rem] text-[14.5px] bg-white rounded-xl  dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className="w-[17rem] h-[16rem] object-cover rounded-xl" src={props.img} alt="" />
            </a>
            <div className="flex flex-row  items-center justify-between pt-2">
                <div className="font-normal">
                    <span >{props.location}, </span>
                    <span >{props.country} </span>
                </div>

                <div className="flex items-center pt-1 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 scale-[1.2] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span className= "font-thin">{props.rating}</span>

                </div>
            </div>
            <div className="text-gray-500 font-extralight">
                {
                    props.isBusiness? "Gewerbliche:r Vermieter:in" : "Private:r Gastgeber:in"
                }
                <p>8.-13. Nov.</p>
            </div>
            <p className="card--price leading-8  font-light"><span className="font-semibold">{props.price} €</span> Nacht</p>
        </div>
    );
}