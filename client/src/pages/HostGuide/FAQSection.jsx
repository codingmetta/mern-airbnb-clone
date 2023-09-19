import Accordion from "../../components/Accordion";
export default function FAQSection() {
    return (
        <div className="flex flex-col">
            <article className="faq-layout">

                <p className="w-full md:w-1/2 text-2xl md:text-4xl">
                    Antworten auf deine Fragen
                </p>

                <div className="w-full md:w-1/2 text-lg md:text-2xl ">
                    <Accordion />
                </div>
            </article>

            {/*TODO: Banner "Noch weitere Fragen?"*/}
            <div className="border border-gray-800"></div>
        </div>
    );
}