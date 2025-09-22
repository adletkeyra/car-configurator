import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { useLocation } from "wouter"


function Header() {
    const [location, setLocation] = useLocation();
    return (
        <header className="w-full border-b bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <div onClick={() => setLocation('/')} className="text-xl font-bold">Car Configurator</div>

                {/* Desktop menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink onClick={() => setLocation('/')} className="text-sm font-medium">
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink onClick={() => setLocation('/catalog')} className="text-sm font-medium">
                                Catalog
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex items-center gap-3">
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                </div>

                 {/* Mobile menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
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