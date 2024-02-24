import { AbstractMenuButton } from "../AbstractMenuButton.ts";

export class Break extends AbstractMenuButton {
  constructor() {
    super();
    const template = `
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 18H16.5C17.8807 18 19 16.8807 19 15.5C19 14.1193 17.8807 13 16.5 13H3V11H16.5C18.9853 11 21 13.0147 21 15.5C21 17.9853 18.9853 20 16.5 20H15V22L11 19L15 16V18ZM3 4H21V6H3V4ZM9 18V20H3V18H9Z"></path></svg>
        </div>
        `;
    this.template = template;
    this.registerClickListener();
  }

  // @ts-ignore
  onClick(commands) {
    commands.setHardBreak();
  }
}
