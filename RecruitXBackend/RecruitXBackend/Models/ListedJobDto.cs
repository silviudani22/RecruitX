using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models
{
    public class ListedJobDto
    {
        public int id { get; set; }
        public string companyName { get; set; }
        public string technology { get; set; }
        public string experienceNeeded { get; set; }
        public string flexibility { get; set; }
        public string program { get; set; }
        public int Companyid { get; set; }
    }
}
