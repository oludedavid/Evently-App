"use client";

import Link from "next/link";
import formStyles from "./form.module.css";
import { useState } from "react";

export default function FormComponent({
  type,
  values,
  onChangeHandler,
  onClick,
}: {
  type: string;
  values: { userName?: string; userEmail: string; userPassword: string };
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
  const [hidePassword, setHidePassword] = useState<Boolean>(true);

  function togglePasswordVisibility() {
    setHidePassword((prevValue) => !prevValue);
  }

  return type === "login" ? (
    <LoginForm
      togglePasswordVisibility={togglePasswordVisibility}
      changeHandler={onChangeHandler}
      onClick={onClick}
      values={values}
      hidePassword={hidePassword}
    />
  ) : (
    <RegisterForm
      togglePasswordVisibility={togglePasswordVisibility}
      changeHandler={onChangeHandler}
      onClick={onClick}
      values={values}
      hidePassword={hidePassword}
    />
  );
}

const RegisterForm = ({
  changeHandler,
  onClick,
  values,
  hidePassword,
  togglePasswordVisibility,
}: {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  hidePassword: Boolean;
  togglePasswordVisibility: () => void;
  values: { userName?: string; userEmail: string; userPassword: string };
}) => {
  return (
    <form className={`flex flex-col justify-center items-center gap-5 w-5/6`}>
      <h1
        className={`p-5 md:p-10 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold w-full text-center`}
      >
        Stay Organised and Mindful
      </h1>
      <div className="w-full flex flex-col items-center gap-6">
        <div className="flex flex-row items-center gap-3">
          <label className={`text-lg font-bold`} htmlFor="userName">
            Name:
          </label>
          <input
            className="h-8 rounded-md p-2"
            onChange={(e) => changeHandler(e)}
            type="text"
            placeholder="Max Muller"
            id="userName"
            name="userName"
            value={values.userName}
            required
          />
        </div>
        <div className={`flex flex-row items-center justify-end gap-3`}>
          <label className={`text-lg font-bold`} htmlFor="userEmail">
            Email:
          </label>
          <input
            className="h-8 rounded-md p-2"
            onChange={(e) => changeHandler(e)}
            type="email"
            placeholder="Max@muller.com"
            id="userEmail"
            name="userEmail"
            value={values.userEmail}
            required
          />
        </div>
        <div className={`flex flex-row items-center gap-3`}>
          <label className={`text-lg font-bold`} htmlFor="userPassword">
            Password:
          </label>
          <input
            className="h-8 rounded-md p-2"
            onChange={(e) => changeHandler(e)}
            type={`${hidePassword ? `password` : `text`}`}
            name="userPassword"
            id="userPassword"
            value={values.userPassword}
            required
          />
          <button
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            <img
              width={14}
              height={10}
              src={`${hidePassword ? "/photos/hide.png" : "/photos/show.png"}`}
            />
          </button>
        </div>
      </div>

      <div className={`flex flex-row items-center gap-14 w-auto`}>
        <button className={`w-32 bg-red-400 p-3 rounded-md`} onClick={onClick}>
          Register
        </button>
        <Link
          className={`w-1/2 text-center flex flex-row justify-center pl-9 `}
          href="/"
        >
          <img width={20} height={2} src="/photos/back.png" />
        </Link>
      </div>
    </form>
  );
};

const LoginForm = ({
  changeHandler,
  onClick,
  values,
  hidePassword,
  togglePasswordVisibility,
}: {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  hidePassword: Boolean;
  togglePasswordVisibility: () => void;
  values: { userName?: string; userEmail: string; userPassword: string };
}) => {
  return (
    <form className={`flex flex-col justify-center items-center gap-5 w-5/6`}>
      <h1
        className={`p-5 md:p-10 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold w-full text-center`}
      >
        Welcome to Evently, Pick what you left off :)
      </h1>
      <div className={`flex flex-row items-center justify-end gap-3`}>
        <label className={`text-lg font-bold`} htmlFor="userEmail">
          Email:
        </label>
        <input
          className="h-8 rounded-md p-2"
          onChange={(e) => changeHandler(e)}
          type="email"
          placeholder="Max@muller.com"
          id="userEmail"
          name="userEmail"
          value={values.userEmail}
          required
        />
      </div>
      <div className={`flex flex-row items-center gap-3`}>
        <label className={`text-lg font-bold`} htmlFor="userPassword">
          Password:
        </label>
        <input
          className="h-8 rounded-md p-2"
          onChange={(e) => changeHandler(e)}
          type={`${hidePassword ? `password` : `text`}`}
          name="userPassword"
          id="userPassword"
          value={values.userPassword}
          required
        />
        <button
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
        >
          <img
            width={10}
            height={10}
            src={`${hidePassword ? "/photos/hide.png" : "/photos/show.png"}`}
          />
        </button>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-full pl-10 gap-12 pt-6`}
      >
        <div className="flex flex-row w-auto items-center gap-8">
          <button
            className={`w-32 bg-red-400 p-3 rounded-md ${formStyles.button}`}
            onClick={onClick}
          >
            Login
          </button>
          <Link
            className={`w-1/2 text-center flex flex-row justify-center pl-9 `}
            href="/"
          >
            <img width={20} height={2} src="/photos/back.png" />
          </Link>
        </div>

        <div>
          <Link href="/register">
            <button className=" transition-all duration-600 ease-in-out">
              <small className="text-sm text-red-300">
                not yet registered? register here
              </small>
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
