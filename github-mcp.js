// Test update via GitHub MCP
const TOKEN = process.env.GITHUB_TOKEN;

async function testMcpConnection() {
  if (!TOKEN) {
    throw new Error("GITHUB_TOKEN environment variable is not set");
  }

  const response = await fetch("https://api.githubcopilot.com/mcp/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json"
    }
  });

  console.log("Status:", response.status);

  const text = await response.text();
  console.log(text);
}

testMcpConnection().catch(console.error);
