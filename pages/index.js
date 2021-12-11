import { signIn, signOut, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  console.log(session);
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
        <button onClick={() => signIn()}>login</button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
