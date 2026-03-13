// Plesk Node.js entry point for Next.js standalone server
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const standaloneServer = path.join(__dirname, ".next", "standalone", "server.js");

// Check if standalone build exists
if (!fs.existsSync(standaloneServer)) {
  console.log("Standalone build not found. Running build...");
  try {
    execSync("npm run build", { stdio: "inherit", cwd: __dirname });
  } catch (error) {
    console.error("Build failed:", error.message);
    process.exit(1);
  }
}

// Copy static files to standalone if needed
const staticSrc = path.join(__dirname, ".next", "static");
const staticDest = path.join(__dirname, ".next", "standalone", ".next", "static");
const publicSrc = path.join(__dirname, "public");
const publicDest = path.join(__dirname, ".next", "standalone", "public");

if (fs.existsSync(staticSrc) && !fs.existsSync(staticDest)) {
  fs.cpSync(staticSrc, staticDest, { recursive: true });
}
if (fs.existsSync(publicSrc) && !fs.existsSync(publicDest)) {
  fs.cpSync(publicSrc, publicDest, { recursive: true });
}

// Set environment variables
process.env.PORT = process.env.PORT || "3000";
process.env.HOSTNAME = "0.0.0.0";

// Start the standalone server
require(standaloneServer);
