import { useRouter } from "next/router";
import React from "react";
import ProfileForm from "../components/ProfileForm";
import { useRequireAuth } from "../lib/requireAuth";

const signup = () => {
  const { firebaseUser, user } = useRequireAuth();
  const router = useRouter();

  if (user) {
    router.push("/timeline");
  }
  return <ProfileForm isEditMode={false} />;
};

export default signup;
