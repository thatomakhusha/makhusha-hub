"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="min-h-screen w-full">
      <section className="flex min-h-screen flex-col lg:flex-row">

        <div className="relative flex min-h-162.5 w-full lg:min-h-screen lg:flex-[1.1] flex-col items-center justify-center overflow-hidden bg-hub-background bg-dot-grid px-12 text-white">

          <div className="pointer-events-none absolute left-1/2 top-[22%] h-105 w-105 -translate-x-1/2 -translate-y-1/2 bg-glow-green" />

          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-16 sm:w-16">
            <span className="font-display text-xl font-bold text-accent sm:text-2xl">
              M
            </span>
          </div>

          <p className="relative z-10 mt-5 font-body text-sm font-semibold tracking-[0.25em] text-white/50">
            MAKHUSHA TECHNOLOGIES
          </p>

          <h1 className="relative z-10 mt-8 text-center font-display text-4xl font-bold leading-tight sm:mt-10 sm:text-5xl">
            <span className="text-white">Hello </span>
            <span className="text-accent">Makhushist.</span>
          </h1>

          <p className="relative z-10 mt-5 max-w-sm text-center font-body text-sm leading-relaxed text-white/60 sm:mt-6 sm:max-w-md sm:text-base">
            Makhusha HUB is your central workspace for everything we build,
            manage, and deliver together.
          </p>

          <div className="relative z-10 mt-8 flex max-w-lg flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
              <span className="font-mono text-accent">{"</>"}</span>
              <span className="font-body text-sm font-semibold text-white">
                Develop
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="font-body text-accent">◇◇</span>
              <span className="font-body text-sm font-semibold text-white">
                Collaborate
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="font-body text-accent">▭</span>
              <span className="font-body text-sm font-semibold text-white">
                Manage
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="font-body text-accent">▷</span>
              <span className="font-body text-sm font-semibold text-white">
                Deliver
              </span>
            </div>
          </div>

          <p className=" z-10 absolute bottom-8 font-body text-xs text-white/30">
            © 2026 Makhusha Technologies
          </p>
        </div>

        <div className="flex min-h-screen w-full flex-1 items-center justify-center bg-surface px-5 py-16 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">

            <p className="font-display text-lg font-bold">
              Makhusha HUB
            </p>

            <div className="mt-12">
              <h1 className="font-display text-4xl font-bold text-text">
                Welcome back
              </h1>

              <p className="mt-3 font-body text-sm text-text-muted">
                Sign in to continue to your workspace.
              </p>
            </div>
            <form className="mt-10 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="font-body text-sm text-text"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-3 font-body text-sm text-text outline-none transition focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="font-body text-sm text-text"
                >
                  Password
                </label>

                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-12 font-body text-sm text-text outline-none transition focus:border-accent"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition hover:text-text"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="font-body text-sm text-accent transition hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-hub-background px-4 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90"
              >
                Sign in
              </button>
              <div className="mt-6 text-center">
                <p className="font-body text-sm text-text-muted">
                  Need help?{" "}
                  <button
                    type="button"
                    className="font-semibold text-accent transition hover:underline"
                  >
                    Contact support
                  </button>
                </p>
              </div>
            </form>

          </div>
        </div>

      </section>
    </main>
  );
}