"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="absolute top-2 left-2 p-1">
      <ArrowLeft className="w-6 h-6 text-gray-500 cursor-pointer" />
    </button>
  );
}

export default BackButton;
