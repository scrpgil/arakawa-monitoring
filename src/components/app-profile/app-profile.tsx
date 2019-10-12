import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @State() state = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return (
        this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase()
      );
    }
    return "";
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>足立区の避難場所</ion-title>
          <ion-button
            href="https://www.city.adachi.tokyo.jp/saigai/bosai/bosai/hinanjo-tejun-hinan.html"
            target="_blank"
          >
            公式サイト
          </ion-button>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>拾いものですが、もし公式サイトが繋がりにくくなったときに...</p>
        <img src="/assets/EGqTq4MVAAArEFv.jpeg" />
        <div class="area-wrappre" />
      </ion-content>
    ];
  }
}
