import { signIn, signOut, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

import TodoInput from "../Components/TodoInput";

export default function Home({ session }) {
  //console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <div>
          <button onClick={() => signOut()}>signout</button>
        </div>
        <TodoInput />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <div>
        <button onClick={() => signIn()}>login</button>
      </div>
      <TodoInput />
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
