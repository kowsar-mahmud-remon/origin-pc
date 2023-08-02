// import { useForm, SubmitHandler } from "react-hook-form";
// import { Button } from "antd";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
// import auth from "@/firebase/firebase.auth";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const LoginPage = () => {
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);

  // const { register, handleSubmit } = useForm();

  // const onSubmit = (data) =>
  //   createUserWithEmailAndPassword(data.email, data.password);

  return (
    <div className="  flex justify-center">
      <div className="lg:w-[50%] h-[100vh]">
        <h3 className="text-xl font-bold my-10 text-center">LOGIN</h3>

        <div className="flex flex-col w-full border-opacity-50">
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
            className="grid h-16 btn card bg-primary text-white font-bold text-lg rounded-box place-items-center"
          >
            Login with Google
          </button>
          <div className="divider">OR</div>
          <button
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/" })
            }
            className="grid h-16 btn card bg-primary text-white font-bold text-lg rounded-box place-items-center"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
