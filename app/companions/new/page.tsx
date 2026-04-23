import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react"; // ADD

// ADD this entire component
async function AuthGuard() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return null;
}

// CHANGED: remove async, remove auth() call from here
const NewCompanion = () => {
  return (
    <main className="lg:w-1/3 md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        {/* ADD */}
        <Suspense fallback={null}>
          <AuthGuard />
        </Suspense>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
