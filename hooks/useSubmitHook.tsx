import React, { useState, useRef } from "react";

// ------------------------------
import { useRouter } from "next/router";
import { formSubmit } from "../lib";
// ------------------------------ ----------------------------------------------
// ------------------------------ ----------------------------------------------
export const useSubmitHook = () => {
  // ------------------------------

  const [formState, setFormState] = useState<{ [key: string]: string }>();
  const myRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  // ------------------------------

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // ------------------------------

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = formSubmit(formState!);
    if (res) {
      setFormState({});
      myRef.current?.reset();
      router.push("/");
    }
  };

  // ------------------------------

  return { onSubmit, myRef, handleChange };
};
