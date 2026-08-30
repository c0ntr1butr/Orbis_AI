import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { UseCaseLayout } from "@/components/use-case-layout";
import { useCases } from "@/lib/use-cases";

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = useCases.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} · ${item.industry}`,
    description: item.capture,
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = useCases.find((c) => c.slug === slug);
  if (!item) notFound();

  return <UseCaseLayout slug={slug} />;
}
