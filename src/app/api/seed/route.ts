import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    email?: string;
    name?: string;
  };

  const email = body.email ?? `mj+${Date.now()}@example.com`;
  const name = body.name ?? "MJ";

  const user = await prisma.user.upsert({
    where: { email },
    update: { name },
    create: { email, name },
  });

  return Response.json({ ok: true, user });
}
