import { Component } from "react";
import {
  attributes,
  react as TherapistsContent
} from "../content/therapists.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title, description } = attributes;
    return (
      <ContentPage title={title} description={description}>
        <div className="markdown">
          <TherapistsContent />
        </div>
      </ContentPage>
    );
  }
}
