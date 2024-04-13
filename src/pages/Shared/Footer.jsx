
const Footer = () => {
    return (
        <div className="bg-base-300 ">

            <footer className="footer container mx-auto lg:px-20 px-2 lg:py-20 py-4 text-base-content">
                <aside>
                   
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Agents</a>
                    <a href="/" className="link link-hover">Blog</a>
                    <a href="/" className="link link-hover">Contact us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Actions</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;