"use client";

import { GraduationCap, TrendingUp, Users, DollarSign, Target, Zap, Shield, BarChart3, Sparkles, CheckCircle2, BookOpen, Calendar, UserCheck, ClipboardList, Video, Bell, CreditCard, Lock, Clock, School, FileText, Settings, Smartphone, Apple } from "lucide-react";

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
            <a href="#solution" className="hover:text-blue-600 transition">Features</a>
            <a href="#revenue" className="hover:text-blue-600 transition">Revenue</a>
            <a href="#traction" className="hover:text-blue-600 transition">Traction</a>
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
            <span className="text-blue-600">School Management</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            AI-powered platform serving 500+ schools, managing 50,000+ students,
            with $2M ARR and growing 40% MoM
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

      {/* Revenue Model Section - KEY FOR INVESTORS */}
      <section id="revenue" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revenue Model</h2>
            <p className="text-xl text-blue-100">Multiple revenue streams with 85% gross margins</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Subscription</h3>
              <div className="text-4xl font-bold text-white mb-3">$99-$499</div>
              <p className="text-blue-100 mb-4">per school/month</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Basic: $99/mo (200 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Pro: $249/mo (500 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Enterprise: $499/mo (unlimited)</span>
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
                  <span className="text-sm">$500K ARR from fees</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Add-ons</h3>
              <div className="text-4xl font-bold text-white mb-3">$50-$200</div>
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
