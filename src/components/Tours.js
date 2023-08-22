import Title from "./Title.js";
import Tour from "./Tour.js";
import { tours } from "../data.js";

const Tours = () => {
    return (
        <section className="section" id="tours">

            <Title text={'featured'} spanText={'tours'} />

            <div className="section-center featured-center">

                {
                    tours.map((tour) => {

                        return (

                            <Tour {...tour} />

                        );

                    })
                }

            </div>

        </section>
    );
};

export default Tours;