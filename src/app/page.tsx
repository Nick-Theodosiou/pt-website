"use client";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import React, { useState } from "react";
import { sendEmail } from "./sendEmail";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fromName, setFromName] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (fromName !== '' && replyTo !== '' && message !== '')
      sendEmail(fromName, replyTo, message);
    else
      alert("Please fill in all fields");
  }

  return (
    <main className="flex h-full flex-col items-center justify-between">

      {/* Navigation Bar */}
      <Navbar className="bg-black p-3" maxWidth="full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand>
            <Image src={"/logo-white-transparent.png"} alt={"Logo"} width={40} height={30}></Image>
          </NavbarBrand>
          <NavbarItem className="block sm:hidden">
            <Link
              className="text-white border border-white rounded-md px-2 py-1 hover:bg-white hover:text-black"
              href="#contact-me"
            >
              Contact me
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-black">
          <NavbarMenuItem>
            <Link className="mt-5 w-full text-white" href="#home" size="lg">
              Home
            </Link>
            <Link className="w-full text-white" href="#plans" size="lg">
              Plans
            </Link>
            {/* <Link className="w-full text-white" href="#clients" size="lg">
              Clients
            </Link> */}
          </NavbarMenuItem>
        </NavbarMenu>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link className="text-white" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#plans">
              Plans
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link className="text-white" href="#clients">
              Clients
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link className="text-white border border-white rounded-md px-2 py-1 hover:bg-white hover:text-black" href="#contact-me">
              Contact me
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>


      {/* Content */}
      <div id="home"></div>
      <div className="m-8 md:my-16 md:mx-40 xl:mx-60 ">
        {/* Home */}
        <div className="md:flex">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-2">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold">Giorgos Papanikolas</h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-500">&quot;Many struggle with lifestyle-to-fitness balance. I can create a plan and diet that fits YOUR life. Let&apos;s integrate fitness into your routine to reach your goals without making it a chore.&quot;</p>

              {/* Selling Points */}
              <div className="mt-10 w-full mx-auto grid grid-cols-auto grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <div>
                    <div className="flex">
                      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 1C19 0.447715 19.4477 0 20 0C20.5523 0 21 0.447715 21 1V1.58582L22.2709 0.314894C22.6614 -0.0756305 23.2946 -0.0756294 23.6851 0.314895C24.0757 0.705419 24.0757 1.33858 23.6851 1.72911L22.4142 3H23C23.5523 3 24 3.44772 24 4C24 4.55228 23.5523 5 23 5H20.4142L12.7017 12.7125C12.3112 13.103 11.678 13.103 11.2875 12.7125C10.897 12.322 10.897 11.6888 11.2875 11.2983L19 3.58582V1Z" fill="#000000"></path> <path d="M17.3924 3.78908C17.834 3.3475 17.7677 2.61075 17.2182 2.31408C15.6655 1.47581 13.8883 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 10.1154 22.5261 8.34153 21.6909 6.79102C21.3946 6.24091 20.6574 6.17424 20.2155 6.61606L20.1856 6.64598C19.8554 6.97615 19.8032 7.48834 20.016 7.90397C20.6451 9.1326 21 10.5249 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.4782 3 14.8732 3.35638 16.1037 3.98791C16.5195 4.20129 17.0322 4.14929 17.3627 3.81884L17.3924 3.78908Z" fill="#000000"></path> <path d="M14.3899 6.79159C14.8625 6.31902 14.7436 5.52327 14.1062 5.32241C13.4415 5.11295 12.7339 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 11.2702 18.8883 10.5664 18.6811 9.9049C18.4811 9.26659 17.6846 9.14697 17.2117 9.61995L17.1194 9.71224C16.8382 9.99337 16.7595 10.4124 16.8547 10.7984C16.9496 11.1833 17 11.5858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12.4172 7 12.8225 7.0511 13.21 7.1474C13.5965 7.24347 14.0166 7.16496 14.2982 6.88331L14.3899 6.79159Z" fill="#000000"></path> <path d="M11.078 9.15136C11.4874 9.01484 11.6934 9.48809 11.3882 9.79329L10.5827 10.5989C9.80254 11.379 9.80254 12.6438 10.5827 13.4239C11.3628 14.204 12.6276 14.204 13.4077 13.4239L14.2031 12.6285C14.5089 12.3227 14.9822 12.5301 14.8429 12.9397C14.441 14.1209 13.3135 15 12 15C10.3431 15 9 13.6569 9 12C9 10.6796 9.88827 9.54802 11.078 9.15136Z" fill="#000000"></path> </g></svg>
                      <p className="ml-2 font-medium">Personalized Service</p>
                    </div>

                    <div className="flex mt-8">
                      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9H17M7 13H12M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                      <p className="ml-2 font-medium">Ultimate Flexibility</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <div className="flex">
                      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                      <p className="ml-2 font-medium">Weekly Check-Ins</p>
                    </div>

                    <div className="flex mt-10">
                      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 15.8L7.14286 17L10 14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 8.8L7.14286 10L10 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 9L18 9" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M13 16L18 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                      <p className="ml-2 font-medium">Proven Results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact me button */}
              <a className="w-fit" href="#contact-me">
                <button className="mx-auto md:mx-0 bg-black text-white hover:bg-white border-black border-2 hover:text-black w-fit mt-10 md:mt-8 px-10 py-2 rounded-xl">Contact me</button>
              </a>
            </div>

            <div className="mt-14 md:mt-0 md:ml-20 mx-auto max-w-fit col-span-1 items-center justify-center">
              <Image className="w-full h-auto" src={"/profile.png"} alt={"Profile Picture"} width={700} height={500}></Image>
            </div>
          </div>
        </div>


        {/* Plans */}
        <div id="plans"></div>
        <div>
          {/* Title */}
          <h1 className="mt-10 text-3xl font-bold">Plans & Pricing</h1>

          {/* Cards */}
          <div className="mt-8 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Plan 1 */}
            <div className="p-6 border rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">Base & Training Coaching</h2>
              <div className="flex">
                <h2 className="text-xl font-bold mb-2">£100 </h2>
                <p className="ml-1 pt-1 text-sm">/ month</p>
              </div>
              <p className="mt-4 text-gray-500">✅ Fitness Q&A</p>
              <p className="mt-2 text-gray-500">✅ Weekly review</p>
              <p className="mt-2 text-gray-500">✅ Workout integration into your lifestyle (possible issues etc)</p>
              <p className="mt-2 text-gray-500">✅ Future fitness planning</p>
              <p className="mt-2 text-gray-500">🚫 Diet Adjustments and conversations & Problem solving</p>
              <p className="mt-2 text-gray-500">🚫 Healthy & tasty recipes</p>
              <p className="mt-2 text-gray-500">🚫 Event & special occasion planning</p>
              <p className="mt-2 text-gray-500">🚫 Observational week</p>
              <button className="w-full mx-auto bg-black text-white hover:bg-white border-black border-2 hover:text-black mt-8 px-10 py-2 rounded-xl"
                onClick={() => window.open("https://docs.google.com/forms/d/1-RCxIRvVJ4dqq_H5lWZr793f7zjP49GPEOpG8BTgY-w/viewform?edit_requested=true", "_blank")}>Get Started</button>
            </div>

            {/* Plan 2 */}
            <div className="p-6 mt-4 md:mt-0 border rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">Training & Diet Coaching</h2>
              <div className="flex">
                <h2 className="text-xl font-bold mb-2">£150 </h2>
                <p className="ml-1 pt-1 text-sm">/ month</p>
              </div>
              <p className="mt-4 text-gray-500">✅ Fitness Q&A</p>
              <p className="mt-2 text-gray-500">✅ Weekly review</p>
              <p className="mt-2 text-gray-500">✅ Workout integration into your lifestyle (possible issues etc)</p>
              <p className="mt-2 text-gray-500">✅ Future fitness planning</p>
              <p className="mt-2 text-gray-500">✅ Diet Adjustments and conversations & Problem solving</p>
              <p className="mt-2 text-gray-500">🚫 Healthy & tasty recipes</p>
              <p className="mt-2 text-gray-500">🚫 Event & special occasion planning</p>
              <p className="mt-2 text-gray-500">🚫 Observational week</p>
              <button className="w-full mx-auto bg-black text-white hover:bg-white border-black border-2 hover:text-black mt-8 px-10 py-2 rounded-xl"
                onClick={() => window.open("https://docs.google.com/forms/d/1-RCxIRvVJ4dqq_H5lWZr793f7zjP49GPEOpG8BTgY-w/viewform?edit_requested=true", "_blank")}>Get Started</button>
            </div>

            {/* Plan 3 */}
            <div className="p-6 mt-4 md:mt-0 border rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">All-In Coaching</h2>
              <div className="flex">
                <h2 className="text-xl font-bold mb-2">£250 </h2>
                <p className="ml-1 pt-1 text-sm">/ month</p>
              </div>
              <p className="mt-4 text-gray-500">✅ Fitness Q&A</p>
              <p className="mt-2 text-gray-500">✅ Weekly review</p>
              <p className="mt-2 text-gray-500">✅ Workout integration into your lifestyle (possible issues etc)</p>
              <p className="mt-2 text-gray-500">✅ Future fitness planning</p>
              <p className="mt-2 text-gray-500">✅ Diet Adjustments and conversations & Problem solving</p>
              <p className="mt-2 text-gray-500">✅ Healthy & tasty recipes</p>
              <p className="mt-2 text-gray-500">✅ Event & special occasion planning</p>
              <p className="mt-2 text-gray-500">✅ Observational week</p>
              <button className="w-full mx-auto bg-black text-white hover:bg-white border-black border-2 hover:text-black mt-8 px-10 py-2 rounded-xl"
                onClick={() => window.open("https://docs.google.com/forms/d/1-RCxIRvVJ4dqq_H5lWZr793f7zjP49GPEOpG8BTgY-w/viewform?edit_requested=true", "_blank")}>Get Started</button>
            </div>
          </div>

          <p className="mt-4 text-gray-500">* If you need any additional information, please feel free to contact me.</p>
        </div>


        {/* Clients */}
        {/* <div id="clients"></div>
        <div>
          <h1 className="mt-20 text-3xl font-bold">Active Clients</h1>

          <div className="mt-8 w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="p-6 border rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">Nicolas</h2>

              <div className="mt-5 mx-auto max-w-fit flex flex-col items-center justify-center">
                <Image src={"/client1.jpg"} alt={"Profile Picture"} width={400} height={200}></Image>
              </div>

              <p className="mt-5 text-gray-500">Training with George changed my whole life. These past 4 months I have seen the results I have been trying to achieve the past 2 years alone. I highly recommend him to anyone!</p>
            </div>

            <div className="p-6 mt-4 md:mt-0 border rounded-lg bg-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">Ernesto</h2>

              <div className="mt-5 mx-auto max-w-fit flex flex-col items-center justify-center">
                <Image src={"/client1.jpg"} alt={"Profile Picture"} width={400} height={200}></Image>
              </div>

              <p className="mt-5 text-gray-500">Training with George changed my whole life. These past 14 months I have seen the results I have looking for.</p>
            </div>
          </div>
        </div> */}


        {/* Contact me */}
        <div id="contact-me"></div>
        <div>
          {/* Title */}
          <h1 className="mt-20 text-3xl font-bold">Contact me</h1>
          <p className="mt-5">You can contact me to regarding any questions or to arrange a call for a consultation. We&apos;ll be speaking on the call personally. It&apos;ll be an informal call with no obligation to move forward. I look forward to speaking with you.</p>

          {/* Form */}
          <div className="mt-8">
            <form>
              <p>Full Name:</p>
              <input className="w-full mt-2 p-2 border-gray-300 border-1 rounded-md" type="text" placeholder="Name..." value={fromName} onChange={(e) => setFromName(e.target.value)} required />

              <p className="mt-5">Email Address:</p>
              <input className="w-full mt-2 p-2 border-gray-300 border-1 rounded-md" type="email" placeholder="Email..." value={replyTo} onChange={(e) => setReplyTo(e.target.value)} required />

              <p className="mt-5">Message:</p>
              <textarea className="w-full mt-2 p-2 h-40 border-gray-300 border-1 rounded-md" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} required />

            </form>
            <button className="w-full mx-auto bg-black text-white hover:bg-white border-black border-2 hover:text-black mt-8 px-10 py-2 rounded-xl" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className="bg-black flex w-full h-36">
        <div className="m-auto">
          <div className="ml-20 flex">
            <a href="https://www.instagram.com/gpapanikolifts/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <svg className="ml-2.5 hover:cursor-pointer hover:opacity-70" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg>
            </a>
            <a href="https://www.tiktok.com/@gpapanikolifts?lang=en" target="_blank" rel="noopener noreferrer" className="inline-block">
              <svg className="ml-2.5 hover:cursor-pointer hover:opacity-70" fill="#ffffff" width="1.9rem" height="1.9rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g></svg>
            </a>
            <a href="https://www.youtube.com/@gpapanikolifts?app=desktop" target="_blank" rel="noopener noreferrer" className="inline-block">
              <svg className="ml-2.5 hover:cursor-pointer hover:opacity-70" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#ffffff"></path> </g></svg>
            </a>
          </div>
          <p className="text-white mt-5">© 2024 Copyright | Giorgos Papanikolas</p>
        </div>
      </div>

    </main>
  );
}
