import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

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

function Catalog() {
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const totalPages = Math.max(1, Math.ceil(catalogData.length / pageSize));
    const pageProducts = catalogData.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className="catalog-page-wrapper max-w-7xl mx-auto p-4">
            {/*Head*/}
            <div className="head-wrapper">
                <h2 className={"text-3xl truncate text-center"}>Catalog</h2>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pageProducts.map((p) => (
                    <ProductCard key={p.slug} product={p} />
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