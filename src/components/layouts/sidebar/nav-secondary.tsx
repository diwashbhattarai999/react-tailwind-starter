import type { Icon } from "@tabler/icons-react";
import type * as React from "react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
    items,
    ...props
}: {
    items: Array<{
        title: string;
        url: string;
        icon: Icon;
    }>;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <a href={item.url}>
                                <SidebarMenuButton>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </a>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
