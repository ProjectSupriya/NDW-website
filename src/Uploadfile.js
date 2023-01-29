import React from "react";
import { FC, Key, useCallback, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";


const UploadFile = ({
    name,
    value,
    setInputValue,
    convertBase64,
    setInputError,
    fieldName,
    isuploaded
}) => {
    const [curentFile, setCurrentFile] = useState(value);
    const [show, setShow] = useState(false);
    console.log("currentFile", value);
    const url = value?.file ? value.file[0].url : '';
    const changeFile = async (event) => {
        let file = event.target.files[0];
        let fileSize = event.target.files[0].size / 1024 / 1024;
        if (fileSize > 1) {
            // in mb
            setInputError([name], "Image/File must be smaller than 1MB");
        } else {
            let base64 = (await convertBase64(file));
            console.log("here")
            setCurrentFile(base64);
            setInputValue([name], base64);
        }
    };

    const clearFile = () => {
        setCurrentFile(value);
        setInputValue([name], "");
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="fv-row mb-7">
                {/* begin::Label */}
                <label className="d-block fw-bold fs-6 mb-5">{fieldName}</label>
                {/* end::Label */}
                {/* begin::Image input */}
                <div
                    className="image-input image-input-outline"
                    data-kt-image-input="true"
                >
                    {/* begin::Preview existing avatar */}
                    <div
                        className="image-input-wrapper w-125px h-125px"
                        // style={{ backgroundImage: `url('${staffForEdit.avatar}')` }}
                        style={{ backgroundImage: `url('${curentFile}')` }}
                    ></div>
                    {/* end::Preview existing avatar */}

                    {/* begin::Label */}
                    <label
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        title={"Change " + name}
                    >
                        <i className="bi bi-pencil-fill fs-7"></i>
                        <input
                            type="file"
                            name={name}
                            accept=".png, .jpg, .jpeg, .pdf"
                            onChange={changeFile}
                        />
                        <input type="hidden" name={name + "_remove"} />
                    </label>
                    {/* end::Label */}

                    {/* begin::Cancel */}
                    <span
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="cancel"
                        data-bs-toggle="tooltip"
                        title={"Cancel " + name}
                    >
                        <i className="bi bi-x fs-2"></i>
                    </span>
                    {/* end::Cancel */}

                    {/* begin::Remove */}
                    <span
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="remove"
                        data-bs-toggle="tooltip"
                        title={"Remove " + name}
                        onClick={clearFile}
                    >
                        <i className="bi bi-x fs-2"></i>
                    </span>
                    {/* end::Remove */}
                </div>
                {/* end::Image input */}
                {/* begin::Hint */}
                {/* end::Hint */}
                {/* begin: View File  */}
                {curentFile ? (
                    <div className="form-text">
                        {/* <a href={curentFile}> View </a> */}
                        {show ? (
                            // <a href="#" onClick={handleClose}>
                            //     Close
                            // </a>
                            <button onClick={handleClose}>Close</button>
                        ) : (
                            // <a href="#" onClick={handleShow}>
                            //     View
                            // </a>
                            isuploaded ? <>< button onClick={handleShow}>View</button></> : <></>

                        )}
                        {show && (
                            <>

                                {value && value ? (
                                    <>
                                        {" "}
                                        {/* <div
                                            className="image-input-wrapper w-400px h-400px"
                                            style={{
                                                backgroundImage: `url('${url}')`,
                                                // backgroundImage: `${value}`,
                                                height: "200px",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        ></div> */}
                                        {console.log("values", value.file.length)}
                                        {value.file.length > 0 ?
                                            <>
                                                {value.file.map((item, key) => {
                                                    return (
                                                        <><a key={key} target={"_blank"} href={`${item.url}`}>
                                                            Download File
                                                        </a></>
                                                    )
                                                })}
                                            </>
                                            :
                                            <></>}

                                    </>
                                ) : (
                                    <>
                                        {/* <a target={"_blank"} href={`${value}`}>
                                            Download File
                                        </a> */}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                ) : (
                    ""
                )
                }
                {/* end: View File  */}
            </div >
        </>
    );
};
export { UploadFile };
