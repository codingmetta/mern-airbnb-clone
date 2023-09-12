
export default function Accordion() {


    return (

            <div id="accordion-flush" data-accordion="collapse" data-active-classes="active-accordion" data-inactive-classes="inactive-accordion">

                <article className="accordion-item">
                    <h3 id="accordion-flush-heading-1">
                        <button type="button" className="accordion-btn" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span className="font-light">
                                Eignet sich meine Unterkunft für Airbnb?
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h3>

                    <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                        <p className="accordion-answer">
                            Gäste auf Airbnb interessieren sich für alle möglichen Arten
                            von Unterkünften. Auf unserer Plattform finden sie Inserate
                            für Tiny Houses, Blockhütten, Baumhäuser und vieles mehr.
                            Selbst ein Gästezimmer kann eine großartige Unterkunft sein.
                        </p>
                    </div>
                </article>

                <article className="accordion-item">

                    <h3 id="accordion-flush-heading-2">
                        <button type="button" className="accordion-btn" data-accordion-target="#accordion-flush-body-2" aria-expanded="true" aria-controls="accordion-flush-body-2">
                            <span className="font-light">
                                Muss ich ständig Gäste aufnehmen?
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h3>

                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <p className="accordion-answer">
                            Ganz und gar nicht – du hast die volle Kontrolle über deinen Kalender.
                            Du kannst einmal im Jahr, ein paar Mal im Monat oder auch öfter Gäste aufnehmen.
                        </p>
                    </div>
                </article>



                <article className="accordion-item">

                    <h3 id="accordion-flush-heading-3">
                        <button type="button" className="accordion-btn" data-accordion-target="#accordion-flush-body-3" aria-expanded="true" aria-controls="accordion-flush-body-3">
                            <span className="font-light">
                                Wie intensiv soll ich mit Gästen interagieren?
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <p className="accordion-answer">
                            Darüber entscheidest du selbst. Einige Gastgeberinnen und Gastgeber bevorzugen es,
                            Gästen nur zu wichtigen Anlässen eine Nachricht zu schreiben – zum Beispiel zum
                            Check-in –, während andere ihre Gäste auch gerne persönlich kennenlernen.
                            Du findest bestimmt deinen ganz eigenen Stil, der für dich und deine
                            Gäste am besten funktioniert.
                        </p>
                    </div>
                </article>



                <article className="accordion-item">
                    <h3 id="accordion-flush-heading-4">
                        <button type="button" className="accordion-btn" data-accordion-target="#accordion-flush-body-4" aria-expanded="true" aria-controls="accordion-flush-body-4">
                            <span className="font-light">
                                Welche Tipps gibt es dafür, ein:e großartige:r Gastgeber:in auf Airbnb zu sein?
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h3>

                    <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                        <p className="accordion-answer">
                            Die grundlegenden Dinge sind bereits viel wert. Halte deine Unterkunft sauber,
                            beantworte die Nachrichten von Gästen stets zeitig und stelle eine
                            grundlegende Ausstattung bereit, wie zum Beispiel saubere Handtücher.
                            Einige Gastgeberinnen und Gastgeber verleihen ihrer Unterkunft gern eine
                            persönliche Note, indem sie beispielsweise frische Blumen auf den Tisch
                            stellen oder eine Liste mit Sehenswürdigkeiten zusammenstellen – das ist
                            jedoch nicht erforderlich und bleibt ganz dir überlassen.
                        </p>
                    </div>
                </article>


                <article className="accordion-item">

                    <h3 id="accordion-flush-heading-5">
                        <button type="button" className="accordion-btn" data-accordion-target="#accordion-flush-body-5" aria-expanded="true" aria-controls="accordion-flush-body-5">
                            <span className="font-light">
                                Welche Gebühren berechnet Airbnb?
                            </span>
                            <svg data-accordion-icon 
                            className="w-3 h-3 shrink-0" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-5" className="hidden" aria-labelledby="accordion-flush-heading-5">
                        <p className="accordion-answer">
                            Airbnb erhebt in der Regel eine pauschale Servicegebühr in Höhe von 3 %
                            der Zwischensumme einer Buchung, die von deiner Auszahlung abgezogen wird.
                            Darüber hinaus erheben wir bei der Buchung eine Gebühr von Gästen. In vielen
                            Gegenden zieht Airbnb Umsatz- und Tourismussteuern automatisch in deinem Namen
                            ein und führt sie ab.
                        </p>
                    </div>
                </article>
            </div>
    );
}