'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  // Individual state for each field (like the working submit-talk form)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Your Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkgbyrzz';

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          message,
          fullName: `${firstName} ${lastName}`,
          formType: 'Contact Form',
          submittedAt: new Date().toISOString()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('General Inquiry');
        setMessage('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
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
              <span className="block">Get In Touch</span>
              <span className="block text-2xl sm:text-3xl mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                We'd Love to Hear From You
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Questions about events? Interested in sponsoring? Want to get involved? Drop us a message and we'll get back to you soon.
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thanks for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Send Another Message
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

              {/* Contact Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 pb-4 border-b border-gray-200">
                  Your Details
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 pb-4 border-b border-gray-200">
                  Your Message
                </h2>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sponsorship Inquiry">Sponsorship Inquiry</option>
                    <option value="Speaker Inquiry">Speaker Inquiry</option>
                    <option value="Event Question">Event Question</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us what's on your mind..."
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Please be as detailed as possible so we can best assist you.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Other Ways to Connect</h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Our Slack</h3>
              <p className="text-gray-600 mb-4">Connect with 500+ Perth startup founders and innovators</p>
              <a href="https://morningstartup.slack.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
                Join Slack Community →
              </a>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attend an Event</h3>
              <p className="text-gray-600 mb-4">Join us every Tuesday morning for coffee and connections</p>
              <a href="https://www.meetup.com/morning-startup-perth/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
                View Upcoming Events →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
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