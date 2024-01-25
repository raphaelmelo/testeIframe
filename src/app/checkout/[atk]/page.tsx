"use client";

import { Tabs } from "@/components/tabs";

export default function CheckoutPage({ params }: { params: { atk: string } }) {
  return (
    <div>
      <Tabs atk={params.atk} />
    </div>
  );
}
