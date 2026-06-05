import Image from 'next/image'
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineUserGroup, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt } from 'react-icons/hi2'

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Story Diagonal Split Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#D4A574] to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Diagonal Split Layout */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
              {/* Story Content */}
              <div className="order-2 lg:order-1 space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Our Story of
                    <span className="block text-[#F4E4C1]">Precious Moments</span>
                  </h1>
                  <div className="w-24 h-1 bg-[#F4E4C1] rounded-full"></div>
                </div>

                <div className="space-y-6 text-lg text-white/90">
                  <p className="text-xl leading-relaxed">
                    Vision Ultimate Studio has become Ahmedabad's trusted choice for milestone photography, 
                    specializing in capturing life's most precious moments from newborn shoots to birthday celebrations.
                  </p>
                  
                  <p>
                    Our patient, cooperative team creates beautiful setups with perfectly arranged props and backgrounds. 
                    Located in Motera's Swarnim Business Hub, we've earned 4.9 stars by making every photoshoot 
                    an amazing experience for families.
                  </p>

                  <p>
                    We understand that childhood moments are fleeting. That's why we've dedicated ourselves to 
                    creating a comfortable, nurturing environment where your little ones can be themselves while 
                    we capture their authentic joy and wonder.
                  </p>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F4E4C1]">150+</div>
                    <div className="text-white/80">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F4E4C1]">4.9★</div>
                    <div className="text-white/80">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F4E4C1]">5+</div>
                    <div className="text-white/80">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Overlapping Image Frames */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative grid grid-cols-2 gap-6 transform rotate-3">
                  {/* Main Studio Image */}
                  <div className="col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl shadow-black/30 transform -rotate-2">
                    <Image
                      src="/images/business-4.jpg"
                      alt="Photography studio interior with lighting equipment and backdrops"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                      unoptimized
                    />
                  </div>
                  
                  {/* Photographer at Work */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl shadow-black/20 transform rotate-1">
                    <Image
                      src="/images/business-5.jpg"
                      alt="Family photographer working with baby during photoshoot"
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Professional Equipment */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl shadow-black/20 transform -rotate-1">
                    <Image
                      src="/images/business-10.jpg"
                      alt="Professional camera equipment macro close up lens"
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#F4E4C1]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-16 text-white fill-current">
            <path d="M0,120 L1200,120 L1200,60 Q600,0 0,60 Z"></path>
          </svg>
        </div>
      </section>

      {/* Team Floating Cards Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[#D4A574]">Creative Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patient photographers who specialize in creating comfortable experiences for babies and families
            </p>
          </div>

          {/* Asymmetric Team Cards Layout */}
          <div className="relative">
            {/* Lead Photographer Card */}
            <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-24 mb-16 lg:mb-0">
              <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] p-8 rounded-3xl shadow-2xl shadow-[#D4A574]/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6">
                  <Image
                    src="/images/business-5.jpg"
                    alt="Lead photographer working with clients"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    unoptimized
                  />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Lead Photographer</h3>
                  <p className="text-white/90 mb-4">Specializing in milestone photography and patient work with babies</p>
                  <div className="flex justify-center space-x-2">
                    <HiOutlineHeart className="w-6 h-6" />
                    <HiOutlineSparkles className="w-6 h-6" />
                    <HiOutlineUserGroup className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Assistant Card */}
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto lg:-mt-32">
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4A574] to-[#8B4513] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiOutlineSparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Studio Assistant</h3>
                  <p className="text-gray-600 mb-4">Expert in prop arrangement and creating beautiful setups</p>
                  <div className="text-sm text-[#D4A574] font-medium">Props & Setup Specialist</div>
                </div>
              </div>
            </div>

            {/* Team Values Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 text-center max-w-xs">
                <HiOutlineHeart className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Patient & Caring</h4>
                <p className="text-sm text-gray-600">We work at your baby's pace to capture authentic moments</p>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineUserGroup className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Experienced Team</h4>
              <p className="text-gray-600">Specialists in baby and family photography</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineHeart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Patient Approach</h4>
              <p className="text-gray-600">Making babies comfortable during shoots</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineSparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Creative Vision</h4>
              <p className="text-gray-600">Beautiful setups and artistic compositions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Icon Grid Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-[#D4A574]">Special</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do - from the first consultation to delivering your precious memories
            </p>
          </div>

          {/* Asymmetric Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Large Featured Value */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#8B4513] p-12 rounded-3xl h-full flex flex-col justify-center text-white shadow-2xl shadow-[#D4A574]/20">
                <HiOutlineHeart className="w-16 h-16 mb-8 text-[#F4E4C1]" />
                <h3 className="text-4xl font-bold mb-6">Patient & Gentle</h3>
                <p className="text-xl mb-6 text-white/90">
                  We understand that working with babies requires infinite patience. Our photographers are trained 
                  to work at your child's pace, creating a comfortable environment where natural expressions shine through.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1]" />
                    <span>No rushing - we work at baby's pace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1]" />
                    <span>Comfortable studio environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1]" />
                    <span>Experienced with babies of all ages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Quality */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-xl flex items-center justify-center mb-6">
                <HiOutlineBolt className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Quality</h3>
              <p className="text-gray-600">
                High-end equipment and professional lighting ensure every photo meets our exacting standards.
              </p>
            </div>

            {/* Beautiful Setups */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-xl flex items-center justify-center mb-6">
                <HiOutlineSparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beautiful Setups</h3>
              <p className="text-gray-600">
                Perfectly arranged props and backgrounds create magical scenes for your milestone photos.
              </p>
            </div>

            {/* Cooperative Team */}
            <div className="lg:col-span-2 bg-gradient-to-r from-[#F4E4C1] to-[#D4A574] p-8 rounded-2xl shadow-xl shadow-[#D4A574]/20">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineUserGroup className="w-8 h-8 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">Cooperative & Friendly</h3>
                  <p className="text-xl text-white/90 mb-6">
                    Our team's cooperative nature and friendly approach has earned us countless five-star reviews. 
                    We work with families to create exactly the vision they have in mind.
                  </p>
                  <button className="bg-white text-[#D4A574] px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 inline-flex items-center space-x-2">
                    <span>Read Our Reviews</span>
                    <HiOutlineArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Amazing Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-xl flex items-center justify-center mb-6">
                <HiOutlineCheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Amazing Experience</h3>
              <p className="text-gray-600">
                From booking to delivery, we ensure every step of your photography experience is seamless and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Tour Slider Section */}
      <section className="py-32 bg-[#D4A574] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] via-transparent to-[#8B4513] opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Virtual Studio Tour
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take a look inside our professional photography studio equipped with everything needed 
              for beautiful milestone photography
            </p>
          </div>

          {/* Studio Tour Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tour Images */}
            <div className="space-y-8">
              {/* Main Studio Space */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl shadow-black/30 group">
                <Image
                  src="/images/business-7.jpg"
                  alt="Soft natural lighting photography studio with white backdrop"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Main Studio Space</h4>
                  <p className="text-white/90">Natural lighting with professional backdrop systems</p>
                </div>
              </div>

              {/* Props and Setup Area */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl shadow-black/20 group">
                  <Image
                    src="/images/business-9.jpg"
                    alt="Photography props for baby photoshoot colorful setup"
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl shadow-black/20 group">
                  <Image
                    src="/images/business-4.jpg"
                    alt="Photography studio interior with lighting equipment"
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            {/* Studio Features */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-6">Studio Features</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F4E4C1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineSparkles className="w-6 h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Professional Lighting</h4>
                      <p className="text-white/80">Soft, natural lighting setups that create beautiful, even illumination for baby photography</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F4E4C1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineCheckCircle className="w-6 h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Safety First</h4>
                      <p className="text-white/80">Baby-proofed environment with rounded edges, clean surfaces, and comfortable temperature</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F4E4C1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineHeart className="w-6 h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Comfort Zone</h4>
                      <p className="text-white/80">Quiet, calm atmosphere designed to keep babies relaxed and happy during shoots</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F4E4C1] rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineBolt className="w-6 h-6 text-[#8B4513]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Props & Backdrops</h4>
                      <p className="text-white/80">Extensive collection of age-appropriate props and beautiful background options</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#F4E4C1] text-[#8B4513] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-colors duration-300 inline-flex items-center justify-center space-x-3">
                <span>Schedule Studio Visit</span>
                <HiOutlineArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#F4E4C1]/20 rounded-full blur-xl"></div>
      </section>

      {/* Awards Ticker Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recognition & <span className="text-[#D4A574]">Awards</span>
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by 150+ families with consistently amazing results
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4.9</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Star Rating</h4>
              <p className="text-gray-600">From 150+ happy families</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineHeart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Most Loved</h4>
              <p className="text-gray-600">Photography studio in Motera</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">Professional standards guaranteed</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineSparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Creative Excellence</h4>
              <p className="text-gray-600">Beautiful, artistic compositions</p>
            </div>
          </div>

          {/* Client Success Metrics */}
          <div className="bg-gradient-to-r from-[#F4E4C1] to-[#D4A574] rounded-3xl p-12">
            <div className="text-center text-white mb-12">
              <h3 className="text-3xl font-bold mb-4">Client Success Stories</h3>
              <p className="text-xl text-white/90">The numbers that matter most to us</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-white/90">Families Served</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/90">Photo Sessions</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/90">Return Clients</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}