'use client';
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="mx-10 my-3 flex max-h-16 w-auto items-center justify-between text-[#F9FAFB]">
      <h1 className="text-4xl font-bold">Eduai</h1>

      <nav className="flex gap-10 rounded-2xl border-2 border-white/50 bg-white/10 px-6 py-4 font-bold shadow-lg backdrop-blur-lg">
        <Link
          href="#"
          className="rounded-xl px-3 py-1 duration-300 hover:bg-white/40"
        >
          Home
        </Link>
        <Link
          href="#"
          className="rounded-xl px-3 py-1 duration-300 hover:bg-white/40"
        >
          Courses
        </Link>
        <Link
          href="#"
          className="rounded-xl px-3 py-1 duration-300 hover:bg-white/40"
        >
          AI Helper
        </Link>
        <Link
          href="#"
          className="rounded-xl px-3 py-1 duration-300 hover:bg-white/40"
        >
          My Course
        </Link>
      </nav>

      <Popover>
        <PopoverTrigger className="cursor-pointer">
          {' '}
          <Avatar className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 text-center">
            {/* <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
              className="rounded-full"
            /> */}
            <AvatarFallback className="text-center">ER</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <AnimatePresence>
          <PopoverContent asChild forceMount>
            <motion.div
              key="popover"
              className="flex items-center justify-between rounded-xl bg-white px-2 py-1 text-[#2A2251]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="mr-2 text-lg font-bold">Test</h1>
            </motion.div>
          </PopoverContent>
        </AnimatePresence>
      </Popover>
    </div>
  );
};

export default Navbar;
