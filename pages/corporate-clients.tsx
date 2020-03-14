import { Component } from "react";
import { attributes, react as CorporateClientsContent } from "../content/corporate-clients.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title, description } = attributes;
    return (
      <ContentPage title={title} description={description}>
        <div className="markdown">
          <CorporateClientsContent />
        </div>
      </ContentPage>
    );
  }
}
