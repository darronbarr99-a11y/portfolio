"use client";

import { useState } from "react";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "DarronBarr_CV_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
      >
        Download Resume
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#0d1f3c] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Download My Resume
                </h3>
                <p className="mb-6 text-sm text-gray-400">
                  Enter your details below and the download will start automatically.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-lg border border-gray-600 bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-lg border border-gray-600 bg-[#0a1628] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="mt-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0a1628] transition-colors hover:bg-gray-200"
                  >
                    Download Resume
                  </button>
                </form>
                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-center text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4 text-4xl">✓</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Thanks, {name.split(" ")[0]}!
                </h3>
                <p className="mb-6 text-sm text-gray-400">
                  Your download has started. Feel free to reach out if you have any questions.
                </p>
                <button
                  onClick={handleClose}
                  className="rounded-lg border border-gray-600 px-6 py-2.5 text-sm font-medium text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
