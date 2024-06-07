import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{border: 'solid 10px red'}}>
      <h1>admin section</h1>
      {children}
    </div>
  );
}
