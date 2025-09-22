import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

function ProductDetail({slug}){
    const [location, setLocation] = useLocation();

    return(
        <div className={'product-detail-wrapper'}>
            <Button size="md" onClick={() => setLocation('/configure/' + slug)}>Configure</Button>
        </div>
    )
}

export default ProductDetail