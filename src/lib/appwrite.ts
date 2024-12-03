import "server-only"

// src/lib/server/appwrite.js
"use server";
import { Client, Account,
    Storage, Users, 
    Databases
 } from "node-appwrite";
import { cookies } from "next/headers";



export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
  };
}
