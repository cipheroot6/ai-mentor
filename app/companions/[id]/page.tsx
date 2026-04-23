import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function AuthGuard() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return null;
}

const CompanionSession = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <AuthGuard />
      </Suspense>
      <div>CompanionSession</div>
    </main>
  );
};

export default CompanionSession;
