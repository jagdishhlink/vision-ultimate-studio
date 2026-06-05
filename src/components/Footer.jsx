'use client';

import React from 'react'
import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineStar, HiOutlineArrowRight } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white">
      {/* Top Section */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Brand Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Vision Ultimate Studio</h2>
            <p className="text-xl text-gray-200 mb-4">Capturing life's precious moments with tender care</p>
            <div className="w-20 h-1 bg-[#F4E4C1] rounded-full"></div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: About */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold text-lg mb-4">
                About Us
                <div className="w-8 h-0.5 bg-[#F4E4C1] mt-2"></div>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ahmedabad's trusted choice for milestone photography, specializing in capturing precious moments from newborn shoots to birthday celebrations with patient, cooperative team.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <HiOutlineStar className="h-4 w-4 text-[#F4E4C1] mr-2" />
                  <span className="text-sm font-medium">4.9★ Rated</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                  <span className="text-sm font-medium">150+ Happy Families</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
                <div className="w-8 h-0.5 bg-[#F4E4C1] mt-2"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Photography Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Portfolio Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Book Session
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Photography Services
                <div className="w-8 h-0.5 bg-[#F4E4C1] mt-2"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services#baby" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Newborn Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services#maternity" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Maternity Shoots
                  </Link>
                </li>
                <li>
                  <Link href="/services#birthday" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300">
                    Birthday Photography
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">Baby Milestone Sessions</span>
                </li>
                <li>
                  <span className="text-gray-300">Family Portraits</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Get in Touch
                <div className="w-8 h-0.5 bg-[#F4E4C1] mt-2"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiOutlinePhone className="h-5 w-5 text-[#F4E4C1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <a href="tel:09173031325" className="text-gray-300 hover:text-[#F4E4C1] transition-colors duration-300 font-medium">
                      091730 31325
                    </a>
                    <p className="text-sm text-gray-400">Call for bookings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlineMapPin className="h-5 w-5 text-[#F4E4C1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      Swarnim Business Hub<br />
                      GIDC Bhat, Motera<br />
                      Ahmedabad, Gujarat 380005
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiOutlineClock className="h-5 w-5 text-[#F4E4C1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Open until 6 PM</p>
                    <p className="text-sm text-gray-400">Monday - Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#F4E4C1] to-[#8B4513]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-white text-xl font-bold mb-1">Ready to capture precious moments?</h3>
              <p className="text-white/90">Book your photography session today with our patient, friendly team</p>
            </div>
            <a 
              href="tel:09173031325"
              className="bg-white text-[#8B4513] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center group"
            >
              <HiOutlinePhone className="h-5 w-5 mr-2" />
              Call Now
              <HiOutlineArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#8B4513]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm">
              © 2024 Vision Ultimate Studio. All rights reserved. Creating precious memories in Ahmedabad.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-300 hover:text-[#F4E4C1] text-sm transition-colors duration-300 mt-4 sm:mt-0"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}