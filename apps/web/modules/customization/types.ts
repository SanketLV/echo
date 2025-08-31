import { z } from "zod";
import { widgetSettingsSchema } from "@/modules/customization/schemas";

export type FormSchema = z.infer<typeof widgetSettingsSchema>;
