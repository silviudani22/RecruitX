using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models.Domain
{
    public class ListedJob
    {
        [Key]
        public int id { get; set; }
        public string companyName { get; set; }
        public string title { get; set; }
        public string technology { get; set; }
        public string experienceNeeded { get; set; }
        public string flexibility { get; set; }
        public string program { get; set; }

        [ForeignKey("Company")]
        public int Companyid { get; set; }
        public Company? Company { get; set; }
        public ICollection<JobApplication>? JobApplications { get; set; }
    }
}
