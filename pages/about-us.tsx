import { Component } from "react";
import { attributes, react as AboutUsContent } from "../content/about-us.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <AboutUsContent />
        </div>
      </ContentPage>
    );
  }
}
