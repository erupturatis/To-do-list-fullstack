import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <div>
          <button onClick={() => signOut()}>signout</button>
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <div>
        <button onClick={() => signIn()}>logintogithub</button>
      </div>
    </>
  );
}
