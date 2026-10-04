"use client";

import { useEffect, useRef, useState } from "react";

const COPIED_MS = 1800;

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), COPIED_MS);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${email}`}
      className="inline-flex max-w-full cursor-pointer flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-accent bg-transparent px-6 py-[18px] text-left text-[clamp(18px,2.2vw,28px)] font-medium tracking-[-.02em] text-text transition-[background-color] duration-200 hover:bg-[rgba(145,132,217,.12)]"
    >
      <span className="[overflow-wrap:anywhere]">{email}</span>
      <span
        aria-hidden="true"
        className="rounded-[6px] bg-accent-800 px-[10px] py-[5px] text-[12px] tracking-normal text-accent-100"
      >
        {copied ? "Copied ✓" : "Copy"}
      </span>
      <span role="status" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
