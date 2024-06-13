"use client"

import {BsYoutube, BsGithub, BsLinkedin, BsFacebook, BsReddit} from "react-icons/bs"
import payment from "@/images/payment.png"
import Container from "./Container"
import Logo from "./Logo"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo, text, social links */}
            <div className="flex flex-col gap-y-4">
                <Logo />
                <p>Welcome to Smart, your ultimate destination for chic and trendy fashion. Discover a curated collection of stylish clothing designed to elevate your wardrobe effortlessly.</p>
                {/* Social Links */}
                <div className="flex items-center gap-x-4">
                    <a href="https://www.youtube.com/@NaveedSarwarOfficial" target="_blank">
                        <span className="socialLink">
                            <BsYoutube />
                        </span>
                    </a>
                    <a href="https://github.com/Mubeen-creator?tab=repositories" target="_blank">
                        <span className="socialLink">
                            <BsGithub />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-mubeen-962b09304/" target="_blank">
                        <span className="socialLink">
                            <BsLinkedin />
                        </span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100094671680296" target="_blank">
                        <span className="socialLink">
                            <BsFacebook />
                        </span>
                    </a>
                    <a href="https://www.reddit.com/" target="_blank">
                        <span className="socialLink">
                            <BsReddit />
                        </span>
                    </a>
                </div>
            </div>
            {/* Latest Posts */}
            <div>
                <p className="text-lg">Latest Posts</p>
                <ul className="text-sm font-light mt-2 flex flex-col gap-y-4">
                    <li className="flex flex-col">
                        <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                        <span className="text-orange-600">May 09, 2024</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                        <span className="text-orange-600">May 09, 2024</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                        <span className="text-orange-600">May 09, 2024</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-slate-100 hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                        <span className="text-orange-600">May 09, 2024</span>
                    </li>
                </ul>
            </div>
            {/* Other Links Home, About, Contact etc*/}
            <div>
                <p className="text-lg">Links</p>
                <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
                    <Link href={"/"}>
                        <li className="hover:text-orange-600 cursor-pointer duration-200">Home</li>
                    </Link>
                    <Link href={"/cart"}>
                        <li className="hover:text-orange-600 cursor-pointer duration-200">Cart</li>
                    </Link>
                    <Link href={"about"}>
                        <li className="hover:text-orange-600 cursor-pointer duration-200">About</li>
                    </Link>
                    <Link href={"newsletter"}>
                        <li className="hover:text-orange-600 cursor-pointer duration-200">Newsletter</li>
                    </Link>
                    <Link href={"contact"}>
                        <li className="hover:text-orange-600 cursor-pointer duration-200">Contact</li>
                    </Link>
                </ul>
            </div>
            {/* Payment Methods */}
            <div>
                <p className="text-lg mb-4">Pay us with your trusted service</p>
                <Image src={payment} alt="payment banner image" className="w-full h-10 object-cover"/>
            </div>
        </Container>
    </div>
  )
}

export default Footer