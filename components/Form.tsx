"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Input from "./Input";
import { Button } from "./ui/button";

import { toast } from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
   const session = useSession();
   const router = useRouter();
   const [variant, setVariant] = useState<Variant>("LOGIN");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (session?.status === "authenticated") {
         router.push("/");
      }
   }, [session?.status, router]);

   const toggleVariant = useCallback(() => {
      if (variant === "LOGIN") {
         setVariant("REGISTER");
      } else {
         setVariant("LOGIN");
      }
   }, [variant]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: "",
         email: "",
         password: "",
      },
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      if (variant === "REGISTER") {
         signIn("credentials", {
            ...data,
            redirect: false,
         })
            .then((callback) => {
               if (callback?.error) {
                  toast.error("Invalid credentials!");
               }
            })
            .finally(() => setIsLoading(false));
      }

      if (variant === "LOGIN") {
         signIn("credentials", {
            ...data,
            redirect: false,
         })
            .then((callback) => {
               if (callback?.error) {
                  toast.error("Invalid credentials!");
               }
            })
            .finally(() => setIsLoading(false));
      }
   };
   return (
      <div className="mt-8 w-[300px]">
         <div className="bg-black px-4 py-8 shadow rounded-[5px] sm:px-10">
            <h1 className="font-bold text-center text-[25px] text-3xl tracking-tight text-white">
               Sign in
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

               <Input
                  disabled={isLoading}
                  id="name"
                  register={register}
                  errors={errors}
                  placeholder="Name"
               />
               <Input
                  disabled={isLoading}
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
                  register={register}
                  errors={errors}
               />
               <Input
                  disabled={isLoading}
                  id="password"
                  placeholder="Password"
                  type="password"
                  register={register}
                  errors={errors}

               />
               <Button disabled={isLoading} type="submit">
                  {variant === "LOGIN" ? "Sign in" : "Register"}
               </Button>
            </form>
            <div className="flex gap-2 justify-center text-sm py-6 px-2 text-[gray]">
               <div>
                  {variant === "LOGIN" ? "New! " : "Already have an Account?"}
               </div>
               <div onClick={toggleVariant} className="underline cursor-pointer">
                  {variant === "LOGIN" ? "Create an account" : "Login"}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AuthForm;
