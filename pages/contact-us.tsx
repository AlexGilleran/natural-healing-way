import { Component } from "react";
import { attributes, react as Contact } from "../content/contact-us.md";
import ContentPage from "../components/content-page";

export default class ContactUs extends Component {
  render() {
    let { title, description } = attributes;
    return (
      <ContentPage title={title} description={description}>
        <div className="markdown contact-us">
          <Contact />
        </div>
      </ContentPage>
    );
  }
}
