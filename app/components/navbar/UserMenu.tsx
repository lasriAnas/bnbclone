"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setISOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setISOpen((value) => !value);
  }, []);

  return (
    <div className="realtive ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-1/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onclick={() => {}} label="My trips" />
                <MenuItem onclick={() => {}} label="My favorites" />
                <MenuItem onclick={() => {}} label="My reservations" />
                <MenuItem onclick={() => {}} label="My propreties" />
                <MenuItem onclick={() => {}} label="My home" />
                <hr />
                <MenuItem onclick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem
                  onclick={() => {
                    loginModal.onOpen();
                  }}
                  label="Login"
                />
                <MenuItem
                  onclick={() => {
                    registerModal.onOpen();
                  }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
