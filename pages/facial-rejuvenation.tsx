import { Component } from "react";
import {
  attributes,
  react as FacialRejuvenationContent
} from "../content/facial-rejuvenation.md";
import ContentPage from "../components/content-page";

export default class FacialRejuvenation extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <FacialRejuvenationContent />
        </div>
      </ContentPage>
    );
  }
}
