import { Component } from "react";
import { attributes, react as Content } from "../content/specialities.md";
import ContentPage from "../components/content-page";

export default class Specialities extends Component {
  render() {
    let { title, description } = attributes;
    return (
      <ContentPage title={title} description={description}>
        <div className="markdown">
          <Content />
        </div>
      </ContentPage>
    );
  }
}
