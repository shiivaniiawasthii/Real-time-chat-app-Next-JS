import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathName = usePathname();

  const paths = useMemo(() => {
    return [
      {
        name: "Conversations",
        href: "/conversations",
        icon: MessageSquare,        // pass component instead of JSX
        isActive: pathName?.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: Users,                // pass component instead of JSX
        isActive: pathName === "/friends",
      },
    ];
  }, [pathName]);

  return paths;
};
