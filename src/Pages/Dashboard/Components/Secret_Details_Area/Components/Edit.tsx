import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import usePostApi from "../../../../../api/post/usePostApi";

interface IEditSecretProps {
  id: string;
  title: string;
  value: string;
  onComplete: () => void;
}

interface IFormValues {
  title: string;
  value: string;
}

export default function EditSecret({ id, title, value, onComplete }: IEditSecretProps) {
  const { updateSecret } = usePostApi();
  const [open, setOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm<IFormValues>({
    defaultValues: {
      title,
      value,
    },
  });

  // When opening the modal make sure the form is synced with props
  const openModal = () => {
    reset({ title, value });
    setOpen(true);
  };

  // Close modal and restore form values to the incoming props
  const closeModal = () => {
    reset({ title, value });
    setOpen(false);
  };

  // Submit handler for "Save Edit"
  const onSave = async (data: IFormValues) => {
    await updateSecret(id, data.title, data.value);
    // keep form synced with saved values
    onComplete()
    reset({ title: data.title, value: data.value });
    setOpen(false);
  };

  // Sync external prop changes while modal is closed
  useEffect(() => {
    if (!open) reset({ title, value });
  }, [title, value, open, reset]);

  return (
    <>
      <button
        onClick={openModal}
        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Edit
      </button>

      {open && (
        // Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden
          />

          {/* Modal panel */}
          <div className="relative z-10 w-full max-w-lg mx-4" role="form" aria-modal="true">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">Edit Secret</h3>
                <button
                  aria-label="Close"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSave)}
                className="mt-4 space-y-4"
                onKeyDown={(e) => {
                  // optional: close on Escape
                  if (e.key === "Escape") closeModal();
                }}
              >
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Title is required" }}
                    render={({ field: { onChange, value: fieldValue, ...rest } }) => (
                      <input
                        {...rest}
                        value={fieldValue}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Enter a title..."
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Secret Value</label>
                  <Controller
                    name="value"
                    control={control}
                    rules={{ required: "Secret value is required" }}
                    render={({ field: { onChange, value: fieldValue, ...rest } }) => (
                      <input
                        {...rest}
                        value={fieldValue}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Enter secret value..."
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
                      />
                    )}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                  >
                    Save Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
