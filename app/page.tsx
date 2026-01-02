"use client";

import { GraduationCap, TrendingUp, Users, DollarSign, Target, Zap, Shield, BarChart3, Sparkles, CheckCircle2, BookOpen, Calendar, UserCheck, ClipboardList, Video, Bell, CreditCard, Lock, Clock, School, FileText, Settings, Smartphone, Apple, Gamepad2, Brain, MessageCircle, Globe, Wifi, Award, Atom, Languages, Calculator, Phone, MessageSquare, Monitor } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">StudentSchool</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#ksa" className="hover:text-blue-600 transition">KSA Market</a>
            <a href="#solution" className="hover:text-blue-600 transition">Features</a>
            <a href="#communication" className="hover:text-blue-600 transition">Communication</a>
            <a href="#games" className="hover:text-blue-600 transition">Gamified Learning</a>
            <a href="#revenue" className="hover:text-blue-600 transition">Revenue</a>
            <a href="#investment" className="hover:text-blue-600 transition">Investment</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Transforming Education Management
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Future of<br />
            <span className="text-blue-600">Education Management</span><br />
            <span className="text-3xl text-slate-700">in Saudi Arabia 🇸🇦</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            AI-powered CRM serving Schools, Universities & Colleges across KSA with gamified learning, 
            Arabic-first design, and Ministry of Education compliance
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">$2M</div>
              <div className="text-sm text-slate-600 mt-1">Annual Revenue</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-slate-600 mt-1">Schools</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">40%</div>
              <div className="text-sm text-slate-600 mt-1">MoM Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* KSA Market Opportunity Section */}
      <section id="ksa" className="py-20 px-6 bg-gradient-to-br from-green-700 to-green-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-7xl mb-4">🇸🇦</div>
            <h2 className="text-5xl font-bold text-white mb-4">Saudi Arabia: The Perfect Market</h2>
            <p className="text-2xl text-green-100 mb-8">$10B+ Education Market • Vision 2030 Aligned • Government-Backed Growth</p>
          </div>

          {/* Vision 2030 Alignment - Major Highlight */}
          <div className="mb-16 p-10 bg-white rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-green-100 rounded-full text-green-800 text-base font-bold mb-4">
                <Target className="w-5 h-5" />
                Perfectly Aligned with Vision 2030
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">Saudi Arabia's National Transformation Plan</h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The Kingdom is investing <span className="font-bold text-green-700">$50B+</span> in education digital transformation. 
                We're positioned to capture this massive government-backed opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                <div className="text-5xl mb-3">📚</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">Digital Education</div>
                <p className="text-slate-700 mb-4">Vision 2030 mandates 100% digital transformation of education sector by 2030</p>
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>We deliver this solution</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                <div className="text-5xl mb-3">🎯</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">Quality of Life</div>
                <p className="text-slate-700 mb-4">Improve parent-school communication and student outcomes - key Vision 2030 pillar</p>
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Our communication hub</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                <div className="text-5xl mb-3">🚀</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">Tech Innovation</div>
                <p className="text-slate-700 mb-4">AI & gamification to create globally competitive education system</p>
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Our AI tutor & games</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Shield className="w-9 h-9 text-green-700" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl mb-1">Ministry of Education Partnership Potential</div>
                    <div className="text-green-100">Positioned for government contracts & nationwide rollout</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-white">$50B+</div>
                  <div className="text-green-200 font-medium">Gov't Education Budget</div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-2">6M+</div>
              <div className="text-green-100 text-lg mb-2">Students</div>
              <p className="text-green-200 text-sm">Across schools, colleges & universities</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-2">$10B+</div>
              <div className="text-green-100 text-lg mb-2">Market Size</div>
              <p className="text-green-200 text-sm">Private education spending annually</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-2">3x</div>
              <div className="text-green-100 text-lg mb-2">Higher ARPU</div>
              <p className="text-green-200 text-sm">Saudi institutions pay premium prices</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-2">2030</div>
              <div className="text-green-100 text-lg mb-2">Target Year</div>
              <p className="text-green-200 text-sm">100% digital education mandate</p>
            </div>
          </div>
          
          {/* KSA-Specific Features */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Built Specifically for Saudi Institutions</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕌</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Prayer Time Integration</h3>
                  <p className="text-green-100">Automatic timetable adjustments for 5 daily prayers across all Saudi regions with Hijri calendar</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Arabic-First Platform</h3>
                  <p className="text-green-100">Native RTL support, Arabic AI, Hijri calendar, and Arabic voice recognition built-in</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">MOE Compliance</h3>
                  <p className="text-green-100">Full compliance with Ministry of Education standards, report formats, and data requirements</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Built-in Communication</h3>
                  <p className="text-green-100">Voice, video & messaging - no third-party apps. Perfect for Saudi data sovereignty requirements</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quranic Studies Module</h3>
                  <p className="text-green-100">Memorization tracking, Tajweed progress monitoring, and digital Mushaf integration</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Gender-Segregated Options</h3>
                  <p className="text-green-100">Separate portals and complete customization for boys and girls schools as per Saudi requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Advantage in KSA */}
          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Why We Win in Saudi Arabia</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-9 h-9 text-green-700" />
                </div>
                <div className="text-white font-bold text-lg mb-2">First-Mover Advantage</div>
                <p className="text-green-100 text-sm">Only Arabic-first, Vision 2030-aligned EdTech CRM in the market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-9 h-9 text-green-700" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Data Sovereignty</div>
                <p className="text-green-100 text-sm">All data hosted in Saudi Arabia - critical for government contracts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-9 h-9 text-green-700" />
                </div>
                <div className="text-white font-bold text-lg mb-2">Government Partnerships</div>
                <p className="text-green-100 text-sm">Positioned for Ministry of Education nationwide rollout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Platform Features */}
      <section id="solution" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Platform Features</h2>
            <p className="text-xl text-slate-600">17+ powerful modules for Schools, Colleges & Universities</p>
          </div>

          {/* Admin/School Management Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <School className="w-7 h-7 text-blue-600" />
              Admin & Management
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">School Management</h4>
                    <p className="text-sm text-slate-600">Profile, settings & academic year management</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Classes & Sections</h4>
                    <p className="text-sm text-slate-600">Create classes (1-10) and sections (A, B, C)</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Subjects Management</h4>
                    <p className="text-sm text-slate-600">Add and assign subjects per class</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Teachers Management</h4>
                    <p className="text-sm text-slate-600">Manage teachers, assign subjects & periods</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Students Management</h4>
                    <p className="text-sm text-slate-600">Enrollment, records & class assignment</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Timetable Management</h4>
                    <p className="text-sm text-slate-600">Period-wise scheduling & teacher mapping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Operations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Clock className="w-7 h-7 text-blue-600" />
              Daily Operations
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Attendance Tracking</h4>
                    <p className="text-sm text-slate-600">Daily tracking with class & student-wise reports</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Homework Management</h4>
                    <p className="text-sm text-slate-600">Daily monitoring & subject-wise reports</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Class Video Management</h4>
                    <p className="text-sm text-slate-600">Upload recorded classes with access control</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Notices & Activities</h4>
                    <p className="text-sm text-slate-600">Announcements with visibility control</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">SMS & Notifications</h4>
                    <p className="text-sm text-slate-600">Automated alerts for attendance & homework</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">In-Platform Communication</h4>
                    <p className="text-sm text-slate-600">Voice calls, video chat & messaging built-in</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Payments & Fees</h4>
                    <p className="text-sm text-slate-600">Fee management, tracking & digital receipts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics & Security */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-blue-600" />
              Analytics & Security
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Reports & Analytics</h4>
                    <p className="text-sm text-slate-600">Attendance, homework & payment summaries</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Security & Access Control</h4>
                    <p className="text-sm text-slate-600">Role-based access & secure data protection</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Digital Documentation</h4>
                    <p className="text-sm text-slate-600">Paperless records & automated reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Mobile App Highlight */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center justify-between flex-wrap gap-8">
              <div className="flex-1 min-w-[300px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Parent Mobile App
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Simple & Transparent Parent View</h3>
                <p className="text-slate-700 mb-6">Everything parents need in one beautiful mobile app</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Daily Timetable</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Homework Updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Class Videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Attendance Status</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Notices & Events</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Fee Payments</span>
                  </div>
                </div>
                
                {/* App Store Badges */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-400 transition shadow-sm">
                    <Apple className="w-8 h-8 text-slate-900" />
                    <div>
                      <div className="text-xs text-slate-600">Download on the</div>
                      <div className="text-sm font-bold text-slate-900">App Store</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-400 transition shadow-sm">
                    <Smartphone className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="text-xs text-slate-600">GET IT ON</div>
                      <div className="text-sm font-bold text-slate-900">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Main Phone Mockup */}
                  <div className="w-48 h-96 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] flex items-center justify-center shadow-2xl border-4 border-slate-800 relative overflow-hidden">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl"></div>
                    
                    {/* App Content */}
                    <div className="text-center px-4 pt-8">
                      <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
                      <div className="text-white font-bold text-lg mb-1">StudentSchool</div>
                      <div className="text-blue-200 text-sm mb-6">Parent Portal</div>
                      
                      {/* Mini Feature Icons */}
                      <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <ClipboardList className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <UserCheck className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Bell className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* iOS & Android Badges on Phone */}
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-200">
                    <Apple className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-200">
                    <Smartphone className="w-7 h-7 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Communication Platform */}
      <section id="communication" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Zero Third-Party Apps
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built-in Communication Hub</h2>
            <p className="text-xl text-slate-600">Everything happens inside your platform - complete control, zero external apps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">Voice Calls</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>One-on-one parent-teacher calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>High-quality HD audio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Call history & recordings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Schedule calls in advance</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Monitor className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">Video Meetings</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Parent-teacher conferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Screen sharing for presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Group video calls (up to 50)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Meeting recordings available</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">In-App Messaging</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time chat (parents ↔ teachers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Group chats by class/section</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>File & image sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Arabic & English support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why This Matters for Investors */}
          <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Why This is a Game-Changer</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Complete Platform Lock-in</div>
                      <div className="text-slate-300 text-sm">Users never leave your ecosystem - massive retention boost</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Data Privacy & Security</div>
                      <div className="text-slate-300 text-sm">All communications encrypted and stored on your servers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Zero Third-Party Fees</div>
                      <div className="text-slate-300 text-sm">No WhatsApp Business API costs or Zoom subscriptions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Rich Analytics</div>
                      <div className="text-slate-300 text-sm">Track all communication patterns, engagement metrics</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">80%</div>
                  <div className="text-blue-200">Higher User Retention</div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">$0</div>
                  <div className="text-blue-200">Third-Party Communication Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-200">Control Over User Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Learning Section */}
      <section id="games" className="py-20 px-6 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Gamepad2 className="w-4 h-4" />
              Game-Changer Feature
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Gamified Learning Platform</h2>
            <p className="text-xl text-purple-100">Increase student engagement by 60% with interactive educational games</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Math Games</h3>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Interactive problem-solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Timed arithmetic challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Geometry puzzles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Multiplication races</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4">
                <Atom className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Physics Lab</h3>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Virtual experiments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>3D simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Motion & force games</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Electricity circuits</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4">
                <Languages className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">English Games</h3>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Vocabulary builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Grammar quizzes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Speech recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Reading comprehension</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rewards</h3>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Points & badges system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Class leaderboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Achievement certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>School-wide competitions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI-Powered Learning */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30">
            <div className="flex items-center justify-between flex-wrap gap-8">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">AI-Powered Learning Assistant</h3>
                </div>
                <p className="text-lg text-purple-100 mb-6">
                  24/7 intelligent tutor providing personalized help in Arabic & English
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Instant Homework Help</div>
                      <div className="text-purple-200 text-sm">Step-by-step problem solving</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Personalized Learning Paths</div>
                      <div className="text-purple-200 text-sm">Adaptive content by skill level</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Predictive Analytics</div>
                      <div className="text-purple-200 text-sm">Early intervention alerts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Arabic Speech Recognition</div>
                      <div className="text-purple-200 text-sm">Perfect for language learning</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <Brain className="w-20 h-20 text-purple-600 mx-auto mb-3" />
                    <div className="text-purple-600 font-bold text-lg">AI Tutor</div>
                    <div className="text-slate-600 text-sm">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section - KEY FOR INVESTORS */}
      <section id="revenue" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revenue Model</h2>
            <p className="text-xl text-blue-100">4 revenue streams with 85% gross margins</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Subscription</h3>
              <div className="text-4xl font-bold text-white mb-3">$199-$699</div>
              <p className="text-blue-100 mb-4">per institution/month</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Basic: $199/mo (200 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Pro: $399/mo (500 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Enterprise: $699/mo (unlimited)</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Transaction Fees</h3>
              <div className="text-4xl font-bold text-white mb-3">2.5%</div>
              <p className="text-blue-100 mb-4">on all payments</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Tuition fee collection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Event registrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Integrated with Saudi banks</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Games</h3>
              <div className="text-4xl font-bold text-white mb-3">$99</div>
              <p className="text-blue-100 mb-4">per game pack/year</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Advanced math games</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Physics lab simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">English language suite</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Add-ons</h3>
              <div className="text-4xl font-bold text-white mb-3">$150-$300</div>
              <p className="text-blue-100 mb-4">per feature/month</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">AI tutoring assistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">White-label branding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Traction & Growth</h2>
            <p className="text-xl text-slate-600">Proven market fit with exponential growth</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Active Schools</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-slate-600 font-medium">Students Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$2M</div>
              <div className="text-slate-600 font-medium">ARR</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-slate-600 font-medium">MoM Growth</div>
            </div>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Revenue Projection</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2">Year 1</div>
                <div className="text-2xl font-bold text-slate-900">$2M</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2">Year 2</div>
                <div className="text-2xl font-bold text-blue-600">$8M</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2">Year 3</div>
                <div className="text-2xl font-bold text-blue-600">$25M</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2">Year 4</div>
                <div className="text-2xl font-bold text-blue-600">$60M</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-2">Year 5</div>
                <div className="text-2xl font-bold text-blue-600">$120M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Ask Section */}
      <section id="investment" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Investment Opportunity</h2>
          <p className="text-xl text-slate-300 mb-12">Join us in transforming education for 100M students worldwide</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-white mb-2">$5M</div>
              <div className="text-slate-400 mb-6">Seed Round</div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Product development & AI features</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Expand to 5,000 schools</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Scale sales & marketing team</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-white mb-2">18 months</div>
              <div className="text-slate-400 mb-6">Runway</div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Reach $8M ARR milestone</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Position for Series A at $50M valuation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span>Capture 10% of target market</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block p-8 bg-blue-600 rounded-2xl">
            <div className="text-white text-lg font-medium mb-2">Contact for Investment</div>
            <div className="text-white text-2xl font-bold">invest@studentschool.com</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">StudentSchool</span>
          </div>
          <p className="text-slate-600">Transforming education, one school at a time.</p>
          <div className="mt-6 text-sm text-slate-500">
            © 2026 StudentSchool. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
