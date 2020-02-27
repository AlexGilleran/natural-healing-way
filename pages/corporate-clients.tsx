import { Component } from "react";
import { attributes, react as CorporateClientsContent } from "../content/corporate-clients.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <CorporateClientsContent />
        </div>
      </ContentPage>
    );
  }
}
