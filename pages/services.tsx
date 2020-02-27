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
            <li className="my-6 flex flex-row items-center">
              <h2 className="font-bold text-lg mr-2 w-48 flex-shrink-0">{service.title}</h2>
              <img src={service.image} className="rounded-full w-20 h-20 flex-shrink-0" />
              <ul className="ml-6 list-disc">
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
