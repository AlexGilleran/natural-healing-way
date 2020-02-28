import { Component } from "react";
import { attributes, react as Content } from "../content/weight-loss.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <Content />
        </div>
      </ContentPage>
    );
  }
}
