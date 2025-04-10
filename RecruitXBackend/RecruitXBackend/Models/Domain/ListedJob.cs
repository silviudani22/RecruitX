using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models.Domain
{
    public class ListedJob
    {
        [Key]
        public int id { set; get; }
        public string companyName { set; get; }
        public string technology { set; get; }
        public string experienceNedeed { set; get; }
        public string flexibility { set; get; }
        public string program { set; get; }
        [ForeignKey("Company")]
        public string idCompany { set; get; }

        public ICollection<JobApplication> JobApplications { get; set; }
    }
}
