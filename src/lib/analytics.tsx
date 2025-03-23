"use client";

import * as React from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import {CONFIG} from "@/global-config";

if (typeof window !== "undefined") {
  posthog.init(CONFIG.posthog.apiKey, {
    api_host: CONFIG.posthog.apiHost,
    person_profiles: "always",
  });
}

export interface AnalyticsProps {
  children: React.ReactNode;
}

export function Analytics({ children }: AnalyticsProps) {
  return (
    <PostHogProvider client={posthog}>
        {children}
    </PostHogProvider>
  );
}