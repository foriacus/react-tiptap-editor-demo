import { AbstractMenuButton } from "../AbstractMenuButton.ts";
import { InnerEditor } from "../../core/Editor.ts";

export class Attachment extends AbstractMenuButton {
  fileInput?: HTMLInputElement;

  constructor() {
    super();
    const template = `
        <div>
        <input type="file" style="display: none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.8287 7.7574L9.1718 13.4143C8.78127 13.8048 8.78127 14.4379 9.1718 14.8285C9.56232 15.219 10.1955 15.219 10.586 14.8285L16.2429 9.17161C17.4144 8.00004 17.4144 6.10055 16.2429 4.92897C15.0713 3.7574 13.1718 3.7574 12.0002 4.92897L6.34337 10.5858C4.39075 12.5384 4.39075 15.7043 6.34337 17.6569C8.29599 19.6095 11.4618 19.6095 13.4144 17.6569L19.0713 12L20.4855 13.4143L14.8287 19.0711C12.095 21.8048 7.66283 21.8048 4.92916 19.0711C2.19549 16.3374 2.19549 11.9053 4.92916 9.17161L10.586 3.51476C12.5386 1.56214 15.7045 1.56214 17.6571 3.51476C19.6097 5.46738 19.6097 8.63321 17.6571 10.5858L12.0002 16.2427C10.8287 17.4143 8.92916 17.4143 7.75759 16.2427C6.58601 15.0711 6.58601 13.1716 7.75759 12L13.4144 6.34319L14.8287 7.7574Z"></path></svg>
        </div>
        `;
    this.template = template;
    this.registerClickListener();
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.options?.attachment?.customMenuInvoke) {
      this.querySelector("input")!.remove();
    } else {
      this.fileInput = this.querySelector("input") as HTMLInputElement;
      this.fileInput!.addEventListener("change", () => {
        const files = this.fileInput?.files;
        if (files && files.length > 0) {
          for (let file of files) {
            this.editor?.commands.uploadAttachment(file);
          }
        }
        (this.fileInput as any).value = "";
      });
    }
  }

  // @ts-ignore
  onClick(commands) {
    if (this.options?.attachment?.customMenuInvoke) {
      this.options.attachment.customMenuInvoke(
        (this.editor as InnerEditor).aiEditor
      );
    } else {
      this.fileInput?.click();
    }
  }
}
