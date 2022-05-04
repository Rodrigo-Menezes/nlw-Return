import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className="top-5 right-3 left- absolute text-zinc-400 hover:text-zinc-100" title="Fechar fomolário de feedback">
            <X width="bold" className="w-4 h-4" />
        </Popover.Button>
    );
}