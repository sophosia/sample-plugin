import type { VNode } from "vue";

export interface Button {
  icon: string;
  tooltip: string;
  click: () => void;
}

export interface View {
  id: string;
  render: ((container: HTMLElement) => void) | (() => VNode);
}

export class Plugin {
  layoutControl = {
    toggleLeftMenu: (visible?: boolean) => {},
    setLeftMenuView: (viewId: string) => {}
  };
  enable() {}
  disable() {}
  loadSettings() {}
  saveSettings() {}
  addRibbonBtn(button: Button) {}
  addLeftMenuView(view: View) {}
}
