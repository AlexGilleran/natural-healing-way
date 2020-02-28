import { Component } from "react";
import {
  attributes,
  react as FAQContent
} from "../content/faq.md";
import ContentPage from "../components/content-page";

export default class FAQ extends Component {
  render() {
    let { title } = attributes;
    return (
      <ContentPage title={title}>
        <div className="markdown">
          <FAQContent />
        </div>
      </ContentPage>
    );
  }
}
