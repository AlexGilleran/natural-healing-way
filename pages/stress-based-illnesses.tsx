import { Component } from "react";
import {
  attributes,
  react as Content
} from "../content/stress-based-illnesses.md";
import ContentPage from "../components/content-page";

export default class FacialRejuvenation extends Component {
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
