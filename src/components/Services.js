import Title from "./Title.js";
import Service from "./Service.js";
import { services } from "../data.js";

const Services = () => {
    return (
        <section className="section services" id="services">

            <Title text={'our'} spanText={'services'} />

            <div className="section-center services-center">

                {
                    services.map((service) => {

                        return (

                            <Service key={service.id} {...service} />

                        );

                    })
                }

            </div>

        </section>
    );
};

export default Services;