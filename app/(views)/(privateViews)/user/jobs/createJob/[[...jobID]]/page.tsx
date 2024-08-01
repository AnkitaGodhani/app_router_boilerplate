"use client"
import JobCreateForm from "@/components/shared/jobCreateForm";
import React from "react";
import { useRouter as use } from "next/router";
import { usePathname } from "next/navigation";

type Props = {};

const Index = (props: Props) => {
  const pathname = usePathname();
  const jobId = pathname.split("/")?.[4];
  return <JobCreateForm jobId={jobId} />;
};

export default Index;
