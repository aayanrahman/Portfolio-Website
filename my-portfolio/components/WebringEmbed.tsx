"use client";

import { useEffect, useRef } from "react";

export default function WebringEmbed() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Clear anything (important for Fast Refresh / route transitions)
    host.innerHTML = "";

    const s = document.createElement("script");
    s.src = "https://uwaterloo.network/embed.js";
    s.async = true;
    s.setAttribute("data-webring", "");
    s.setAttribute("data-user", "aayan-rahman");

    host.appendChild(s);

    return () => {
      host.innerHTML = "";
    };
  }, []);

return (
    <div
        ref={hostRef}
        className="
            flex justify-center items-center
            scale-[0.75]
            opacity-80 hover:opacity-100 transition
        "
        aria-label="UW Webring"
    />
);
}
