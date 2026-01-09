import { Star, Users, Wifi, Car, Dumbbell, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PropertyCard = ({ property }) => {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img
                    src={property.image}
                    alt={property.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white">
                        {property.type}
                    </Badge>
                </div>
                <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500 hover:bg-amber-600">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        {property.rating}
                    </Badge>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{property.name}</h3>
                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                            <Users className="w-4 h-4" />
                            {property.capacity} orang
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">Rp {property.price.toLocaleString()}</p>
                        <p className="text-gray-500 text-sm">/bulan</p>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                            {amenity.icon === 'wifi' && <Wifi className="w-4 h-4" />}
                            {amenity.icon === 'parking' && <Car className="w-4 h-4" />}
                            {amenity.icon === 'gym' && <Dumbbell className="w-4 h-4" />}
                            {amenity.icon === 'food' && <Utensils className="w-4 h-4" />}
                            <span>{amenity.label}</span>
                        </div>
                    ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Lihat Detail Kamar
                </Button>
            </div>
        </div>
    );
};

export default PropertyCard;