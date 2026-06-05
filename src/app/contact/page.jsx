'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineChevronRight, HiOutlineStar, HiOutlineHeart } from 'react-icons/hi2';

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The team is really very cooperative and friendly nature. We had done our new baby born photo shoot also 1st bday and 5th Birthday of our son.",
      author: "Khushi Trivedi",
      rating: 5,
      image: "/images/business-8.jpg"
    },
    {
      text: "The team was patient, friendly, and made our baby feel comfortable. The photos turned out beautiful and captured precious moments perfectly.",
      author: "Rajan Mistry", 
      rating: 5,
      image: "/images/business-8.jpg"
    },
    {
      text: "Photographer was very patient and friendly with the baby. All the setups, props and background were beautiful and perfectly arranged.",
      author: "Mitul Patel",
      rating: 5,
      image: "/images/business-8.jpg"
    }
  ];

  const faqs = [
    {
      question: "How patient are photographers with babies during shoots?",
      answer: "Our photographers are exceptionally patient and experienced with babies. We take time to make your little one comfortable and work at their pace to capture the perfect moments.",
      icon: HiOutlineHeart
    },
    {
      question: "What setups and props do you provide for baby photoshoots?",
      answer: "We have beautiful, professionally arranged setups with age-appropriate props and backgrounds. Everything is perfectly arranged to create stunning milestone photos from newborn to birthday celebrations.",
      icon: HiOutlineCheckCircle
    },
    {
      question: "Do you handle multiple milestone shoots for the same family?",
      answer: "Absolutely! Many families return to us for newborn photos, 6-month sessions, first birthdays, and beyond. We love capturing your child's growth journey with consistent quality.",
      icon: HiOutlineStar
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const generateCalendar = () => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Contact Hero Form */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#D4A574] via-gray-700 to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-7.jpg"
            alt="Professional photography studio with natural lighting"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F4E4C1] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#8B4513] rounded-full opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <HiOutlineHeart className="text-[#F4E4C1] text-xl" />
                <span className="text-sm font-medium">Let's Create Magic Together</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Ready to 
                <span className="block text-[#F4E4C1]">Book Your</span>
                <span className="block">Perfect Shot?</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Patient, friendly photographers specializing in baby milestones and birthday celebrations. 
                Beautiful setups that make your little ones comfortable.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="bg-[#F4E4C1] p-4 rounded-full">
                    <HiOutlinePhone className="text-2xl text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call us directly</p>
                    <p className="text-lg font-semibold">091730 31325</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="bg-[#F4E4C1] p-4 rounded-full">
                    <HiOutlineMapPin className="text-2xl text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Visit our studio</p>
                    <p className="text-lg font-semibold">Swarnim Business Hub, GIDC Bhat</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="bg-[#F4E4C1] p-4 rounded-full">
                    <HiOutlineClock className="text-2xl text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Studio hours</p>
                    <p className="text-lg font-semibold">Open · Closes 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Photoshoot</h2>
                <p className="text-gray-600">Tell us about your vision and let's create something beautiful together.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A574] focus:ring-[#D4A574] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A574] focus:ring-[#D4A574] transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A574] focus:ring-[#D4A574] transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photography Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A574] focus:ring-[#D4A574] transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="newborn">Newborn Photography</option>
                    <option value="maternity">Maternity Photoshoot</option>
                    <option value="birthday">Birthday Photography</option>
                    <option value="milestone">Milestone Session</option>
                    <option value="family">Family Portrait</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your vision</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A574] focus:ring-[#D4A574] transition-colors resize-none"
                    placeholder="Share your ideas, themes, or any special requests..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#F4E4C1] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#D4A574] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Your Photoshoot Today
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Location Map */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F4E4C1] via-[#D4A574] to-[#8B4513]"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Visit Our Beautiful Studio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Motera's Swarnim Business Hub, our studio offers a comfortable, 
              welcoming environment for families.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-gray-200 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineMapPin className="text-6xl text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">Swarnim Business Hub, GIDC Bhat</p>
                  </div>
                </div>
              </div>
              
              {/* Floating location card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F4E4C1] p-3 rounded-full">
                    <HiOutlineMapPin className="text-xl text-gray-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Easy to Find</p>
                    <p className="text-sm text-gray-600">Ample parking available</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Details */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-[#F4E4C1] p-3 rounded-full flex-shrink-0">
                      <HiOutlineMapPin className="text-xl text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Studio Address</h4>
                      <p className="text-gray-600">
                        Swarnim Business Hub, GIDC Bhat<br />
                        Motera, Ahmedabad, Gujarat 380005
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-[#D4A574] p-3 rounded-full flex-shrink-0">
                      <HiOutlineClock className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Studio Hours</h4>
                      <p className="text-gray-600">
                        Open Daily<br />
                        Closes at 6:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-[#8B4513] p-3 rounded-full flex-shrink-0">
                      <HiOutlinePhone className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contact Us</h4>
                      <p className="text-gray-600">
                        Call: 091730 31325<br />
                        For directions or queries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Studio Preview */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/business-4.jpg"
                  alt="Photography studio interior with professional equipment"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  unoptimized
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Professional Studio Setup</h4>
                  <p className="text-gray-300">
                    Our studio features professional lighting equipment, beautiful backdrops, 
                    and comfortable spaces designed specifically for family photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-32 bg-gradient-to-br from-[#D4A574] to-gray-800 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4E4C1] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-6">Choose Your Perfect Time</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Select your preferred date and time for your photoshoot. We'll work around your schedule 
              to ensure the best experience for your family.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calendar */}
              <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Date</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendar().slice(0, 35).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`
                        aspect-square rounded-xl text-sm font-medium transition-all duration-200
                        ${selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-[#F4E4C1] text-white shadow-lg scale-105'
                          : 'hover:bg-gray-100 text-gray-700'
                        }
                        ${index < 7 && date.getDate() > 7 ? 'text-gray-300' : ''}
                      `}
                    >
                      {date.getDate()}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Time Slots */}
              <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Time</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200
                        ${selectedTime === time
                          ? 'bg-[#F4E4C1] text-white shadow-lg scale-105'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                {selectedDate && selectedTime && (
                  <div className="mt-8 p-6 bg-[#F4E4C1]/10 rounded-2xl border border-[#F4E4C1]/20">
                    <h4 className="font-semibold text-gray-900 mb-2">Selected Appointment</h4>
                    <p className="text-gray-700">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {selectedTime}
                    </p>
                    <button className="mt-4 w-full bg-[#F4E4C1] text-white py-3 rounded-xl font-semibold hover:bg-[#D4A574] transition-colors">
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Illustrated */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our photography services and studio experience.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#F4E4C1] p-3 rounded-full">
                        <faq.icon className="text-xl text-gray-900" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <HiOutlineChevronRight 
                      className={`text-2xl text-gray-400 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <div className="pl-16">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <button className="bg-[#F4E4C1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#D4A574] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Directly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Final */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-6.jpg"
            alt="Collection of framed family photos on studio wall"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#F4E4C1] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#D4A574] rounded-full opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4E4C1] px-6 py-3 rounded-full mb-8">
              <HiOutlineStar className="text-gray-900" />
              <span className="text-gray-900 font-semibold">4.9/5 Rating • 150+ Happy Families</span>
            </div>
            
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Family of
              <span className="block text-[#F4E4C1]">Happy Customers</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Patient, friendly photographers specializing in baby milestones and birthday celebrations. 
              Beautiful setups that make your little ones comfortable.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Testimonial Slider */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="text-2xl text-[#F4E4C1] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-white font-medium mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">
                      {testimonials[currentTestimonial].author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-300 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-[#F4E4C1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineHeart className="text-2xl text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
                <p className="text-gray-300">Happy Families</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#D4A574] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineStar className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">4.9/5</h3>
                <p className="text-gray-300">Star Rating</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#8B4513] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-300">Satisfaction</p>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="text-center">
              <button className="bg-[#F4E4C1] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Book Your Photoshoot Today
              </button>
              <p className="text-gray-400 mt-4">Join 150+ families who trust us with their precious moments</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}