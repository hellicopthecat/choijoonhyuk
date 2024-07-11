"use server";
import {revalidatePath} from "next/cache";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import z from "zod";

const NAME = "name";
const EMAIL = "email";
const TITLE = "title";
const DESCRIPTION = "description";
const myEmail = "jhccop@naver.com";

const result = z
  .object({
    name: z.string({required_error: "해당 내용을 입력해주세요"}).min(4),
    email: z.string({required_error: "해당 내용을 입력해주세요"}).email(),
    title: z.string({required_error: "해당 내용을 입력해주세요"}),
    description: z.string({required_error: "해당 내용을 입력해주세요"}),
  })
  .required();

export const sendEmail = async (prevState: any, formData: FormData) => {
  const emailProps = {
    name: formData.get(NAME),
    email: formData.get(EMAIL),
    title: formData.get(TITLE),
    description: formData.get(DESCRIPTION),
  };
  const ok = result.safeParse(emailProps);
  if (ok.success) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user:
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_AUTH_USER
            : process.env.DATABASE_AUTH_USER,
        pass:
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_AUTH_KEY
            : process.env.DATABASE_AUTH_KEY,
      },
    });
    const mailOption: Mail.Options = {
      from: emailProps.email + "",
      to: myEmail,
      subject: emailProps.title + "",
      html: `
      <h1>${emailProps.title}</h1>
      <h3>보내는 사람 : ${emailProps.email}</h3>
      <h3>받는 사람 : ${myEmail}</h3>
      <h3>설명</h3>
      <p>${emailProps.description}</p>
      `,
    };
    try {
      await transporter.sendMail(mailOption);
      revalidatePath("/");
      return {sendMsgState: true};
    } catch (error) {
      return {error};
    }
  } else {
    return {
      sendMsgState: false,
      error: ok.error.flatten(),
    };
  }
};
