import { useState } from "react";
import DropDown from "../Dropdown/Dropdown";

interface ProductModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InputVariant {
  id: number;
  variant: string;
  qty: string;
  price: string;
}

const ProductModal = ({ showModal, setShowModal }: ProductModalProps) => {
  const [inputs, setInputs] = useState<InputVariant[]>([
    { id: 1, variant: "", qty: "", price: "" },
  ]);

  const handleAddInputVariant = () => {
    if (inputs.length < 5) {
      const newInput: InputVariant = {
        id: inputs.length + 1,
        variant: "",
        qty: "",
        price: "",
      };
      setInputs([...inputs, newInput]);
    }

    return null;
  };

  const handleRemoveInputVariant = (id: number) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChangeVariant = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof InputVariant
  ) => {
    const newInputs = [...inputs];
    // Ensure `field` is a valid key of InputVariant
    if (
      field === "id" ||
      field === "variant" ||
      field === "qty" ||
      field === "price"
    ) {
      // Cast field to keyof InputVariant to avoid TypeScript error
      newInputs[index][field as keyof InputVariant] = e.target.value;
      setInputs(newInputs);
    } else {
      // Handle invalid field case
      console.error(`Invalid field: ${field}`);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-strokedark dark:bg-boxdark">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create New Product</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <form action="#">
                    <div className="p-6.5">
                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Category
                        </label>
                        <DropDown type="category" />
                      </div>
                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter name"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          PLU
                        </label>
                        <input
                          type="text"
                          placeholder="Enter PLU"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-2.5 block text-black dark:text-white">
                          Variant
                        </label>
                        {inputs.map((input, index) => (
                          <div key={input.id} className="mb-4.5">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={input.variant}
                                placeholder="Enter variant"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={(e) =>
                                  handleChangeVariant(e, index, "variant")
                                }
                              />
                              <input
                                type="text"
                                value={input.qty}
                                placeholder="Enter qty"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={(e) =>
                                  handleChangeVariant(e, index, "qty")
                                }
                              />
                              <input
                                type="text"
                                value={input.price}
                                placeholder="Enter price"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                onChange={(e) =>
                                  handleChangeVariant(e, index, "price")
                                }
                              />
                              <button
                                onClick={() =>
                                  handleRemoveInputVariant(input.id)
                                }
                                className="text-red-500 text-4xl"
                              >
                                -
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between items-center">
                          <button
                            onClick={handleAddInputVariant}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                          >
                            + add variant
                          </button>
                          {inputs.length === 5 ? (
                            <p className="text-red-500">Max 5 variant</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-primary p-3 font-medium text-gray rounded hover:bg-opacity-90"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ProductModal;
