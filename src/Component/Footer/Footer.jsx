import logo from '../../assets/images/logo.png';


const Footer = () => {
    return (
        <div className="bg-black text-white py-20">
            <footer className="footer p-10 container mx-auto px-5">
                <div>
                    <div>
                        <img className='w-24' src={logo} alt="" />
                    </div>
                    <div className="flex gap-1">
                        <p className="text-2xl font-extrabold"><span className="text-[#fc5a03]">Task</span> Management</p>
                    </div>
                    <p>Providing reliable tech since 2021</p>
                </div>
                <nav>
                    <header className="uppercase text-xl text-[#fc5a03] font-bold mb-5">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-[#fc5a03] font-bold mb-5">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Speakers</a>
                    <a className="link link-hover">Gallery</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-[#fc5a03] font-bold mb-5">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-[#fc5a03] font-bold mb-5">Explore</header>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
            </footer>

            <div className='container mx-auto px-5'>
                <div className="divider"></div>
            </div>
            <div className="container mx-auto px-5">
                <p className="text-center text-xs mt-8 ">Copyright © 2023 - All right reserved by Ismat Jerin</p>
            </div>
        </div>
    );
};

export default Footer;