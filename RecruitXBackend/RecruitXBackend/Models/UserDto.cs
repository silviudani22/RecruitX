using System.ComponentModel.DataAnnotations;

namespace RecruitXBackend.Models
{
    public class UserDto
    {
        [Required]
        public string username { set; get; }
        public string email { set; get; }
        [Required]
        public string password { set; get; }
        public string lastName { set; get; }
        public string firstName { set; get; }
    }
}
