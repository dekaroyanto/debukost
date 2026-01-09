// components/KosList.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const kosData = [
    {
        id: 1,
        name: "Kamar Mawar",
        price: "Rp1.200.000/bulan",
        location: "Cirebon",
        image:
            "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Kamar Melati",
        price: "Rp900.000/bulan",
        location: "Cirebon",
        image:
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Kamar Anggrek",
        price: "Rp1.500.000/bulan",
        location: "Cirebon",
        image:
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export default function KosList() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {kosData.map((kos) => (
                <Card key={kos.id} className="shadow-md overflow-hidden">
                    <img
                        src={kos.image}
                        alt={kos.name}
                        className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                        <CardTitle>{kos.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">{kos.location}</p>
                        <p className="font-semibold">{kos.price}</p>
                        <Button className="mt-4 w-full">Detail</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}