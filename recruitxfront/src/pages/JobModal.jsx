import React, { useState } from "react";
import "../styles/JobModal.css";

const JobModal = ({ onClose, onSave }) => {
    const [form, setForm] = useState({
        companyName: "",
        technology: "",
        experienceNeeded: "",
        flexibility: "",
        program: "",
        Companyid: "",
        title: ""
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
                <h2>Add Job</h2>
                <form onSubmit={handleSubmit}>
                    <input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} required />
                    <input name="technology" placeholder="Technology" value={form.technology} onChange={handleChange} required />
                    <input name="experienceNeeded" placeholder="Experience Needed" value={form.experienceNeeded} onChange={handleChange} required />
                    <input name="flexibility" placeholder="Work Mode" value={form.flexibility} onChange={handleChange} required />
                    <input name="program" placeholder="Schedule" value={form.program} onChange={handleChange} required />
                    <input name="Companyid" placeholder="Company ID" value={form.Companyid} onChange={handleChange} required />
                    <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
                    <div className="modal-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobModal;