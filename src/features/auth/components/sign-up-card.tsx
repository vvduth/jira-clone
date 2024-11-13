import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const SignupCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="fle items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up bro</CardTitle>
        <CardDescription>
          Welcome to Jira Clone bro, glad to have you here
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
        <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter your name..."
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Email..."
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="password..."
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size={"lg"} className="w-full">
            Sign up
          </Button>
        </form>
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
          Sign up with Google
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Sign up with Github
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
