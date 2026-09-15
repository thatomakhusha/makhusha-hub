"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AcceptInvitePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen w-full">
      <section className="flex min-h-screen flex-col lg:flex-row">

        {/* LEFT PANEL */}
        <div className="relative flex min-h-[650px] w-full flex-col items-center justify-center overflow-hidden bg-hub-background bg-dot-grid px-12 text-white lg:min-h-screen lg:flex-[1.1]">

          <div className="pointer-events-none absolute left-1/2 top-[22%] h-105 w-105 -translate-x-1/2 -translate-y-1/2 bg-glow-green" />

          {/* LOGO */}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-16 sm:w-16">
            <span className="font-display text-xl font-bold text-accent sm:text-2xl">
              M
            </span>
          </div>

          {/* BRAND */}
          <p className="relative z-10 mt-5 font-body text-sm font-semibold tracking-[0.25em] text-white/50">
            MAKHUSHA TECHNOLOGIES
          </p>

          {/* GREETING */}
          <h1 className="relative z-10 mt-8 text-center font-display text-4xl font-bold leading-tight sm:mt-10 sm:text-5xl">
            <span className="text-white">Hello </span>
            <span className="text-accent">Makhushist.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="relative z-10 mt-5 max-w-sm text-center font-body text-sm leading-relaxed text-white/60 sm:mt-6 sm:max-w-md sm:text-base">
            Makhusha HUB is your central workspace for everything we build,
            manage, and deliver together.
          </p>

          {/* FEATURE BADGES */}
          <div className="relative z-10 mt-8 flex max-w-lg flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
              <span className="font-mono text-accent">{"</>"}</span>
              <span className="font-body text-sm font-semibold text-white">
                Develop
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
              <span className="font-body text-accent">◇◇</span>
              <span className="font-body text-sm font-semibold text-white">
                Collaborate
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
              <span className="font-body text-accent">▭</span>
              <span className="font-body text-sm font-semibold text-white">
                Manage
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
              <span className="font-body text-accent">▷</span>
              <span className="font-body text-sm font-semibold text-white">
                Deliver
              </span>
            </div>

          </div>

          {/* FOOTER */}
          <p className="absolute bottom-8 z-10 font-body text-xs text-white/30">
            © 2026 Makhusha Technologies
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex min-h-screen w-full flex-1 items-center justify-center bg-surface px-5 py-16 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">

            {/* HUB BRAND */}
            <p className="font-display text-lg font-bold text-text">
              Makhusha HUB
            </p>

            {/* WELCOME */}
            <div className="mt-12">
              <h1 className="font-display text-4xl font-bold text-text">
                Welcome to Makhusha HUB
              </h1>

              <p className="mt-3 font-body text-sm text-text-muted">
                Complete your account setup to get started.
              </p>
            </div>

            {/* SETUP FORM */}
            <form className="mt-10 space-y-6">

              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="font-body text-sm text-text"
                >
                  Full name
                </label>

                <input
                  id="fullName"
                  type="text"
                  defaultValue="Sarah Johnson"
                  readOnly
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-3 font-body text-sm text-text outline-none"
                />
              </div>

              {/* EMAIL */}
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
                  defaultValue="sarah@example.com"
                  readOnly
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-3 font-body text-sm text-text outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="font-body text-sm text-text"
                >
                  Create password
                </label>

                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-12 font-body text-sm text-text outline-none transition focus:border-accent"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition hover:text-text"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="font-body text-sm text-text"
                >
                  Confirm password
                </label>

                <div className="relative mt-2">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-12 font-body text-sm text-text outline-none transition focus:border-accent"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted transition hover:text-text"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90"
              >
                Complete account setup
              </button>

            </form>

          </div>
        </div>

      </section>
    </main>
  );
}