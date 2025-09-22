import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { useLocation } from "wouter";

interface Product {
    id: number
    slug: string
    brand: string
    name: string
    basePrice: number
    media: {
        baseLayer: string
        views: string[]
        viewLayers: Record<string, string>
    }
}

const products: Product[] = [
    {
        id: 1,
        slug: "toyota-corolla",
        brand: "Toyota",
        name: "Corolla",
        basePrice: 28500,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: { front: "/layers/astra-gt/base_front.png" },
        },
    },
    {
        id: 2,
        slug: "toyota-camry",
        brand: "Toyota",
        name: "Camry",
        basePrice: 38000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: { front: "/layers/astra-gt/base_front.png" },
        },
    },
    {
        id: 3,
        slug: "vw-golf",
        brand: "Volkswagen",
        name: "Golf",
        basePrice: 30000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: { front: "/layers/astra-gt/base_front.png" },
        },
    },
    {
        id: 4,
        slug: "vw-passat",
        brand: "Volkswagen",
        name: "Passat",
        basePrice: 35000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: { front: "/layers/astra-gt/base_front.png" },
        },
    },
]

function Home() {
    const [location, setLocation] = useLocation();

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Build Your Dream Car
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                    Realistic visualization and full configuration control
                </p>
                <Button onClick={() => setLocation('/catalog')} size="lg" className="rounded-2xl px-8">
                    Start Configuring
                </Button>
            </section>

            {/* Features */}
            <section className="py-16 px-6 grid gap-8 md:grid-cols-3 text-center">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Configurator</h3>
                    <p className="text-muted-foreground">
                        Build your car in just a few clicks and see the result instantly.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Realistic Visualization</h3>
                    <p className="text-muted-foreground">
                        Detailed images and multiple viewing angles.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Online Ordering</h3>
                    <p className="text-muted-foreground">
                        Place your order immediately after configuration.
                    </p>
                </div>
            </section>

            {/* Featured Models */}
            <section className="py-20 px-6 bg-muted">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Models</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((p) => (
                        <Card key={p.id} className="overflow-hidden">
                            <CardHeader>
                                <CardTitle onClick={() => setLocation('/catalog/' + p.slug)}
                                           className="flex justify-between items-center"
                                >
                                    <span>
                                        {p.brand} {p.name}
                                    </span>
                                    <Badge variant="secondary">${p.basePrice}</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={p.media.baseLayer}
                                    alt={`${p.brand} ${p.name}`}
                                    className="w-full h-40 object-contain"
                                />
                            </CardContent>
                            <CardFooter>
                                <Button onClick={() => setLocation('/catalog/' + p.slug)} className="w-full">Configure</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Start Building Your Car Today
                </h2>
                <Button onClick={() => setLocation('/catalog')} size="lg" variant="secondary" className="rounded-2xl px-8">
                    Start Configuring
                </Button>
            </section>
        </div>
    )
}

export default Home