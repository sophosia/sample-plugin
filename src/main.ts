import type { Button, View } from "sophosia";
import { Plugin, Component, PageType } from "sophosia";
import { createApp } from "vue";
import LeftMenuView from "./components/LeftMenuView.vue";
import PageView from "./components/PageView.vue";

export default class SamplePlugin extends Plugin {
  async enable() {
    const leftMenuView: View = {
      id: "sample-view",
      component: Component.LeftMenu,
      mount: (container: HTMLElement) => {
        createApp(LeftMenuView).mount(container);
      }
    };

    const ribbonBtn0: Button = {
      id: "test-button",
      icon: "mdi-heart-outline",
      tooltip: "toggles left menu",
      component: Component.Ribbon,
      click: () => {
        this.toggleLeftMenu();
        this.setLeftMenuView(leftMenuView.id);
      }
    };

    const pageView: View = {
      id: "sample-page-view",
      component: Component.PluginPage,
      mount: (container: HTMLElement) => {
        createApp(PageView, {
          loadData: this.loadData,
          saveData: this.saveData
        }).mount(container);
      }
    };

    const ribbonBtn1: Button = {
      id: "test-button-1",
      icon: "mdi-star-outline",
      tooltip: "opens a page",
      component: Component.Ribbon,
      click: () => {
        this.openPage({
          id: pageView.id,
          label: "A plugin page",
          type: PageType.PluginPage
        });
      }
    };

    this.addView(leftMenuView);
    this.addView(pageView);
    this.addButton(ribbonBtn0);
    this.addButton(ribbonBtn1);
  }
}
