#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const homeDir = os.homedir();

// Restore CLAUDE.md
const claudeDir = path.join(homeDir, ".claude");
const claudeFile = path.join(claudeDir, "CLAUDE.md");
const claudeBackup = path.join(claudeDir, "CLAUDE.md.backup");

if (fs.existsSync(claudeBackup)) {
  fs.copyFileSync(claudeBackup, claudeFile);
  fs.unlinkSync(claudeBackup);
  console.log(`Restored original CLAUDE.md from backup`);
} else if (fs.existsSync(claudeFile)) {
  fs.unlinkSync(claudeFile);
  console.log(`Deleted CLAUDE.md (no backup found)`);
} else {
  console.log(`CLAUDE.md not found`);
}

// Restore AGENTS.md
const codexDir = path.join(homeDir, ".codex");
const agentsFile = path.join(codexDir, "AGENTS.md");
const agentsBackup = path.join(codexDir, "AGENTS.md.backup");

if (fs.existsSync(agentsBackup)) {
  fs.copyFileSync(agentsBackup, agentsFile);
  fs.unlinkSync(agentsBackup);
  console.log(`Restored original AGENTS.md from backup`);
} else if (fs.existsSync(agentsFile)) {
  fs.unlinkSync(agentsFile);
  console.log(`Deleted AGENTS.md (no backup found)`);
} else {
  console.log(`AGENTS.md not found`);
}

console.log("Uninstall complete!");