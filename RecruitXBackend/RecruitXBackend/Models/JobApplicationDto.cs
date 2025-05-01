using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models
{
    public class JobApplicationDto
    {
        public int userId { set; get; }
        public int jobId { set; get; }
        public DateTime applicationDate { set; get; }
    }
}
