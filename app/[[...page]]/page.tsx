import { cache } from "react";
import { ResolvingMetadata, Metadata } from "next";
import { builder } from "@builder.io/sdk";

import { RenderBuilderContent } from "../../components/builder";
import MainLayout from "@/layouts/MainLayout";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
    searchParams: { [key: string]: string | string[] | undefined }
  };
}

const getPageContent = cache(async (pageModelName: string, urlPath: string) => {
  const content = await builder.get(pageModelName, {
    userAttributes: {
      urlPath,
    },
  }).toPromise();

  return content;
})

const builderModelName = "page";

export default async function Page(props: PageProps) {
  const urlPath = `/${(props?.params?.page?.join("/") || "")}`;
  const content = await getPageContent(builderModelName, urlPath)

  return (
    <MainLayout>
      <RenderBuilderContent content={content} model={builderModelName} />
    </MainLayout>
  )
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const content = await getPageContent(builderModelName, "/" + (params?.page?.join("/") || ""))
  const prevMetadata = await parent

  return {
    ...prevMetadata,
    ...content?.data?.seo
  } as Metadata
}
