"use client";

import { useEffect, useState } from "react";
import { config } from "@/data/config";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

export default function GitHubStars({ className }: { className?: string }) {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    if (!config.githubUsername || !config.githubRepo) return;
    fetch(`https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  if (!config.githubUsername || !config.githubRepo) return null;

  return (
    <GitHubStarsButton
      username={config.githubUsername}
      repo={config.githubRepo}
      stars={stars}
      className={className}
    />
  );
}
