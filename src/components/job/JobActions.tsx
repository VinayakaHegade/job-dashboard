import React from "react";
import Button from "../ui/Button";

export default function JobActions() {
  return (
    <section className="flex gap-4 items-center">
      <Button
        variant="secondary"
        icon="icons/trash.svg"
        buttonClassName="w-1/2"
        iconHeight={24}
        iconWidth={24}
      >
        Delete job
      </Button>
      <Button
        variant="primary"
        icon="icons/edit.svg"
        buttonClassName="w-1/2"
        iconHeight={20}
        iconWidth={20}
      >
        Edit job
      </Button>
    </section>
  );
}
