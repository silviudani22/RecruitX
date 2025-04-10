using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitXBackend.Models.Domain
{
    public class JobApplication
    {
        [Key]
        public int id { set; get; }

        [ForeignKey("Users")]
        public int userId { set; get; }

        [ForeignKey("ListedJob")]
        public int jobId { set; get; }

        public DateTime applicationDate { set; get; }

    }
}
