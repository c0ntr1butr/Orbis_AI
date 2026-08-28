import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ServiceLayout } from "@/components/service-layout";
import { modules } from "@/lib/services";

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);
  if (!module) return {};
  return {
    title: module.title,
    description: module.pitch,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);
  if (!module) notFound();

  return <ServiceLayout slug={slug} />;
}
