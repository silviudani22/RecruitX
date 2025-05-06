import { useNavigate } from 'react-router-dom';

export default function AddJobButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/add-job')}
            className="add-job-btn"
        >
            Add Job
        </button>
    );
}
