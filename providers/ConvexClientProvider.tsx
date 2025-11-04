"use client";
import React from "react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import Loader from "@/components/ui/shared/Loader";

type Props = {
  children: React.ReactNode;
};

const convexUrl = process?.env.NEXT_PUBLIC_CONVEX_URL||"";
const publishableKey = process?.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;


const convex = new ConvexReactClient(convexUrl);
const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
 <AuthLoading><Loader /></AuthLoading>

        <Authenticated>{children}</Authenticated>
       
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
