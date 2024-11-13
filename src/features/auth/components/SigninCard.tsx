import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SigninCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="fle items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back bro</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={"email"}
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
            Log in
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
    </Card>
  );
};

export default SigninCard;
