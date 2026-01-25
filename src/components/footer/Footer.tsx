const Footer = () => {
    return (
        <footer className="border-t border-secondary/30 bg-background/50 backdrop-blur-sm py-6">
            <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="relative flex p-2 bg-background border border-secondary/50 rounded-lg group hover:border-primary/30 transition-all duration-300">
                    <div className="grid grid-cols-2 gap-1 scale-90">
                        <div className="w-2 h-2 rounded-[2px] bg-primary" />
                        <div className="w-2 h-2 rounded-[2px] bg-primary/40" />
                        <div className="w-2 h-2 rounded-[2px] bg-primary/40" />
                        <div className="w-2 h-2 rounded-[2px] bg-primary" />
                    </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                    &copy; {new Date().getFullYear()} Muhammad Ahsen. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer