import { MessageSquare, User } from "lucide-react";
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useConversation = () =>{
        const pathName = usePathname()

        const path = useMemo(()=>[
          {
           name : "conversations", 
           href : "/conversations",
           icon : <MessageSquare/>,
           isActive : pathName?.startsWith("/conversations")
          },
           {
           name : "Friends", 
           href : "/friends",
           icon : <User/>,
           isActive : pathName?.startsWith("/friends")
          }
        ],[pathName]);

        return {path}
}