import { Center, Loader } from "@mantine/core";
import { useSession } from "next-auth/react";

export default function VerifyEmail() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        Loading ..
      </div>
    );
  }

  if (status === "authenticated") {
    return <div>Redirect Component goes here</div>;
  }

  return (
    <Center className="flex flex-col min-h-screen">
      <div className="md:w-1/3">
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-xl font-medium md:text-3xl">Check your email</h1>
          <p className="mt-2 text-sm text-center md:text-base text-slate-500">
            A magic link has been sent to your email address.
          </p>
        </div>
      </div>
    </Center>
  );
}
