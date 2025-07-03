import React from "react"

export default function MainContent({children, ...props}: React.ComponentProps<"main">) {
  return ( 
    <main {...props}>
      {children}
    </main>
  )
}