
'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LayoutHead() {
  // const state = useState({
  //    current: 1
  // });
  const [currentActive, setCurrentActive]  = useState(1)
  const router = useRouter()
  const toLogin = () => {
     setCurrentActive(2)
     setTimeout(() => {
      console.log(currentActive)
     }, 1000)
    // router.push('/login')
  }
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 common_border" justify="center">
        <NavbarItem>
          <div className="font-bold text-inherit cursor-pointer">ACME</div>
        </NavbarItem>
        <NavbarItem isActive>
          <div className="font-bold cursor-pointer">ACME</div>
        </NavbarItem>
        <NavbarItem>
          <div className="font-bold text-inherit cursor-pointer">ACME</div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Button color='primary' onClick={toLogin}>登录</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

