"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

import MainLayout from "@/layouts/MainLayout";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(MainLayout), {
  name: "MainLayout",
});
