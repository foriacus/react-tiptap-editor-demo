import { AbstractMenuButton } from "../AbstractMenuButton.ts";

export class Redo extends AbstractMenuButton {
  constructor() {
    super();
    const template = `
         <div style="height: 16px">
            <svg style="width: 15px;height: 15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.1716 6.99955H11C7.68629 6.99955 5 9.68584 5 12.9996C5 16.3133 7.68629 18.9996 11 18.9996H20V20.9996H11C6.58172 20.9996 3 17.4178 3 12.9996C3 8.58127 6.58172 4.99955 11 4.99955H18.1716L15.636 2.46402L17.0503 1.0498L22 5.99955L17.0503 10.9493L15.636 9.53509L18.1716 6.99955Z"></path></svg>
         </div>
        `;
    this.template = template;
    this.registerClickListener();
  }

  // @ts-ignore
  onClick(commands) {
    commands.redo();
  }
}
