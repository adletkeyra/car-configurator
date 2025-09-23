import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Price from "@/components/Price";
import {Badge} from "@/components/ui/badge";
import ProductMainFeatures from "@/components/ProductMainFeatures";

interface Product {
    id: number,
    slug: string,
    brand: string,
    model: string,
    basePrice: number,
    baseSpecs: {
        color: string,
        engine: string,
        horsepower: number,
        drivetrain: string,
        fuel: string,
        acceleration: string,
        consumption: string,
        dimensions: string,
    },
    features: object[],
    media: {
        baseLayer: string,
        views: string[],
        viewLayers: object,
        images: string[]
    },
    reviews: object[]
}

function ProductDetail({slug}){
    const [location, setLocation] = useLocation();

    const product: Product = {
            id: 1,
            slug: "toyota-corolla",
            brand: 'Toyota',
            model: 'Corolla',
            basePrice: 28500,
            baseSpecs: {
                color: 'Glacier White',
                engine: "2.0 TFSI",
                horsepower: 190,
                drivetrain: "AWD",
                fuel: "Gasoline",
                acceleration: "6.9s",
                consumption: "7.8 L/100km",
                dimensions: "4310 x 1796 x 1426 mm",
            },
            features: [
                {
                    name: '0 - 60 mph',
                    value: '6.9s'
                },
                {
                    name: 'Max. engine power',
                    value: '388 hp'
                },
                {
                    name: 'Top track speed',
                    value: '183 mph'
                }
            ],
            media: {
                baseLayer: "/layers/astra-gt/base.png",
                views: ["front", "side", "rear"],
                viewLayers: {"front": "/layers/astra-gt/base_front.png"},
                images: [
                    "https://images-porsche.imgix.net/-/media/646ED7CDD4DF4060A4823F3A9DB8DA22_97CB2E119D8749C19004EC939CD09E96_CZ25W01IX0010911-carrera-side?w=2400&q=45&crop=faces%2Centropy%2Cedges&auto=format",
                    "https://images-porsche.imgix.net/-/media/5D0BB7E042BD4C9DBEF84B5E70482520_73AA748306934B0C9CE20E32231DFCE2_CZ25W01IX0011911-carrera-front?w=704&q=45&dpr=2&auto=format",
                    "/images/cars/a3-3.jpg",
                ],
            },
            reviews: [
                { id: 1, name: "Stefan", rating: 5, content: "Very reliable and fast car." },
                { id: 2, name: "Alla", rating: 4, content: "Comfortable interior, but I would like better multimedia." },
            ],
        };

    return(
        <div className={'product-detail-wrapper'}>
            <div className="main-image-wrapper mt-16">
                    <img src={product.media.images[0]} />
            </div>
            <div className="main-product-info-wrapper max-w-7xl mx-auto p-6 pl-12 pr-12 text-center">
                <div className="brand-name">
                    <h3 className={'text-3xl'}>{product.brand}</h3>
                </div>
                <div className="model-name">
                    <h1 className={'text-6xl'}>{product.model}</h1>
                </div>
                <div className="tags-wrapper">
                    {product.features.map((feature) => {
                        <Badge key={feature}>{feature}</Badge>
                    })}
                </div>
                <div className="price-wrapper text-xl mt-3 mb-4">
                    <span>From</span>
                    <Price value={product.basePrice} />
                    <sup className={'text-sm'}>1</sup>
                </div>
                <div className="buttons-wrapper mb-7">
                    <Button onClick={() => setLocation('/configure/' + product.slug)}>Configure</Button>
                </div>
                <div className="additional-text">
                    <p className={'text-xs text-gray-600'}>
                        <sup>1</sup> Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges; potential tariffs. Dealer sets actual selling price.
                    </p>
                </div>
            </div>
            <ProductMainFeatures features={product.features} image={product.media.images[1]} model={product.model} />
        </div>
    )
}

export default ProductDetail