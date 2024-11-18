"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "@/schemas/signUpSchema";
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
import { useState } from "react";

function signUpForm() {
  const [username, setUsername] = useState("");

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="text-slate-500 w-full text-center m-3 ">
        <h1 className="text-2xl font-mono font-extrabold md:text-5xl ">
          Join our Platform
        </h1>
        <p className="font-serif text-xs md:text-base">
          And be a valuable member and part of us
        </p>
        <h1 className="text-purple-400   text-4xl mt-10"> Register</h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[80%] md:w-1/3 border p-4 md:p-7 rounded-xl shadow-lg space-y-6 shadow-purple-200"
        >
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="abc@gmail.com" {...field} />
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
                  <Input placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Sign-up</Button>
        </form>
      </Form>
    </div>
  );
}

export default signUpForm;
