import { Button } from "@/components/ui/button"

function Footer() {
    return (
        <footer className="w-full border-t bg-white py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">

                {/* Copyright */}
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Car Configurator. All rights reserved.
                </div>

                {/* Social */}
                <div className="flex gap-2">
                    <Button size="sm">GitHub</Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer