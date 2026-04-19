import https from "https";

export type PostmarkEmail = {
  From: string;
  To: string;
  Subject: string;
  TextBody: string;
  HtmlBody?: string;
  ReplyTo?: string;
};

export async function sendPostmarkEmail(payload: PostmarkEmail): Promise<void> {
  const token = process.env.POSTMARK_SERVER_TOKEN;

  if (!token) {
    throw new Error("Missing POSTMARK_SERVER_TOKEN.");
  }

  await new Promise<void>((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.postmarkapp.com",
        path: "/email",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": token,
        },
      },
      (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve();
            return;
          }

          reject(new Error(data || `Postmark error (status ${res.statusCode})`));
        });
      }
    );

    req.on("error", reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}
