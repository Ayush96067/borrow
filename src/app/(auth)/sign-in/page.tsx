"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { signInSchema } from "@/schemas/signInSchema";

function signInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="text-slate-500 w-full text-center m-3 ">
        <h1 className="text-2xl font-mono font-extrabold md:text-5xl ">
          Verification
        </h1>
        <p className="font-serif text-xs md:text-base">
          Verify to start your journey with us{" "}
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
                <FormLabel>Username/Email</FormLabel>
                <FormControl>
                  <Input placeholder="username/email" {...field} />
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

          <Button type="submit">Log-in</Button>
        </form>
      </Form>
    </div>
  );
}

export default signInForm;
