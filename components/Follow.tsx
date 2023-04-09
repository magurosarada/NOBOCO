import { doc, getDoc, runTransaction } from "firebase/firestore";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useDebouncedCallback } from "use-debounce";
import useSWR from "swr";
import { db } from "../firebase/client";
import { User } from "../types/user";
import Button from "./Button";

type Props = {
  followerId: string | undefined;
  userId: string;
};

const Follow = ({ followerId, userId }: Props) => {
  const userRef = doc(db, `users/${userId}`);
  const userSWR = useSWR<User>(`users/${userId}`, async () => {
    const snap = await getDoc(userRef);
    return snap.data() as User;
  });

  const followerRef = doc(db, `users/${userId}/follower/${followerId}`);

  const isfollowSWR = useSWR<boolean>(
    `users/${userId}/follower/${followerId}`,
    async () => {
      const snap = await getDoc(followerRef);
      return snap.exists();
    }
  );

  const isfollow = isfollowSWR.data;
  const oldData = userSWR.data;

  const toggleFollow = useDebouncedCallback(async () => {
    if (isfollow === undefined || !oldData) {
      console.log(followerId, isfollowSWR);
      return null;
    }

    userSWR.mutate(
      {
        ...oldData,
        followerCount: oldData.followerCount + (isfollow ? -1 : 1),
      },
      {
        revalidate: false,
      }
    );

    isfollowSWR.mutate(!isfollow, {
      revalidate: false,
    });

    runTransaction(db, async (transaction) => {
      const followerDoc = await transaction.get(followerRef);
      const userData = (await transaction.get(userRef)).data() as User;

      if (followerDoc.exists()) {
        transaction.delete(followerRef);
      } else {
        transaction.set(followerRef, {
          followerId,
        });
      }

      const oldFollowerCount = userData.followerCount || 0;

      return transaction.update(userRef, {
        followerCount: oldFollowerCount + (followerDoc.exists() ? -1 : 1),
      });
    });
  }, 500);
  if (isfollowSWR.isValidating) {
    return null;
  }
  return (
    <div>
      <button
        className="inline-flex space-x-2 items-center"
        type="button"
        onClick={toggleFollow}
      >
        {isfollow ? (
          <Button
            className="max-w-4 h-7  w-3 hover:bg-green-500 hover:text-white flex shadow-none"
            type="button"
          >
            フォロー中
          </Button>
        ) : (
          <Button
            className="max-w-4 h-7  w-3 hover:bg-green-500 hover:text-white flex shadow-none"
            type="button"
          >
            フォロー
          </Button>
        )}
      </button>
    </div>
  );
};

export default Follow;
