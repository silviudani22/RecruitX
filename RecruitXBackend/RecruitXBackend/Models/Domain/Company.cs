using System.ComponentModel.DataAnnotations;

namespace RecruitXBackend.Models.Domain
{
    public class Company
    {
        [Key]
        public int id { set; get; }
        public string name { set; get; }
        public string domain { set; get; }
        public string location { set; get; }

        public ICollection<ListedJob> ListedJobs { get; set; }
    }
}
