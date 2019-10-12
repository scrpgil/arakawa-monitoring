import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    const ts = new Date().getTime();
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>荒川モニタリング</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button
          href="https://www.city.adachi.tokyo.jp/saigai/bosai/bosai/hinanjo-tejun-hinan.html"
          size="small"
          target="_blank"
        >
          足立区の避難場所
        </ion-button>
        <h2>観測地点</h2>
        <img width={600} src="http://file.xiangxingtech.com/imgs/content.jpg" />
        <div class="live-camera-wrapper">
          <h2>ライブカメラ映像（1分おき更新）</h2>
          <p>1.笹目橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/sasame.jpg?" + ts}
          />
          <p>2.新荒川大橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/shinarakawa.jpg?" + ts}
          />
          <p>3.岩淵水門付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/iwabuchikami.jpg?" + ts}
          />
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/iwabuchi.jpg?" + ts}
          />
          <p>4.五色桜大橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/goshikizakura.jpg?" + ts}
          />
          <p>5.西新井橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/nishiarai.jpg?" + ts}
          />
          <p>6.堀切船着場付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/horikiri.jpg?" + ts}
          />
          <p>7.平井大橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/hirai.jpg?" + ts}
          />
          <p>8.首都高7号線荒川大橋付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/shutoko7.jpg?" + ts}
          />
          <p>9.小松川船着場付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/komatsugawa.jpg?" + ts}
          />
          <p>10.新砂付近</p>
          <img
            width={400}
            src={"http://file.xiangxingtech.com/river/shinsuna.jpg?" + ts}
          />
        </div>
      </ion-content>
    ];
  }
}
