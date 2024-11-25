"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Link from "next/link";

type Inputs = {
  identifier: string;
  password: string;
};

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  // const form = useForm<z.infer<typeof signInSchema>>({
  const form = useForm<Inputs>({
    // resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  // async function onSubmit(values: z.infer<typeof signInSchema>) {
  async function onSubmit(values: Inputs) {
    setIsSubmitting(true);
    const result = await signIn("credentials", {
      redirect: false,
      identifier: values.identifier,
      password: values.password,
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast({
          title: "Login Failed",
          description: "Incorrect username or password",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    }
    if (result?.url) {
      toast({
        title: "Login Successfull",
        description: "Your being redirected",
        variant: "default",
      });
      router.replace("/dashboard");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="text-slate-500 w-full text-center m-3 ">
        <h1 className="text-2xl font-mono font-extrabold md:text-5xl ">
          Verification
        </h1>
        <p className="font-serif text-xs md:text-base">
          Verify to start your journey with us
        </p>
        <h1 className="text-purple-400   text-4xl mt-10">LOGIN</h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[80%] md:w-1/3 border p-4 md:p-7 rounded-xl shadow-lg space-y-6 shadow-purple-200"
        >
          <FormField
            name="identifier"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email/Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            Log-in
          </Button>
        </form>
      </Form>
      <p className="mt-2">
        If not registered?{" "}
        <Link className="text-blue-600 hover:text-blue-400" href={"/sign-up"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default page;

// //////////////////////////////////////////////////////
