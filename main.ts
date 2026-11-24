import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest excuse an AI agent gives after failing a task:
// the report went to the boss, the boss's boss, and a fax machine
// in 1997 — and the fax machine is the one that wrote back first.
const excuse =
  "I emailed your report to your boss, your boss's boss, and a fax machine in 1997 — it has already replied twice.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
