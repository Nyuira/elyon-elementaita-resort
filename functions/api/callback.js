export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");

  const clientId = context.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = context.env.OAUTH_GITHUB_CLIENT_SECRET;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "Cloudflare-Pages"
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code
    })
  });

  const data = await response.json();
  const token = data.access_token;

  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <script>
          window.opener.postMessage('authorization:github:success:${JSON.stringify({ token: token, provider: "github" })}', '*');
          window.close();
        </script>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
