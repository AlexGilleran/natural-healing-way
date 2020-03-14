import { Component } from "react";
import { attributes, react as Content } from "../content/immune-disorders.md";
import ContentPage from "../components/content-page";

export default class FacialRejuvenation extends Component {
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
