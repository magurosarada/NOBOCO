import { deleteUser, signInWithCustomToken } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export const signinWithLine = ({
  code,
  state,
}: {
  code: string;
  state: string;
}) => {
  return fetch("/api/line-custom-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      state,
    }),
  })
    .then((res) => res.text())
    .then((token) => {
      console.log(token);
      return signInWithCustomToken(auth, token);
    });
};

// if (!isDeleteMode) {
//   router.replace(
//     {
//       query: {
//         id: router.query.id,
//       },
//     },
//     undefined,
//     {
//       shallow: true,
//     }
//   );
// }
// if (isDeleteMode) {
//   const user = auth.currentUser;
//   if (!user) {
//     return null;
//   }
//   deleteUser(user)
//     .then(() => {
//       // User deleted.
//     })
//     .catch((error) => {
//       // An error ocurred
//       // ...
//     });
// }

const useLineAuth = (isDeleteMode: boolean) => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.code && router.query.state) {
      fetch("/api/line-custom-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: router.query.code as string,
          state: router.query.state as string,
        }),
      })
        .then((res) => res.text())
        .then((token) => {
          console.log(token);
          signInWithCustomToken(auth, token).then(() => {
            if (!isDeleteMode) {
              router.replace(
                {
                  query: {
                    id: router.query.id,
                  },
                },
                undefined,
                {
                  shallow: true,
                }
              );
            }
            if (isDeleteMode) {
              const user = auth.currentUser;
              if (!user) {
                return null;
              }
              deleteUser(user)
                .then(() => {
                  // User deleted.
                })
                .catch((error) => {
                  // An error ocurred
                  // ...
                });
            }
          });
        });
    }
  }, [router.query.code]);
};

export const openLineLoginPage = async (isDleteMode: boolean) => {
  const stateRef = doc(collection(db, "lineStates"));
  const state = stateRef.id;

  await setDoc(stateRef, {
    createdAt: Date.now(),
  });
  const url = new URL("https://access.line.me/oauth2/v2.1/authorize");
  url.search = new URLSearchParams({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID as string,
    redirect_uri:
   `https://noboco-magurosarada.vercel.app/login`,
    state,
    scope: "profile openid",
  }).toString();

  location.assign(url.toString());
};

export default useLineAuth;
