"use server";

export const sendEmail = async (_: any, formData: FormData) => {
  const emailProps = {
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    description: formData.get("description"),
  };
};
