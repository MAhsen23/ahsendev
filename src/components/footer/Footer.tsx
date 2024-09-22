const Footer = () => {
    return (
        <footer className="border-t text-muted-foreground py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Muhammad Ahsen. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer