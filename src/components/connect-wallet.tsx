"use client";

import { authenticate } from "@stacks/connect";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserSession } from "@stacks/connect";
import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export const userSession = new UserSession();

type props = {
  buttonLabel: string;
};

export default function ConnectWallet({ buttonLabel }: props) {
  const { toast } = useToast();

  const segment = useSelectedLayoutSegment();

  const [iseConnected, setIsConnected] = useState(false);

  const router = useRouter();

  async function connectWallet() {
    try {
      await authenticate({
        userSession,
        appDetails: {
          icon: "/HiroIcon-Rounded-Orange.png",
          name: "My Runes App",
        },
        onFinish(payload) {
          console.log(userSession);
          console.log(payload);
          let userAddress =
            payload.userSession.loadUserData().profile.stxAddress.mainnet;
          router.push(`/dashboard?userAddress=${userAddress}`);
          setIsConnected(true);
        },
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "No installed Stacks wallet found.",
      });
    }
  }

  function disconnectWallet() {
    userSession.signUserOut();
    setIsConnected(false);

    if (segment === null) {
      window.location.reload();
    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      setIsConnected(true);
    }
  }, []);

  if (userSession.isUserSignedIn()) {
    return <Button onClick={disconnectWallet}>Disconnect</Button>;
  } else {
    return <Button onClick={connectWallet}>{buttonLabel}</Button>;
  }
}
