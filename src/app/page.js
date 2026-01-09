'use client';

import { Search, Star, MapPin, Shield, Clock, Award, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import RoomTypeCard from '@/components/RoomTypeCard';
// import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const propertyData = {
  name: "Debu Kost",
  location: "Cirebon",
  rating: 4.8,
  totalReviews: 142,
  description: "Kost premium dengan fasilitas lengkap di Kota Cirebon. Lingkungan nyaman dan strategis dekat kampus dan perkantoran.",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop",
  price: 2500000,
  type: "Kos Premium",
  capacity: 1,
  amenities: [
    { icon: 'wifi', label: 'WiFi Cepat' },
    { icon: 'parking', label: 'Parkir Aman' },
    { icon: 'gym', label: 'Gym' },
    { icon: 'food', label: 'Dapur Bersama' }
  ]
};

const roomTypes = [
  {
    type: "Standard Room",
    price: 1500000,
    size: 12,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    description: "Kamar nyaman dengan tempat tidur single, meja belajar, dan lemari pakaian.",
    features: ["AC", "Kamar Mandi Dalam", "WiFi", "Laundry"],
    isAvailable: true,
    discount: 10 // diskon 10%
  },
  {
    type: "Deluxe Room",
    price: 2200000,
    size: 18,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop",
    description: "Kamar lebih luas dengan view kota, dilengkapi Mini Bar dan area kerja ergonomis.",
    features: ["AC", "Kamar Mandi Dalam", "WiFi", "Mini Bar", "TV", "Ruang Kerja"],
    isAvailable: true,
    discount: 15 // diskon 15%
  },
  {
    type: "Family Room",
    price: 3500000,
    size: 25,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop",
    description: "Kamar keluarga dengan double bed, area duduk terpisah, dan fasilitas lengkap.",
    features: ["AC", "Kamar Mandi Dalam", "WiFi", "TV", "Kulkas", "Sofa"],
    isAvailable: false,
    discount: 20 // diskon 20% jika tersedia
  }
];

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Keamanan 24/7",
    description: "CCTV dan satpam berjaga untuk kenyamanan Anda"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fleksibel",
    description: "Sewa bulanan atau tahunan sesuai kebutuhan"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Bersertifikat",
    description: "Terdaftar resmi dan memiliki izin operasional"
  }
];

const facilities = [
  {
    name: "Ruang Tamu",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Gym",
    image: "https://images.unsplash.com/photo-1721394747060-7cfc57104f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Dapur Bersama",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Area Parkir",
    image: "https://images.unsplash.com/photo-1726489554330-19c9ccb21bf2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function HomePage() {
  const handleWhatsApp = () => {
    const phoneNumber = '62882006487100';
    const message = 'Halo Debu Kost, saya tertarik untuk mendapatkan informasi lebih lanjut.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+62882006487100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1920&auto=format&fit=crop')`
          }}
        />

        <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Selamat Datang di
              <span className="block text-blue-500 mt-2">Debu Kost Cirebon</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Kost premium dengan fasilitas lengkap di jantung Kota Cirebon.
              Kenyamanan dan keamanan terjamin untuk pengalaman tinggal terbaik.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm">Kamar Tersedia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Keamanan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">1 Gbps</div>
              <div className="text-sm">Wifi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">10 Menit</div>
              <div className="text-sm">Ke Kampus</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Property Overview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto -mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Debu Kost Cirebon</h2>
          <div className="flex items-center justify-center gap-4 text-gray-600 flex-wrap">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Harjamukti Kota Cirebon
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={propertyData.image}
                alt="Debu Kost Cirebon"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <PropertyCard property={propertyData} />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mengapa Memilih Debu Kost?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami memberikan pengalaman tinggal terbaik dengan fasilitas premium dan pelayanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Types */}
        <div className="mb-16" id="kamar">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pilihan Kamar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai tipe kamar dengan fasilitas lengkap untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="space-y-8">
            {roomTypes.map((room, index) => (
              <RoomTypeCard key={index} room={room} />
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16" id="fasilitas">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Debu Kost</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai fasilitas premium untuk mendukung kenyamanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-lg font-semibold">{facility.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Facilities */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fasilitas Lainnya</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "WiFi", "AC", "Laundry Service",
                "Gym", "Dapur Bersama", "Parkir Luas"
              ].map((facility, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm font-medium text-gray-800">{facility}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white" id="contact">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Siap Tinggal di Debu Kost?</h2>
            <p className="text-lg mb-8">
              Hubungi kami sekarang untuk mendapatkan informasi lengkap, penawaran spesial, dan booking kamar impian Anda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Sekarang
              </Button>
            </div>

            <p className="text-sm mt-6 text-white/80">
              Respon cepat dalam 5 menit • Buka 08:00 - 21:00 WIB
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">D</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Debu</span>
                  <span className="text-xl font-bold text-blue-400">Kost</span>
                </div>
              </div>
              <p className="text-gray-400">
                Kost premium dengan fasilitas lengkap di Kota Cirebon.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Lokasi</h4>
              <p className="text-gray-400">
                Harjamukti<br />
                Kota Cirebon<br />
                Jawa Barat
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 0882-0064-87100</p>
                <p>📧 info@debukost.com</p>
                <p>🕒 08:00 - 21:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}