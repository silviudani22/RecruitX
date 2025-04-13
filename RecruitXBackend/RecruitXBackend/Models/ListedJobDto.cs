using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models
{
    public class ListedJobDto
    {
        public string companyName { set; get; }
        public string technology { set; get; }
        public string experienceNedeed { set; get; }
        public string flexibility { set; get; }
        public string program { set; get; }
        public string idCompany { set; get; }
    }
}
