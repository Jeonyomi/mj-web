export async function GET() {
  return Response.json({
    ok: true,
    service: "mj-web",
    time: new Date().toISOString(),
  });
}
