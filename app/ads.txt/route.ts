// Served at /ads.txt. Using a route handler (not public/) because the static
// file got stranded in the multi-repo deploy history.
export const dynamic = "force-static";

export function GET() {
  return new Response(
    "google.com, pub-6711834888023238, DIRECT, f08c47fec0942fa0\n",
    { headers: { "content-type": "text/plain; charset=utf-8" } }
  );
}
