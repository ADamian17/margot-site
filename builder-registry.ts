"use client";
import { builder, Builder, withChildren } from "@builder.io/react";

import MainLayout from "@/layouts/MainLayout";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(MainLayout), {
  name: "MainLayout",
});
