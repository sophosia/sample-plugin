import { Plugin } from "./sophosia-api";
import type { Button, View } from "./sophosia-api";
import { h } from "vue";
import SampleComponent from "./components/SampleComponent.vue";

export default class SamplePlugin extends Plugin {
  enable() {
    const leftMenuView: View = {
      id: "sample-view",
      render: () => h(SampleComponent)
    };

    const ribbonBtn: Button = {
      icon: "heart-outline",
      tooltip: "a test button",
      click: () => {
        this.layoutControl.toggleLeftMenu();
        this.layoutControl.setLeftMenuView(leftMenuView.id);
      }
    };

    this.addLeftMenuView(leftMenuView);
    this.addRibbonBtn(ribbonBtn);
  }
}
