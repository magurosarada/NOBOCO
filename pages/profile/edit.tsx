import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import MainLayout from "../../components/MainLayout";
import ProfileForm from "../../components/ProfileForm";
import { NextPageWithLayout } from "../_app";

const ProfileEdit: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="py-10">
      <ProfileForm isEditMode />
    </div>
  );
};
ProfileEdit.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default ProfileEdit;
