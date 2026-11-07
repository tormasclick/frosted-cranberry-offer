import { existsSync, readFileSync, writeFileSync } from "node:fs";

const configPath = ".vercel/output/config.json";

if (!existsSync(configPath)) {
  console.error(
    `[deploy] ${configPath} was not written, so the Vercel cron could not be removed.`,
  );
  process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, "utf8"));
const removed = Array.isArray(config.crons) ? config.crons : [];
delete config.crons;
writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);

if (removed.length === 0) {
  console.log("[deploy] No Vercel crons were present.");
} else {
  for (const cron of removed) {
    console.log(
      `[deploy] Removed Vercel cron "${cron.schedule}" for ${cron.path}.`,
    );
  }
}
