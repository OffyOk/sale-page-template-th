import { redirect } from "next/navigation";

import { normalizePath, saleTemplates } from "@/config/template.config";

export default function Home() {
  redirect(`/sale/${normalizePath(saleTemplates[0].productPath)}`);
}