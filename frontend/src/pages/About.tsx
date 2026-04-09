import { Building2, Target, Eye, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gray-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">BuildMart</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Building trust, delivering quality — your reliable construction materials partner since 2009.
          </p>
        </div>
      </div>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-yellow-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BuildMart was founded in 2009 with a simple vision — to provide construction professionals and homebuilders with the highest quality materials at fair prices. Starting from a small shop, we have grown into one of the most trusted construction material suppliers in the region.
                </p>
                <p>
                  Over the past 15+ years, we have served thousands of customers including individual homebuilders, contractors, real estate developers, and government projects. Our commitment to quality and customer satisfaction has been the cornerstone of our growth.
                </p>
                <p>
                  Today, BuildMart offers a comprehensive range of construction materials including Cement (सीमेंट), Sand (रेत/मिट्टी), Bricks (ईंट), Gravel (बजरी/गिट्टी), Steel (सरिया), Tiles, Paint, and many more. We partner with leading brands to ensure only the best reaches your construction site.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                alt="Construction work"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Customers' },
              { number: '50+', label: 'Products' },
              { number: '1000+', label: 'Projects Delivered' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">{number}</p>
                <p className="text-gray-800 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To be the most trusted and reliable source of construction materials, providing top-quality products at competitive prices with exceptional customer service. We strive to make the building process smoother and more affordable for every customer.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To become the leading construction material supplier in India by leveraging technology and building strong relationships with our customers and partners. We envision a future where quality construction materials are accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core <span className="text-yellow-500">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                desc: 'We never compromise on quality. All our products are sourced from certified manufacturers and undergo rigorous quality checks.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                desc: 'Our customers are at the heart of everything we do. We listen, understand, and deliver beyond expectations.',
              },
              {
                icon: TrendingUp,
                title: 'Continuous Growth',
                desc: 'We continuously expand our product range and improve our services to stay ahead in the ever-evolving construction industry.',
              },
              {
                icon: Building2,
                title: 'Industry Expertise',
                desc: 'With 15+ years of experience, we understand the construction industry inside out and provide expert guidance to our clients.',
              },
              {
                icon: Target,
                title: 'Reliability',
                desc: 'When we commit to a delivery, we deliver. Our track record of on-time deliveries speaks for itself.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                desc: 'We believe in transparent pricing and honest communication. No hidden charges, no surprises.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
