import { Component } from "react";
import {
  attributes,
  react as TherapistsContent
} from "../content/therapists.md";
import ContentPage from "../components/content-page";

export default class AboutUs extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <TherapistsContent />
        </div>
      </ContentPage>
    );
  }
}
