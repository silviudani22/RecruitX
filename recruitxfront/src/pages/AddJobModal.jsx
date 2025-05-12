"use client"
import { useState } from 'react'
import axios from 'axios'

export default function AddJobModal({ onClose, onJobAdded }) {
    const [formData, setFormData] = useState({
        companyName: '',
        technology: '',
        experienceNedeed: '',
        flexibility: '',
        program: '',
        idCompany: ''
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setError('') // Resetează eroarea la modificare
    }

    const validateForm = () => {
        if (!formData.companyName.trim()) return 'Company name is required'
        if (!formData.idCompany.match(/^[0-9a-fA-F]{2}$/)) return 'Invalid Company ID format'
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const validationError = validateForm()
        if (validationError) {
            setError(validationError)
            setIsLoading(false)
            return
        }

        try {
            const response = await axios.post('http://localhost:5000/api/jobs', formData)

            if (response.status === 201) {
                onJobAdded()
                onClose()
            } else {
                setError(response.data.message || 'Failed to add job')
            }
        } catch (error) {
            console.error("Error adding job:", error.response?.data)
            setError(error.response?.data?.message ||
                error.message ||
                'Network error. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Add New Job</h2>

                {error && <div className="error-message">{error}</div>}


                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Technology</label>
                        <input
                            type="text"
                            name="technology"
                            value={formData.technology}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Experience Needed</label>
                        <select
                            name="experienceNedeed"
                            value={formData.experienceNedeed}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Entry Level">Entry Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Work Mode</label>
                        <select
                            name="flexibility"
                            value={formData.flexibility}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="On-site">On-site</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Schedule</label>
                        <select
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Company ID</label>
                        <input
                            type="text"
                            name="idCompany"
                            value={formData.idCompany}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Saving...' : 'Save Job'}
                        </button>
                    </div>
   
                </form>
            </div>
        </div>
    )
}