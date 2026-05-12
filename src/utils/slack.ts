export async function sendSlackAlert(payload: {
  title?: string;
  message: string;
  method?: string;
  path?: string;
  statusCode?: number;
}) {
  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (!webhook) return;

  const text = `
🚨 Backend Alert
${payload.title ? `Title: ${payload.title}` : ""}
Method: ${payload.method || "N/A"}
Path: ${payload.path || "N/A"}
Status: ${payload.statusCode || "N/A"}
Message: ${payload.message}
  `;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    // IMPORTANTE: no romper la app si Slack falla
    console.error("Slack notification failed:", error);
  }
}