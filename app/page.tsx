
'use client'

import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '', type: 'general' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="Influx Business Solutions" className="h-12 w-auto" />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-teal-600 transition-colors">Industries</button>
              <button onClick={() => scrollToSection('careers')} className="text-gray-700 hover:text-teal-600 transition-colors">Careers</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors">Contact</button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">Services</button>
                <button onClick={() => scrollToSection('industries')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">Industries</button>
                <button onClick={() => scrollToSection('careers')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">Careers</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-teal-600 transition-colors">Contact</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Talent with <span className="text-teal-600">Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your trusted partner for staffing, recruitment, and workforce solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              onClick={() => {
                setFormData({...formData, type: 'hire'})
                scrollToSection('contact')
              }}
            >
              Hire Talent
            </button>
            <button 
              className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors"
              onClick={() => {
                setFormData({...formData, type: 'apply'})
                scrollToSection('careers')
              }}
            >
              Apply for Jobs
            </button>
            <button 
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="text-gray-700 text-sm">End-to-End Recruitment (Tech & Non-Tech)</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="text-gray-700 text-sm">Payroll & Workforce Solutions</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="text-gray-700 text-sm">Strong Client Network Across Industries</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="text-gray-700 text-sm">Dedicated Support for Startups & Enterprises</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Influx Business Solutions, we bridge the gap between employers and job seekers by delivering reliable, efficient, and tailored recruitment solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Though a young and dynamic company, we have already built strong partnerships with leading clients across technology and non-technology sectors.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our mission is simple: to connect the right talent with the right opportunity, while helping businesses scale with confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Vision</h3>
                <p className="text-gray-600">To become a trusted workforce solutions partner recognized for integrity, speed, and quality.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Values</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Professionalism</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Transparency</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Client-Centric Approach</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive suite of staffing and recruitment services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Permanent Recruitment</h3>
              <p className="text-gray-600">Sourcing the best-fit candidates for long-term roles.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Contract Staffing</h3>
              <p className="text-gray-600">Flexible workforce solutions for project-based needs.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Payroll Management</h3>
              <p className="text-gray-600">Hassle-free payroll outsourcing for compliance and efficiency.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-teal-600 text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Training & Upskilling</h3>
              <p className="text-gray-600">Equipping candidates with skills to match industry needs.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="text-teal-600 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Startup HR Support</h3>
              <p className="text-gray-600">Helping startups set up and streamline their workforce functions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clients & Industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve clients across multiple industries, reflecting our adaptability and commitment to delivering solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {['IT', 'BPO', 'Manufacturing', 'Retail', 'BFSI', 'Startups'].map((industry) => (
              <div key={industry} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Careers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Looking for your next big opportunity? We connect you with top employers across industries.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-2">Submit Your Resume Today!</h3>
            <p className="text-gray-600 text-center mb-6">
              Upload your resume and we'll match you with the right opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors cursor-pointer">
                  <div className="text-gray-400 text-2xl mb-2">📄</div>
                  <p className="text-sm text-gray-600">Click to upload or drag and drop your resume</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors">
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to find the perfect talent or your next opportunity? Get in touch with us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-teal-600 text-2xl">📧</div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@influxsolutions.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-teal-600 text-2xl">📱</div>
                  <div>
                    <p className="font-medium text-gray-900">Phone/WhatsApp</p>
                    <p className="text-gray-600">+91 7054450506</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-6">
                {formData.type === 'hire' ? 'Tell us about your hiring needs' : 
                 formData.type === 'apply' ? 'Let us know what opportunities you\'re looking for' : 
                 'We\'d love to hear from you'}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={
                      formData.type === 'hire' ? 'Tell us about the positions you need to fill...' :
                      formData.type === 'apply' ? 'Tell us about your career goals and experience...' :
                      'How can we help you?'
                    }
                    required 
                  />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.jpg" alt="Influx Business Solutions" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Connecting talent with opportunity through reliable, efficient, and tailored recruitment solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('careers')} className="block text-gray-400 hover:text-white transition-colors">Careers</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@influxsolutions.co.in</p>
                <p>+91 7054450506</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Influx Business Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
