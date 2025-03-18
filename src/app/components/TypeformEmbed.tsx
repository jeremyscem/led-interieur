"use client";
import Script from "next/script";

export default function TypeformEmbed() {
  const typeformId = process.env.NEXT_PUBLIC_TYPEFORM_ID;

  return (
    <>
      <div data-tf-live={typeformId}></div>
      <Script
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
