import  { useState } from "react";

export const useForm = (initialObj = {}) => {
    const [form, setForm] = useState(initialObj);

    const changed = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const getFieldProps = (fieldName) => ({
        name: fieldName,
        value: form[fieldName] || "",
        onChange: (e) => {
            changed(e);
            setField(fieldName, e.target.value);
        },
    });

    const setField = (fieldName, value) => {
        setForm({
            ...form,
            [fieldName]: value,
        });
    };

    return {
        form,
        changed,
        getFieldProps,
        setField,
    };
};