export async function onRequest(context) {
  const clientId = context.env.OAUTH_GITHUB_CLIENT_ID;
  const redirectUri = `https://elyonelementaitaresort.com/api/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;
  
  return Response.redirect(githubAuthUrl, 302);
}
