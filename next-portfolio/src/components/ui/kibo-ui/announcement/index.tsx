import type { ComponentProps, HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type AnnouncementProps = ComponentProps<typeof Badge> & {
  themed?: boolean;
};

export const Announcement = ({

  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <Badge
    className={cn(
      "group max-w-full gap-2 rounded-full bg-background px-3 py-0.5 font-medium shadow-sm transition-all",
      "hover:shadow-md",
      themed && "announcement-themed",
      className
    )}

    {...props}
  />
);

export type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTag = ({
  className,
  ...props
}: AnnouncementTagProps) => (
  <div
    className={cn(
      "-ml-2.5 shrink-0 truncate text-white rounded-full bg-white/10 px-2.5 py-1 text-xs",
      "group-[.announcement-themed]:bg-background/60",
      className
    )}
    {...props}
  />
);

export type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTitle = ({
  className,
  ...props
}: AnnouncementTitleProps) => (
  <div
    className={cn("flex items-center text-white gap-1 truncate py-1", className)}
    {...props}
  />
);
