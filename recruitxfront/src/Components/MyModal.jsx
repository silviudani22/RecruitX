import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function MyModal() {
    const [isOpen, setIsOpen] = useState(false);
    console.log("Modal open:", isOpen);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="add-job-btn"
            >
                Add Job
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <Dialog.Panel className="z-50 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                    <Dialog.Title className="text-lg font-bold">Add New Job</Dialog.Title>
                    <p className="mt-2 text-gray-700">Job form goes here...</p>
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}
