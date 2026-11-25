// SPDX-License-Identifier: MIT
// Copies POST.json (the X post this entry names) into the grader output dir.
import { copyFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
copyFileSync("POST.json", `${outDir}/POST.json`);
