'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitTalkPage() {
  // Individual state for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [bio, setBio] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Your Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkgbyrzz';

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          title,
          description,
          type,
          bio,
          submittedAt: new Date().toISOString()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
        setTitle('');
        setDescription('');
        setType('');
        setBio('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 bg-purple-300 opacity-20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-72 w-72 bg-pink-300 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block">Submit a Talk</span>
              <span className="block text-2xl sm:text-3xl mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Share Your Expertise
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Join Perth's vibrant startup community as a speaker. Share your journey, insights, and expertise with fellow entrepreneurs and innovators.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {isSubmitted ? (
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600 mb-8">
                  Your talk proposal has been submitted successfully. We'll review it and get back to you within a few days.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Submit Another Talk
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 space-y-8">
              {submitError && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-800">{submitError}</p>
                </div>
              )}

              {/* Personal Info Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 pb-4 border-b border-gray-200">
                  About You
                </h2>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                    Speaker Bio *
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) {
                        setBio(e.target.value);
                      }
                    }}
                    required
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about yourself, your background, and experience..."
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    {bio.length}/500 characters
                  </p>
                </div>
              </div>

              {/* Talk Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 pb-4 border-b border-gray-200">
                  Talk Details
                </h2>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Talk Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) {
                        setTitle(e.target.value);
                      }
                    }}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="The Journey from Idea to IPO"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    {title.length}/100 characters
                  </p>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Talk Category *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category...</option>
                    <option value="founder">Founder Story / Journey</option>
                    <option value="technical">Technical Deep Dive</option>
                    <option value="growth">Growth / Marketing</option>
                    <option value="product">Product Management / Design</option>
                    <option value="funding">Funding / Investment</option>
                    <option value="legal">Legal / Operations</option>
                    <option value="industry">Industry Insights / Trends</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Talk Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      if (e.target.value.length <= 1000) {
                        setDescription(e.target.value);
                      }
                    }}
                    required
                    rows={6}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe your talk, key takeaways, and why it's relevant to the startup community..."
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    {description.length}/1000 characters
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {submitting ? 'Submitting...' : 'Submit Talk Proposal'}
                </button>
                <p className="mt-4 text-center text-xs text-gray-500">
                  We review all submissions and will contact you if your talk is selected.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {currentYear} Morning Startup Perth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}