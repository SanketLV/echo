"use client";

import WidgetFooter from "@/modules/widget/ui/components/widget-footer";
import WidgetHeader from "@/modules/widget/ui/components/widget-header";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  return (
    //TODO: Confirm whether or not min-h-screen and min-w-screen is needed
    <div className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi There! 👋</p>
          <p className="text-lg">How can we help you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1">Widget View - {organizationId}</div>
      <WidgetFooter />
    </div>
  );
};
