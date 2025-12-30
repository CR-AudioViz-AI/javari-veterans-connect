// app/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════
// VETERANS CONNECT HUB - Landing Page
// ═══════════════════════════════════════════════════════════════════════════════
// Monday, December 30, 2025, 3:15 PM EST
// Social Impact Module - Supporting Those Who Served
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Heart, Briefcase, GraduationCap, Users, Award,
  Phone, MapPin, FileText, Home, DollarSign, Brain,
  ChevronRight, Star, Menu, X, ArrowRight
} from 'lucide-react';

const STATS = [
  { value: '19M+', label: 'U.S. Veterans', icon: Shield },
  { value: '200K+', label: 'Transition Annually', icon: Briefcase },
  { value: '11-20%', label: 'Experience PTSD', icon: Heart },
  { value: '$0', label: 'Platform Cost', icon: DollarSign },
];

const FEATURES = [
  {
    icon: Briefcase,
    title: 'Career Transition Center',
    description: 'Military-to-civilian resume translation, job matching with veteran-friendly employers, interview coaching, and skills certification programs.',
    color: 'from-blue-500 to-indigo-600',
    features: ['Resume Builder', 'Job Matching', 'Interview Prep', 'Skills Translation']
  },
  {
    icon: Heart,
    title: 'Mental Health & Wellness',
    description: 'Confidential resources for PTSD, anxiety, depression. Connect with veteran peer counselors and licensed therapists who understand military culture.',
    color: 'from-red-500 to-rose-600',
    features: ['Crisis Support', 'Peer Counseling', 'Therapy Matching', 'Wellness Tools']
  },
  {
    icon: FileText,
    title: 'Benefits Navigator',
    description: 'AI-powered guidance through VA benefits, disability claims, education benefits (GI Bill), and healthcare enrollment. Never leave benefits on the table.',
    color: 'from-amber-500 to-orange-600',
    features: ['Claim Assistance', 'GI Bill Guide', 'Healthcare Enrollment', 'Benefit Calculator']
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Access to GI Bill optimization, scholarship databases, certification programs, and partnerships with veteran-friendly universities.',
    color: 'from-green-500 to-emerald-600',
    features: ['GI Bill Optimizer', 'Scholarships', 'Certifications', 'University Partners']
  },
  {
    icon: Home,
    title: 'Housing & Finance',
    description: 'VA home loan guidance, financial literacy programs, veteran housing assistance, and connections to veteran-owned financial advisors.',
    color: 'from-purple-500 to-violet-600',
    features: ['VA Loan Guide', 'Financial Planning', 'Housing Assistance', 'Credit Building']
  },
  {
    icon: Users,
    title: 'Veteran Community',
    description: 'Connect with fellow veterans by branch, era, MOS, and location. Find mentors, join local chapters, and build lasting connections.',
    color: 'from-cyan-500 to-teal-600',
    features: ['Branch Networks', 'Local Chapters', 'Mentorship', 'Events Calendar']
  },
];

const BRANCHES = [
  { name: 'Army', members: '485K+' },
  { name: 'Navy', members: '347K+' },
  { name: 'Air Force', members: '329K+' },
  { name: 'Marines', members: '186K+' },
  { name: 'Coast Guard', members: '42K+' },
  { name: 'Space Force', members: '8K+' },
];

export default function VeteransConnectPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C5A572] to-[#8B7355] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Veterans Connect</span>
                <span className="text-[#C5A572] text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white transition">Resources</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition">Benefits</a>
              <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
              <a href="#crisis" className="text-red-400 hover:text-red-300 transition font-medium">Crisis Help</a>
              <a 
                href="/signup"
                className="px-4 py-2 bg-gradient-to-r from-[#C5A572] to-[#8B7355] text-white font-medium rounded-lg hover:opacity-90 transition"
              >
                Join Free
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1628] border-t border-white/10 p-4 space-y-3">
            <a href="#features" className="block text-gray-300 py-2">Resources</a>
            <a href="#benefits" className="block text-gray-300 py-2">Benefits</a>
            <a href="#community" className="block text-gray-300 py-2">Community</a>
            <a href="#crisis" className="block text-red-400 py-2 font-medium">Crisis Help</a>
            <a href="/signup" className="block w-full text-center py-3 bg-[#C5A572] text-white rounded-lg">
              Join Free
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full text-sm text-[#C5A572] mb-8"
          >
            <Award className="w-4 h-4" />
            <span>A CR AudioViz AI Social Impact Initiative</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            You Served Your Country.
            <br />
            <span className="bg-gradient-to-r from-[#C5A572] to-[#FFD700] bg-clip-text text-transparent">
              Now Let Us Serve You.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Veterans Connect Hub provides comprehensive, free support for military veterans 
            and their families. Career transition, mental health resources, benefits navigation, 
            and a community that understands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="/signup"
              className="group px-8 py-4 bg-gradient-to-r from-[#C5A572] to-[#8B7355] text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#crisis"
              className="px-8 py-4 border border-red-500/50 text-red-400 font-semibold rounded-xl hover:bg-red-500/10 transition flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Crisis Support: 988
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <stat.icon className="w-6 h-6 text-[#C5A572] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Support for Every Need
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From career transition to mental health, we've got you covered with 
              resources built specifically for veterans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#C5A572]/50 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((f, j) => (
                    <span key={j} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Communities */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect With Your Branch
            </h2>
            <p className="text-gray-400">Find fellow veterans from your service branch</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANCHES.map((branch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-[#C5A572]/50 transition cursor-pointer"
              >
                <div className="text-lg font-semibold text-white mb-1">{branch.name}</div>
                <div className="text-sm text-[#C5A572]">{branch.members}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section id="crisis" className="py-20 bg-gradient-to-b from-red-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-2xl">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Immediate Support?
            </h2>
            <p className="text-gray-300 mb-6">
              If you or someone you know is in crisis, help is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:988"
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Veterans Crisis Line: 988 (Press 1)
              </a>
              <a
                href="sms:838255"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition"
              >
                Text: 838255
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Chat online at VeteransCrisisLine.net
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Veterans Connect Today
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Free access to comprehensive resources. Because your service matters.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A572] to-[#8B7355] text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            Create Free Account
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#C5A572]" />
              <span className="text-white font-semibold">Veterans Connect Hub</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
