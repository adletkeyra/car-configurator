import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Price from "@/components/Price";
import {useLocation} from "wouter";

function ProductCard ({product}){

    const [location, setLocation] = useLocation();

    function goToPage(slug){
        setLocation(slug);
    }
    return (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-150">
            <img onClick={() => goToPage('/catalog/' + product.slug)} src={product.media.baseLayer} alt={product.name} className="w-full h-48 object-cover rounded-t-md" />
            <CardContent className="p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-medium text-sm">{product.brand} {product.model}</h3>
                        <p className="text-xs text-muted-foreground mt-1">Slug: {product.slug}</p>
                    </div>
                    <div className="text-right font-semibold">
                        <Price value={product.basePrice} />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pb-0 pt-0 flex items-center justify-between">
                <Button className={'w-full'} size="sm" onClick={() => goToPage('/catalog/' + product.slug)}>Configure</Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;