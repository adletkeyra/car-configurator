import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

function ProductMainFeatures ({features, image, model}){

    return(
        <div className="main-features-wrapper grid grid-cols-2 max-w-7xl mx-auto p-6 pt-24 pb-0">
            <div className="info-wrapper flex flex-col justify-around">
                {features.slice(0, 3).map((feature) => (
                    <div key={feature.name} className="feature">
                        <h2 className="value text-6xl">
                            {feature.value}
                        </h2>
                        <h4 className="name text-md text-gray-600">
                            {feature.name}
                        </h4>
                    </div>
                ))}
            </div>
            <div className="image-wrapper">
                <img src={image} alt="Features image" />
            </div>
            <div className="buttons-wrapper mt-12">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"}>Technical Specs</Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[540px] lg:w-[1024px]">
                        <SheetHeader className="p-8">
                            <SheetTitle>
                                <p className={'text-md text-gray-600'}>{model}</p>
                                <p className={'text-2xl'}>Technical Specs</p>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="p-8 pt-0 pb-0">
                            {features.map((feature) => (
                                <div key={feature.name} className="feature">
                                    <span className="name text-md">
                                        {feature.name}:
                                    </span>
                                    <span className="value text-lg">
                                        {feature.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <SheetFooter>
                            <Button>Build Your Car</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default ProductMainFeatures