import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>荒川モニタリング</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h2>観測地点</h2>
        <img width={600} src="http://file.xiangxingtech.com/imgs/content.jpg" />
      <div class="live-camera-wrapper">
        <h2>ライブカメラ映像（3分おき更新）</h2>
        <p>1.笹目橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/sasame.jpg" />
        <p>2.新荒川大橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/shinarakawa.jpg" />
        <p>3.岩淵水門付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/iwabuchikami.jpg" />
        <img width={400} src="http://file.xiangxingtech.com/river/iwabuchi.jpg" />
        <p>4.五色桜大橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/goshikizakura.jpg" />
        <p>5.西新井橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/nishiarai.jpg" />
        <p>6.堀切船着場付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/horikiri.jpg" />
        <p>7.平井大橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/hirai.jpg" />
        <p>8.首都高7号線荒川大橋付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/shutoko7.jpg" />
        <p>9.小松川船着場付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/komatsugawa.jpg" />
        <p>10.新砂付近</p>
        <img width={400} src="http://file.xiangxingtech.com/river/shinsuna.jpg" />
      </div>
      </ion-content>
    ];
  }
}
