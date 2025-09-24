import {useRef} from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Price from "@/components/Price";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {useLocation} from "wouter";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

function Slider({ items = [], autoplay = false, interval = 4000 }) {

    const [location, setLocation] = useLocation()

    if (items.length === 0) {
        return (
            <Card className="w-full">
                <CardContent className="py-6 text-center">No items to display</CardContent>
            </Card>
        );
    }

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative w-full max-w-7xl mx-auto mt-6 mb-24">
            {/* slides wrapper */}
            <div className="overflow-hidden">
                <div className="flex gap-6 justify-center items-stretch">
                    <div className="arrows-wrapper absolute gap-2 flex items-center justify-end w-full pl-6 pr-6 z-2">
                        <span
                            ref={prevRef}
                            className="p-2 cursor-pointer"
                        >
                            ←
                        </span>
                        <span
                            ref={nextRef}
                            className="p-2 cursor-pointer"
                        >
                            →
                        </span>
                    </div>
                    <Swiper
                        className={''}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={36}
                        slidesPerView={3}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        {items.map((item) => (
                            <SwiperSlide>
                                <Card className="rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
                                    <CardContent className="p-0 flex flex-col h-full">
                                        <div className="w-full bg-white flex justify-center items-center p-6">
                                            <img src={item.media.images[0]} alt={item.brand} className="max-h-40 object-contain" />
                                        </div>
                                        <div className="px-6 pb-6 flex flex-col flex-1">
                                            <h3 className="text-lg font-semibold">{item.brand}</h3>
                                            <p className="text-sm text-muted-foreground mb-2">{item.model}</p>
                                            <Price value={item.basePrice} />
                                            {/*{slide.specs && (*/}
                                            {/*    <ul className="space-y-1 text-sm mb-4">*/}
                                            {/*        {slide.specs.map((s, i) => (*/}
                                            {/*            <li key={i} className="flex justify-between">*/}
                                            {/*                <span>{s.label}</span>*/}
                                            {/*                <span className="font-medium">{s.value}</span>*/}
                                            {/*            </li>*/}
                                            {/*        ))}*/}
                                            {/*    </ul>*/}
                                            {/*)}*/}

                                            <div className="mt-auto flex gap-2">
                                                <Button onClick={() => setLocation('/configure/' + item.slug)} className="flex-1">Configure</Button>
                                                <Sheet>
                                                    <SheetTrigger asChild>
                                                        <Button variant={"outline"}>Technical Specs</Button>
                                                    </SheetTrigger>
                                                    <SheetContent side="right" className="w-[540px] lg:w-[1024px]">
                                                        <SheetHeader className="p-8">
                                                            <SheetTitle>
                                                                <p className={'text-md text-gray-600'}>{item.model}</p>
                                                                <p className={'text-2xl'}>Technical Specs</p>
                                                            </SheetTitle>
                                                        </SheetHeader>
                                                        <div className="p-8 pt-0 pb-0">
                                                            {item.features.map((feature) => (
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
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div>
    );
}

export default Slider
