"use client";
import { Check, Users, Maximize, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RoomTypeCard = ({ room }) => {
  const handleWhatsAppBooking = () => {
    // Nomor WhatsApp (format internasional tanpa 0)
    const phoneNumber = "62882006487100"; // 0882006487100
    const message = `Halo Admin Deris Kost,

Saya tertarik untuk booking kamar dengan detail berikut:

📍 Tipe Kamar: ${room.type}
💰 Harga: Rp ${room.price.toLocaleString()}/bulan
👥 Kapasitas: ${room.capacity} orang
📐 Ukuran: ${room.size} m²

Apakah kamar ini masih tersedia? Saya ingin mengetahui:
1. Proses booking
2. Syarat dan ketentuan
3. Ketersediaan untuk bulan depan

Terima kasih.`;

    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buat WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={room.image}
              alt={room.type}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            {room.isAvailable ? (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                Tersedia
              </Badge>
            ) : (
              <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                Terisi
              </Badge>
            )}
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{room.type}</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1 text-gray-600">
                  <Users className="w-4 h-4" />
                  {room.capacity} orang
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <Maximize className="w-4 h-4" />
                  {room.size} m²
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                Rp {room.price.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">/bulan</p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{room.description}</p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {room.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleWhatsAppBooking}
            className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Pesan via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeCard;
