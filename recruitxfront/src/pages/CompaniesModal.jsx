import React, { useState } from "react";
import "../styles/JobModal.css";

const CompaniesModal = ({ onClose, onSave }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        domain: "",
        location : "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            Companyid: Number(form.Companyid),
            Company: null,
            JobApplications: null
        });
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Add Company</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Company Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />                    <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <input name="domain" placeholder="Work Domain" value={form.domain} onChange={handleChange} required />
                    <input
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />                    <div className="modal-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompaniesModal;