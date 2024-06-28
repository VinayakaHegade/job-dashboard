import React from "react";
import Button from "../ui/Button";

export default function JobActions() {
  return (
    <section className="flex gap-4 items-center">
      <Button
        variant="secondary"
        icon="icons/trash.svg"
        buttonClassName="w-1/2 xl:h-[46px]"
        iconHeight={20}
        iconWidth={20}
      >
        Delete job
      </Button>
      <Button
        variant="primary"
        icon="icons/edit.svg"
        buttonClassName="w-1/2 xl:h-[46px]"
        iconHeight={16}
        iconWidth={16}
      >
        Edit job
      </Button>
    </section>
  );
}
