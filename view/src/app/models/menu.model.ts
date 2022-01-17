import {TemplateRef} from "@angular/core";

export interface Menu {
  text: string | TemplateRef<void> | null;
  link?: string;
  icon: string | null;
  children?: Menu[];
}
