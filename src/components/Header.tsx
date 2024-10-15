import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "./dark-mode-toggle";
import dynamic from 'next/dynamic';

// 动态导入 ConnectWallet 组件
const ConnectWallet = dynamic(() => import("@/components/connect-wallet"), {
  // 禁用服务器端渲染:
  ssr: false,
});

function Header() {
  return (
    <header className="flex items-center justify-between px-10 pt-10">
      <div className="flex items-center justify-between gap-x-8">
        <Link href={"/"}>
          <img src="/Runes-Logo.png" alt="Runes logo" width="40" height="40" />
        </Link>
        <Link
          href={"https://leather.io/learn/bitcoin-runes"}
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          What are Runes?
        </Link>
        <Link
          href={"https://www.hiro.so/blog/introducing-the-runes-api"}
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          What is the Runes API?
        </Link>
        <Link
          href={"https://github.com/hirosystems/runehook"}
          target="_blank"
          className={buttonVariants({ variant: "link" })}
        >
          Runehook
        </Link>
      </div>

      <div className="flex items-center justify-between gap-x-8">
        <ModeToggle />
        <ConnectWallet buttonLabel="Connect" />
      </div>
    </header>
  );
}

export default Header;
