using Microsoft.EntityFrameworkCore;
using RecruitXBackend.Models.Domain;
namespace RecruitXBackend.Data
{
    public class RecruitXContext:DbContext
    {
        public RecruitXContext(DbContextOptions options) : base(options) { }

        public DbSet<Users> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<ListedJob> ListedJobs { get; set; }
        public DbSet<JobApplication> JobApplications { get; set; }

    }
}
