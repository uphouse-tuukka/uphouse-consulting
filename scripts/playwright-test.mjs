#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

function detectUbuntuVersion() {
  if (process.platform !== "linux" || !existsSync("/etc/os-release")) {
    return null;
  }

  const osRelease = readFileSync("/etc/os-release", "utf8");
  const id = osRelease.match(/^ID=(.+)$/m)?.[1]?.replaceAll('"', "");
  const version = osRelease.match(/^VERSION_ID=(.+)$/m)?.[1]?.replaceAll('"', "");

  return id === "ubuntu" ? version : null;
}

const env = { ...process.env };

// Playwright 1.59 does not yet publish an ubuntu26.04-x64 browser target.
// The ubuntu24.04 Chromium build runs on this host, so use it until Playwright
// grows native 26.04 support. Keep this in a wrapper instead of requiring
// everyone to remember the magic env var. Computers enjoy rituals; humans don't.
if (detectUbuntuVersion() === "26.04" && !env.PLAYWRIGHT_HOST_PLATFORM_OVERRIDE) {
  env.PLAYWRIGHT_HOST_PLATFORM_OVERRIDE = "ubuntu24.04-x64";
}

const cli = join("node_modules", "playwright", "cli.js");
const result = spawnSync(process.execPath, [cli, "test", ...process.argv.slice(2)], {
  stdio: "inherit",
  env,
});

process.exit(result.status ?? 1);
