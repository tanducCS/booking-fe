"use client"
import Footer from "@/components/Footer";
import HeaderClient from "@/components/HeaderClient";
import { ReactElement } from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function SubLayout({
  children,
}: {
  params: string;
  children: ReactElement;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="min-h-screen relative">
          <HeaderClient />
          {children}
          <Footer />
        </div>
        <Toaster />
      </>
    </QueryClientProvider>
  );
}
