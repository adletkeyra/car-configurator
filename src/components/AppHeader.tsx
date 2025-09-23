import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useLocation } from "wouter"
import { AnimatedBackground } from '../../components/motion-primitives/animated-background';

const TABS = ['Home', 'Catalog'];

function Header() {
    const [location, setLocation] = useLocation();
    return (
        <header className="w-full border-b bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <div onClick={() => setLocation('/')} className="text-xl font-bold">CC</div>

                <div className='flex flex-row'>
                    <AnimatedBackground
                        defaultValue={TABS[0]}
                        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.3,
                        }}
                        enableHover
                    >
                        {TABS.map((tab, index) => (
                            <button
                                key={index}
                                data-id={tab}
                                type='button'
                                className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
                                onClick={() => setLocation(tab === 'Home' ? '/' : `/${tab.toLowerCase()}`)}
                            >
                                {tab}
                            </button>
                        ))}
                    </AnimatedBackground>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <nav className="flex flex-col gap-4 mt-6">
                                <a href="/" className="text-sm font-medium">Home</a>
                                <a href="/about" className="text-sm font-medium">About</a>
                                <a href="/contact" className="text-sm font-medium">Contact</a>
                            </nav>
                            <div className="mt-6 flex flex-col gap-2">
                                <Button variant="outline">Log in</Button>
                                <Button>Sign up</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header