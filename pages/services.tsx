import { Component } from "react";
import { attributes, react as OurServices } from "../content/our-services.md";
import ContentPage from "../components/content-page";

interface Service {
  title: string;
  points: string[];
  image: string;
}

export default class Services extends Component {
  render() {
    const {
      title,
      services
    }: { title: string; services: Service[] } = attributes;

    return (
      <ContentPage title={title}>
        <div className="markdown">
          <OurServices />
        </div>
        <ul>
          {services.map(service => (
            <li className="my-6 flex flex-row flex-wrap sm:flex-no-wrap justify-between items-center">
              <h2 className="font-bold text-lg mr-2 ml-2 sm:ml-0 w-48 flex-shrink-0">{service.title}</h2>
              <img src={service.image} className="rounded-full w-20 h-20 flex-shrink-0" />
              <ul className="ml-6 mt-4 sm:mt-0 list-disc">
                {service.points.map(point => (
                  <li>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ContentPage>
    );
  }
}
