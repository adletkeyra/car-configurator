import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const catalogData = [
    {
        id: 1,
        slug: "toyota-corolla",
        brand: 'Toyota',
        name: 'Corolla',
        basePrice: 28500,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: {"front": "/layers/astra-gt/base_front.png"}
        }
    },
    {
        id: 2,
        slug: "toyota-camry",
        brand: 'Toyota',
        name: 'Camry',
        basePrice: 38000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: {"front": "/layers/astra-gt/base_front.png"}
        }
    },
    {
        id: 3,
        slug: "vw-golf",
        brand: 'Volkswagen',
        name: 'Golf',
        basePrice: 30000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: {"front": "/layers/astra-gt/base_front.png"}
        }
    },
    {
        id: 4,
        slug: "vw-passat",
        brand: 'Volkswagen',
        name: 'Passat',
        basePrice: 35000,
        media: {
            baseLayer: "/layers/astra-gt/base.png",
            views: ["front", "side", "rear"],
            viewLayers: {"front": "/layers/astra-gt/base_front.png"}
        }
    }
];

const fmt = (n: number) => `$${n.toLocaleString()}`;

function Catalog() {
    const [location, setLocation] = useLocation();
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const totalPages = Math.max(1, Math.ceil(catalogData.length / pageSize));
    const pageProducts = catalogData.slice((page - 1) * pageSize, page * pageSize);

    function goToPage(slug){
        setLocation(slug);
    }

    return (
        <div className="catalog-page-wrapper max-w-7xl mx-auto p-4">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pageProducts.map((p) => (
                    <Card key={p.id} className="group hover:shadow-lg transition-shadow duration-150">
                        <img src={p.media.baseLayer} alt={p.name} className="w-full h-48 object-cover rounded-t-md" />
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-medium text-sm">{p.brand} {p.name}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Slug: {p.slug}</p>
                                </div>
                                <div className="text-right font-semibold">{fmt(p.basePrice)}</div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex items-center justify-between">
                            <Button size="sm" onClick={() => goToPage('/catalog/' + p.slug)}>Configure</Button>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="sm" variant="ghost">Quick view</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-xl">
                                    <DialogHeader>
                                        <DialogTitle>{p.brand} {p.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <img src={p.media.baseLayer} alt={p.name} className="w-full h-56 object-cover rounded" />
                                        <div>
                                            <p className="font-semibold mb-2">{fmt(p.basePrice)}</p>
                                            <p className="text-sm text-muted-foreground mb-3">Slug: {p.slug}</p>
                                            <Button onClick={() => goToPage('/configure/' + p.slug)}>Start config</Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-muted-foreground">Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, pageProducts.length)} of {pageProducts.length}</div>

                <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                        <ChevronLeft size={16} />
                    </Button>

                    <div className="px-3 py-1 border rounded-md">Page {page} / {totalPages}</div>

                    <Button size="sm" variant="ghost" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                        <ChevronRight size={16} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Catalog