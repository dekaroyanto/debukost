import { Search, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Temukan Kost Impian Anda
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            placeholder="Lokasi atau nama kos"
                            className="pl-10 h-12"
                        />
                    </div>

                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            type="date"
                            className="pl-10 h-12"
                        />
                    </div>

                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="w-full h-12 pl-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <option>1 Orang</option>
                            <option>2 Orang</option>
                            <option>3-4 Orang</option>
                            <option>5+ Orang</option>
                        </select>
                    </div>

                    <Button className="h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-lg">
                        Cari Kos
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;