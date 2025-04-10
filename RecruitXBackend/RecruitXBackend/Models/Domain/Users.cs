using System.ComponentModel.DataAnnotations;

namespace RecruitXBackend.Models.Domain
{
    public class Users
    {
        [Key]
        public int id { set; get; }
        public string username { set; get; }
        public string email { set; get; }
        public string password { set; get; }
        public string role { set; get; }
        public string lastName { set; get; }
        public string firstName { set; get; }

        public ICollection<JobApplication> JobApplications { get; set; }
    }
}
