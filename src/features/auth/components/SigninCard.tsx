import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";

const SigninCard = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof loginSchema>) => {
    console.log(value);
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="fle items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back bro</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Email..." />
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
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="password..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size={"lg"} className="w-full">
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant={"secondary"}
          size={"lg"}
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Log in with Google
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Log in with Github
        </Button>
      </CardContent>
      <div className="px-7">
        <Separator/>
      </div>

      <CardContent className="p-7 flex items-center justify-center">
        <p>New here?</p>
        <Link href={"/sign-up"}><span className="text-blue-700">&nbsp;Create an account!</span></Link>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
